import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <Link to="/" className="navbar-brand">🍕 Mamma Mía!</Link>

      <div>
        <Link to="/register" className="btn btn-outline-light me-2">Registro</Link>
        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
        <Link to="/profile" className="btn btn-outline-light me-2">Perfil</Link>

        <Link to="/cart" className="btn btn-success">
          🛒 Total: $0
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
