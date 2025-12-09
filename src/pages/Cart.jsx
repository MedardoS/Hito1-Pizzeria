import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increase, decrease, total, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 👉 Enviar compra al backend + Vaciar carrito + Redirigir
  const handleCheckout = async () => {
    if (!token) {
      setMessage("❌ Debes iniciar sesión para comprar.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // 🟢 COMPRA EXITOSA
      setMessage("✅ Compra realizada con éxito.");

      // 🟢 VACIAR CARRITO DESPUÉS DE PAGAR
      clearCart();

      // 🟢 REDIRIGIR AL HOME DESPUÉS DE UN SEGUNDO
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      setMessage("❌ Error al procesar el pago: " + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito de compras</h2>

      {cart.map((p) => (
        <div
          key={p.id}
          className="d-flex justify-content-between align-items-center border p-3 mb-2 rounded bg-white"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={p.img} alt={p.name} width="80" />
            <h5>{p.name}</h5>
          </div>

          <div className="d-flex align-items-center gap-3">
            <p className="fw-bold mb-0">${p.price * p.quantity}</p>

            <button
              className="btn btn-outline-danger"
              onClick={() => decrease(p.id)}
            >
              -
            </button>

            <span>{p.quantity}</span>

            <button
              className="btn btn-outline-success"
              onClick={() => increase(p.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-3">Total: ${total}</h4>

      <button className="btn btn-danger mt-3" onClick={handleCheckout}>
        Pagar
      </button>

      {message && <p className="mt-3 text-center fw-bold">{message}</p>}
    </div>
  );
};

export default Cart;
