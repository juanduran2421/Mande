import React from "react";
import Server from "../server/server";

function PagoPage(props) {
  return (
    <div className="base-container">
      <div className="header">Realizar Pago</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="tipoTarjeta">Tarjeta</label>
            <select name="tipoTarjeta">
              <option value="select">selecciona (tarjeta)</option>
              <option value="credito">Tarjeta1</option>
              <option value="debito">Tarjeta2</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="trabajador">Trabajador</label>
            Jose David Lopez
          </div>

          <div className="form-group">
            <label htmlFor="calificacion">Calificacion</label>
            estrellitas
          </div>

          <div className="form-group">
            <label htmlFor="horas">Horas</label>2
          </div>

          <div className="form-group">
            <label htmlFor="precioHora">Precio Hora</label>
            10.000
          </div>
          <div className="form-group">
            <label htmlFor="total">TOTAL</label>
            20.000 $ COP
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn btn-primary">
          Registrar Metodo de Pago
        </button>
      </div>
    </div>
  );
}

export default PagoPage;
