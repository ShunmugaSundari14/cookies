import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user-context";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login.php", {
        email,
        password,
      });

      const data = response.data;
      console.log(data, "data <")

      if (response.status == 200) {
        toast.success("Login successful");
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        navigate("/");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>

      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <p style={styles.registerText}>
        Don't have an account?{" "}
        <span onClick={() => navigate("/registration")} style={styles.link}>
          Register here
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: "100px auto",
    padding: 30,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 15,
    padding: "0 10px",
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: 14,
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  registerText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default LoginPage;
