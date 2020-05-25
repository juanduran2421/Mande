import React from "react";
import Server from "../server/server";
import { useForm } from "react-hook-form";

function RegisterPage(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="base-container">
        <div className="header">Registro Usuarios</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nombres</label>
              <input
                type="text"
                name="nombres"
                ref={register}
                placeholder="jose luis"
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                name="apellidos"
                ref={register}
                placeholder="ruiz sierra"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                ref={register}
                placeholder="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                ref={register}
                placeholder="password"
              />
            </div>

            {/* Info Direccion https://developer.here.com/blog/street-address-validation-with-reactjs-and-here-geocoder-autocomplete */}
            <div className="form-group">
              <label htmlFor="direccion">Direccion</label>
              <input
                type="text"
                name="direccion"
                ref={register}
                placeholder="calle 2D"
              />
            </div>

            <div className="form-group">
              <label htmlFor="celular">Celular</label>
              <input
                type="number"
                name="celular"
                ref={register}
                placeholder="3105302354"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nacimiento">Fecha Nacimiento</label>
              <input type="date" name="fechaNacimiento" ref={register} />
            </div>

            <div className="form-group">
              <label htmlFor="genero">Genero</label>
              <select name="genero" ref={register}>
                <option value="select">selecciona (genero)</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="recibo">Foto Recibo Publico</label>
              <input type="file" name="reciboPublico" ref={register} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterPage;
