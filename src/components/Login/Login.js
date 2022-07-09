import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utlis/auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.Login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        UserName :{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <label>
        Email : <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password :{" "}
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin} style={{ width: "5rem" }}>
        Login
      </button>
    </div>
  );
};
