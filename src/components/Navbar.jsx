import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🍕 Mamma Mía!</Link>

      <div className="d-flex gap-3 align-items-center">
        {token ? (
          <>
            <Link to="/profile" className="text-white">Perfil</Link>
            <button className="btn btn-outline-light" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/register" className="text-white">Register</Link>
          </>
        )}

        <Link className="btn btn-danger" to="/cart">
          🛒 Total: ${total}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
