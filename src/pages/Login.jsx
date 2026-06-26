import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FIXED
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      console.log("Sending login request...");

      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      console.log("Response:", response);

      login(
        response.data.user,
        response.data.token
      );

    } catch (error) {
      console.log("Message:", error.message);
      console.log("Code:", error.code);
      console.log("Response:", error.response);
      console.log("Request:", error.request);
      console.log("Config:", error.config);

    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button type="submit">
        Login
      </button>

    </form>
  );
}