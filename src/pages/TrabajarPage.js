import React from "react";
import Server from "../server/server";
import { useForm } from "react-hook-form";

function TrabajarPage(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="base-container">
        <div className="header">Registro Empleados</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nombres</label>
              <input
                type="text"
                name="nombres"
                placeholder="jose luis"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                name="apellidos"
                placeholder="ruiz sierra"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
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
                ref={register}
              />
            </div>

            {/* Info Direccion https://developer.here.com/blog/street-address-validation-with-reactjs-and-here-geocoder-autocomplete */}
            <div className="form-group">
              <label htmlFor="direccion">Direccion</label>
              <input
                type="text"
                name="direccion"
                placeholder="calle 2D"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label htmlFor="celular">Celular</label>
              <input
                type="number"
                name="celular"
                placeholder="3105302354"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label htmlFor="nacimiento">Fecha Nacimiento</label>
              <input type="date" name="fecha" ref={register} />
            </div>

            <div className="form-group">
              <label htmlFor="genero">Genero</label>
              <select name="genero" ref={register}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fotoPerfil">Foto de Perfil</label>
              <input type="file" name="fotoPerfil" ref={register} />
            </div>

            <div className="form-group">
              <label htmlFor="fotoIdentidad">Foto Documento de Identidad</label>
              <input type="file" name="fotoIdentidad" ref={register} />
            </div>
            <div className="form-group">
              <label>Labores</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="plomero"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="plomero" className="form-check-label">
                Plomero
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="cerrajero"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="cerrajero" className="form-check-label">
                Cerrajero
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="profesorIngles"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="profesorIngles" className="form-check-label">
                Profesor de Ingles
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="paseadorPerros"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="paseadorPerros" className="form-check-label">
                Paseador de Perros
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="ninera"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="ninera" className="form-check-label">
                Ninera
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="chef"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="chef" className="form-check-label">
                Chef
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="profesorMusica"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="profesorMusica" className="form-check-label">
                Profesor de Musica
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="servicioAseo"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="servicioAseo" className="form-check-label">
                Servicio de Aseo
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="profesorMatematicas"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="profesorMatematicas" className="form-check-label">
                Profesor de Matematicas
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="pintor"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="pintor" className="form-check-label">
                Pintor
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="carpintero"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="carpintero" className="form-check-label">
                Carpintero
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="instaladorMuebles"
                ref={register}
                className="form-check-input"
              />
              <label htmlFor="instaladorMuebles" className="form-check-label">
                Instalador de Muebles
              </label>
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

export default TrabajarPage;
