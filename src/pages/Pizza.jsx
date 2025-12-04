import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams(); // 👈 obtenemos el id dinámico
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      setPizza(data);
    };
    fetchPizza();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex gap-4">
        <img src={pizza.img} width="350" alt={pizza.name} />

        <div>
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <h3 className="mt-3">Precio: ${pizza.price}</h3>

          <button
            className="btn btn-danger mt-3"
            onClick={() =>
              addToCart({
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                img: pizza.img,
              })
            }
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
