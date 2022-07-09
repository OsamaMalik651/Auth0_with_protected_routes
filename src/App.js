import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { Product } from "./components/Product/Product";
import { Profile } from "./components/Profile/Profiel";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import "./styles.css";
import { AuthProvider } from "./utlis/auth";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
