import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import { CartProvider } from "./context/CartProvider";     // 👈 Carrito global
import { UserProvider } from "./context/UserProvider";     // 👈 Usuario global
import ProtectedRoute from "./routes/ProtectedRoute";      // 👈 Ruta protegida


function App() {
  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>

            {/* Página principal */}
            <Route path="/" element={<Home />} />

            {/* Login/Register (si token = true, debería redirigir, pero por ahora está ok así) */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Carrito de compras */}
            <Route path="/cart" element={<Cart />} />

            {/* Pizza dinámica con useParams */}
            <Route path="/pizza/:id" element={<Pizza />} />

            {/* Perfil protegido */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
