import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

const Login = () => {
  const navigate = useNavigate();
  
  const { form, updateForm } = useForm({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={updateForm}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={updateForm}
      />
 
      <button
        onClick={async () => {
          try {
            console.log(form);

            const response = await axios.post(
              "http://127.0.0.1:8080/auth/login",
              form,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            console.log(response.data);

            const { access_token, user } = response.data;

            localStorage.setItem("token", access_token);
          } catch (e) {
            console.log(e.response.data);
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
