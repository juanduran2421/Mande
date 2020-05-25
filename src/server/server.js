const { Client } = require("pg");
const express = require("express");
const app = express();
app.use(express.json());

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5433,
  database: "postgres",
});

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

app.post("/crearlabor", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await CrearLabor(reqJson.nombre_labor, reqJson.labor_id);
    result.success = cre;
  } catch (e) {
    result.success = 'f';
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.post("/ingresarusuario", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await IngresarUsuario(
      reqJson.email,
      reqJson.celular,
      reqJson.nombre,
      reqJson.email,
      reqJson.genero,
      reqJson.password,
      reqJson.recibo,
      reqJson.fecha_nacimiento,
      reqJson.id_direccion,
      reqJson.longitud,
      reqJson.latitud
    );
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.post("/ingresartrabajador", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await IngresarTrabajador(
      reqJson.email,
      reqJson.celular,
      reqJson.nombre,
      reqJson.email,
      reqJson.estado,
      reqJson.genero,
      reqJson.password,
      reqJson.fecha_nacimiento,
      reqJson.foto_documento,
      reqJson.foto_perfil,
      reqJson.id_direccion,
      reqJson.longitud,
      reqJson.latitud
    );
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.post("/metodoPago", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await MetodoPago(
      reqJson.forma_pago,
      reqJson.banco,
      reqJson.fecha_vencimiento,
      reqJson.cvv,
      reqJson.num_tarjeta,
      reqJson.id_usuario
    );
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.get("/listarTrabajadores", async (req, res) => {
  const rows = await listarTrabajadores();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.get("/obtenerTrabajador", async (req, res) => {
  const reqJson = req.body;
  const rows = await ObtenerTrabajador(reqJson.id_trabajador);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.get("/obtenerUsuario", async (req, res) => {
  const reqJson = req.body;
  const rows = await ObtenerUsuario(reqJson.id_usuario);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.get("/obtenerLabor", async (req, res) => {
  const reqJson = req.body;
  const rows = await ObtenerLabor(reqJson.id_labor);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.get("/login", async (req, res) => {
  const reqJson = req.body;
  const rows = await Login(reqJson.id, reqJson.password);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.put("/actualizarTrabajador", async (req, res) => {
  const reqJson = req.body;
  const rows = await ActualizarTrabajador(
    reqJson.campo,
    reqJson.id_trabajador,
    reqJson.nuevoValor
  );
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.put("/actualizarUsuario", async (req, res) => {
  const reqJson = req.body;
  const rows = await ActualizarUsuario(
    reqJson.campo,
    reqJson.id_usuario,
    reqJson.nuevoValor
  );
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.post("/cambiarEstado", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await CambiarEstado(reqJson.estado, reqJson.id_trabajador);
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.post("/ingresarPago", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await IngresarPago(
      reqJson.puntuacion_pago,
      reqJson.fecha_pago,
      reqJson.monto,
      reqJson.id_usuario,
      reqJson.id_trabajador,
      reqJson.id_labor,
      reqJson.horas
    );
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.get("/listarLabores", async (req, res) => {
  const rows = await ListarLabores();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.get("/listarUsuarios", async (req, res) => {
  const rows = await ListarUsuarios();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.get("/listarPrecioLabor", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await ListarPrecioLabor(reqJson.id_labor);
    result.success = cre;
  } catch (e) {
    result.success = 'f';
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.get("/listarPuntuacionDeLabor", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await ListarPuntuacionDeLabor(reqJson.id_labor);
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.get("/promedioPuntuacion", async (req, res) => {
  const rows = await PromedioPuntuacion();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.post("/solicitarServicio", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await SolicitarServicio(
      reqJson.id_labor,
      reqJson.id_usuario,
      reqJson.id_trabajador,
      reqJson.descripcion
    );
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.get("/laboresDisponibles", async (req, res) => {
  const rows = await LaboresDisponibles();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});

app.put("/asociarLabores", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    const cre = await AsociarLabores(
      reqJson.ids_labor,
      reqJson.id_trabajador,
      reqJson.precio
    );
    result.success = cre;
  } catch (e) {
    result.success = "fallo";
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.delete("/todos", async (req, res) => {
  let result = {};
  try {
    const reqJson = req.body;
    await deleteTodo(reqJson.id);
    result.success = true;
  } catch (e) {
    result.success = false;
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.listen(8080, () => console.log("Web server is listening.. on port 8080"));

start();

async function start() {
  await connect();
}

async function connect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(`Failed to connect ${e}`);
  }
}

async function listarTrabajadores() {
  try {
    const results = await client.query("SELECT * FROM Trabajador");
    return results.rows;
  } catch (e) {
    return [];
  }
}

async function deleteTodo(id) {
  try {
    await client.query("delete from todos where id = $1", [id]);
    return true;
  } catch (e) {
    return false;
  }
}

async function CrearUsuario(
  id_usuario,
  celular,
  nombre,
  email,
  genero,
  pass,
  recibo,
  fNacimiento
) {
  try {
    const text = "INSERT INTO USUARIO VALUES($1, $2, $3, $4, $5, $6, $7, $8);";
    const values = [
      id_usuario,
      celular,
      nombre,
      email,
      genero,
      pass,
      recibo,
      fNacimiento,
    ];
    await client.query(text, values);
    return "usuario creado con exito";
  } catch (e) {
    return "fallo al crear usuario";
  }
}

async function CrearTrabajador(
  id_trabajador,
  celular,
  nombre,
  email,
  estado,
  genero,
  pass,
  fNacimiento,
  fotoDocumento,
  fotoPerfil
) {
  try {
    const text =
      "INSERT INTO Trabajador VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";
    const values = [
      id_trabajador,
      celular,
      nombre,
      email,
      estado,
      genero,
      pass,
      fNacimiento,
      fotoDocumento,
      fotoPerfil,
    ];
    await client.query(text, values);
    return "trabajador creado con exito";
  } catch (e) {
    return "fallo al crear trabajador";
  }
}

async function CrearLabor(nombre, id_labor) {
  try {
    const text = "INSERT INTO Labor VALUES($1, $2);";
    const values = [nombre, id_labor];
    await client.query(text, values);
    return "labor creada con exito";
  } catch (e) {
    return "fallo al crear labor";
  }
}

async function CrearDireccion(id_direccion, longitud, latitud) {
  try {
    const text = "INSERT INTO direccion VALUES($1, $2, $3);";
    const values = [id_direccion, longitud, latitud];
    await client.query(text, values);
    return "direccion creada con exito";
  } catch (e) {
    return "fallo";
  }
}

async function AsociarDireccionTrabajador(id_direccion, id_trabajador) {
  try {
    const text = "INSERT INTO DireccionTrabajador VALUES($1, $2);";
    const values = [id_direccion, id_trabajador];
    await client.query(text, values);
    return "asociar direccion a trabajador con exito";
  } catch (e) {
    return "fallo asociar direccion trabajador";
  }
}

async function AsociarDireccionUsuario(id_direccion, id_usuario) {
  try {
    const text = "INSERT INTO DireccionUsuario VALUES($1, $2);";
    const values = [id_direccion, id_usuario];
    await client.query(text, values);
    return "asociar direccion a usuario con exito";
  } catch (e) {
    return "fallo asociar direccion usuario";
  }
}

async function AsociarLaborTrabajador(id_labor, id_trabajador, precio) {
  try {
    const text = "INSERT INTO LaborTrabajador VALUES($1, $2, $3);";
    const values = [id_labor, id_trabajador, precio];
    await client.query(text, values);
    return "asociar labor a trabajador con exito";
  } catch (e) {
    return "fallo asociar labor trabajador";
  }
}

async function SolicitarServicio(
  id_labor,
  id_usuario,
  id_trabajador,
  descripcion
) {
  try {
    const text =
      "SELECT * FROM LaborTrabajador WHERE id_labor = $1 AND id_trabajador = $2;";
    const values = [id_labor, id_trabajador];
    const res = await client.query(text, values);

    if (res.rows.length > 0) {
      const newText = "INSERT INTO Solicita VALUES($1, $2, $3, $4);";
      const newValues = [id_labor, id_usuario, id_trabajador, descripcion];
      await client.query(newText, newValues);
      return "solicitud de servicio con exito";
    } else {
      return "El trabajador no está disponible para realizar esta labor";
    }
  } catch (e) {
    return "fallo la solicitud";
  }
}

async function IngresarPago(
  puntuacion_pago,
  fecha_pago,
  monto,
  id_usuario,
  id_trabajador,
  id_labor,
  horas
) {
  try {
    const text =
      "SELECT precio_labor_trabajador FROM laborTrabajador NATURAL JOIN Solicita WHERE id_labor = $1 AND id_trabajador = $2 AND id_usuario = $3;";
    const values = [id_labor, id_trabajador, id_usuario];
    const res = await client.query(text, values);

    if (res.rows.length > 0) {
      const precio_hora = res.rows[0].precio_labor_trabajador * horas;
      if (monto < precio_hora) {
        return "El pago es menor de lo esperado";
      } else {
        const newText = "INSERT INTO Pago VALUES($1, $2, $3, $4, $5);";
        const newValues = [
          puntuacion_pago,
          fecha_pago,
          monto,
          id_usuario,
          id_trabajador,
        ];
        await client.query(newText, newValues);
        return "se pudo hacer el pago";
      }
    } else {
      return "Ha ocurrido un error con el pago";
    }
  } catch (e) {
    return "fallo el pago";
  }
}

async function MetodoPago(
  forma_pago,
  banco,
  fecha_vencimiento,
  cvv,
  num_tarjeta,
  id_usuario
) {
  try {
    const text = "INSERT INTO MetodoPago VALUES($1, $2, $3, $4, $5, $6);";
    const values = [
      forma_pago,
      banco,
      fecha_vencimiento,
      cvv,
      num_tarjeta,
      id_usuario,
    ];
    await client.query(text, values);
    return "metodo de pago ingresado con exito";
  } catch (e) {
    return "fallo el metodo de pago";
  }
}

async function LaboresDisponibles() {
  try {
    const res = await client.query(
      "SELECT * FROM Labor NATURAL JOIN LaborTrabajador"
    );
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function PromedioPuntuacion() {
  try {
    const res = await client.query(
      "SELECT id_trabajador, puntuacion FROM PROMEDIODEPUNTUACION ORDER BY puntuacion DESC"
    );
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function CambiarEstado(estado, id_trabajador) {
  try {
    const text =
      "UPDATE Trabajador SET estado_trabajador = $1 WHERE id_trabajador = $2";
    const values = [estado, id_trabajador];
    await client.query(text, values);
    return "estado cambiado con exito";
  } catch (e) {
    return "fallo el cambio de estado";
  }
}

async function ListarPrecioLabor(id_labor) {
  try {
    const text =
      "SELECT ID_TRABAJADOR, NOMBRE_TRABAJADOR, PRECIO_LABOR_TRABAJADOR FROM TRABAJADOR_LABOR_PRECIO NATURAL JOIN TRABAJADOR WHERE ID_LABOR = $1";
    const value = [id_labor];
    const res = await client.query(text, value);
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ListarPuntuacionDeLabor(id_labor) {
  try {
    const text =
      "SELECT ID_TRABAJADOR, NOMBRE_TRABAJADOR, PUNTUACION FROM TRABAJADORLABOR_PUNTUACION NATURAL JOIN TRABAJADOR WHERE ID_LABOR = $1";
    const value = [id_labor];
    const res = await client.query(text, value);
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ListarUsuarios() {
  try {
    const res = await client.query("SELECT * FROM Usuario");
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ListarLabores() {
  try {
    const res = await client.query("SELECT * FROM Labor");
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ObtenerTrabajador(id_trabajador) {
  try {
    const text = "SELECT * FROM Trabajador WHERE id_trabajador = $1";
    const value = [id_trabajador];
    const res = await client.query(text, value);
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ObtenerUsuario(id_usuario) {
  try {
    const text = "SELECT * FROM Usuario WHERE id_usuario = $1";
    const value = [id_usuario];
    const res = await client.query(text, value);
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ObtenerLabor(id_labor) {
  try {
    const text = "SELECT * FROM Labor WHERE id_labor = $1";
    const value = [id_labor];
    const res = await client.query(text, value);
    return res.rows;
  } catch (e) {
    return [];
  }
}

async function ActualizarTrabajador(campo, id_trabajador, nuevoValor) {
  try {
    const text =
      "UPDATE Trabajador SET " + campo + " = $1 WHERE id_trabajador = $2";
    const values = [nuevoValor, id_trabajador];
    await client.query(text, values);
    return "actualizado con exito";
  } catch (e) {
    return "fallo al actualizar";
  }
}

async function ActualizarUsuario(campo, id_usuario, nuevoValor) {
  try {
    const text = "UPDATE Usuario SET " + campo + " = $1 WHERE id_usuario = $2";
    const values = [nuevoValor, id_usuario];
    await client.query(text, values);
    return "actualizado con exito";
  } catch (e) {
    return "fallo al actualizar";
  }
}

async function IngresarUsuario(
  id_usuario,
  celular,
  nombre,
  email,
  genero,
  pass,
  recibo,
  fNacimiento,
  id_direccion,
  longitud,
  latitud
) {
  try {
    const creaDir = await CrearDireccion(id_direccion, longitud, latitud);
    if (creaDir === "fallo") {
      return "fallo direccion";
    }

    const creaUser = await CrearUsuario(
      id_usuario,
      celular,
      nombre,
      email,
      genero,
      pass,
      recibo,
      fNacimiento
    );
    if (creaUser === "fallo al crear usuario") {
      return "fallo usuario";
    }

    const asocDirUser = await AsociarDireccionUsuario(id_direccion, id_usuario);
    if (asocDirUser === "fallo asociar direccion usuario") {
      return "fallo asociar direccion usuario";
    }

    return "ingreso de usuario exitoso";
  } catch (e) {
    return "fallo con el ingreso de usuario";
  }
}

async function IngresarTrabajador(
  id_trabajador,
  celular,
  nombre,
  email,
  estado,
  genero,
  pass,
  fNacimiento,
  fotoDocumento,
  fotoPerfil,
  id_direccion,
  longitud,
  latitud
) {
  try {
    const creaDir = await CrearDireccion(id_direccion, longitud, latitud);
    if (creaDir === "fallo") {
      return "fallo direccion";
    }

    const creaTrab = await CrearTrabajador(
      id_trabajador,
      celular,
      nombre,
      email,
      estado,
      genero,
      pass,
      fNacimiento,
      fotoDocumento,
      fotoPerfil
    );
    if (creaTrab === "fallo al crear trabajador") {
      return "fallo trabajador";
    }

    const asocDirTrab = await AsociarDireccionTrabajador(
      id_direccion,
      id_trabajador
    );
    if (asocDirTrab === "fallo asociar direccion trabajador") {
      return "fallo asociar direccion trabajador";
    }

    return "ingreso de trabj con exito";
  } catch (e) {
    return "fallo al ingresar trabajador";
  }
}

async function AsociarLabores(ids_labor, id_trabajador, precio) {
  try {
    var i;
    for (i = 0; i < ids_labor.length; i++) {
      AsociarLaborTrabajador(ids_labor[i], id_trabajador, precio);
    }
    return "labores asociadas satisfactoriamente";
  } catch (e) {
    return "fallo";
  }
}

async function Login(email, contraseña) {
  try {
    const text =
      "SELECT * FROM Trabajador WHERE id_trabajador = $1 AND password_trabajador = $2";
    const value = [email, contraseña];
    const res = await client.query(text, value);

    if (res.rows.length > 0) {
      return "El trabajador inicio sesion satisfactoriamente";
    } else {
      const text =
        "SELECT * FROM Usuario WHERE id_usuario = $1 AND password_usuario = $2";
      const value = [email, contraseña];
      const res = await client.query(text, value);

      if (res.rows.length > 0) {
        return "El usuario inicio sesion satisfactoriamente";
      } else {
        return "fallo";
      }
    }
  } catch (e) {
    return [];
  }
}
