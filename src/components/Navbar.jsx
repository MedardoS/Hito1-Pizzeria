import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🍕 Mamma Mía!</Link>

      <div className="d-flex gap-3">
        <Link to="/register">Registro</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Perfil</Link>

        <Link className="btn btn-danger" to="/cart">
          🛒 Total: ${total}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
