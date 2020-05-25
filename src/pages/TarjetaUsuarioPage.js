import React from "react";
import Server from "../server/server";
import { useForm } from "react-hook-form";

function TarjetaUsuarioPage(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="base-container">
        <div className="header">Registrar Tarjeta</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="nombreCompleto">Nombre</label>
              <input
                type="text"
                name="nombre"
                ref={register}
                placeholder="jose luis cantillo mejia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="numeroTarjeta">Numero Tarjeta</label>
              <input
                type="number"
                name="numeroTarjeta"
                ref={register}
                placeholder="4152 2345 5683 4543"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipoTarjeta">Tipo Tarjeta</label>
              <select name="tipoTarjeta" ref={register}>
                <option value="select">selecciona (tipo de tarjeta)</option>
                <option value="credito">Credito</option>
                <option value="debito">Debito</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bancoTarjeta">Banco</label>
              <input
                type="text"
                name="bancoTarjeta"
                ref={register}
                placeholder="bancolombia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="fechaVencimiento">Fecha Vencimiento</label>
              <input
                type="date"
                ref={register}
                name="fechaVencimientoTarjeta"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">Numero Tarjeta</label>
              <input
                type="numeroTarjeta"
                ref={register}
                name="cvv"
                placeholder="123"
              />
              <p>128-bit-secured</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn btn-primary">
            Registrar Metodo de Pago
          </button>
        </div>
      </div>
    </form>
  );
}

export default TarjetaUsuarioPage;
