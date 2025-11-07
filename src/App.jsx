import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}

export default App;