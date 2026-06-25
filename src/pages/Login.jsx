import {
  useState
} from "react";

import api from "../api/axios";

import {
  useAuth
} from "../context/AuthContext";

export default function Login() {

  const [email,
    setEmail] =
      useState("");

  const [password,
    setPassword] =
      useState("");

  const { login } =
    useAuth();

  async function handleSubmit(
    e
  ) {

    e.preventDefault();

    const response =
      await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

    login(
      response.data.user,
      response.data.token
    );
  }

  return (
    <form
      onSubmit={
        handleSubmit
      }
    >
      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(
            e.target.value
          )
        }
      />

      <button>
        Login
      </button>
    </form>
  );
}