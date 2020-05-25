import React from "react";
import Server from "../server/server";
import { useForm } from "react-hook-form";

function LoginPage(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                ref={register}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                ref={register({
                  required: "Password es Obligatorio",
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
