const ingreso = require("./componentes/validacion");
const Tareas = require("./componentes/tareas");

let respuesta = [];

async function ValidacionR() {
  let res = await ingreso.Validacion(1, "1. Guardar; 2. Eliminar; 3. Editar");
  respuesta = [];
  respuesta.push(Number(res));

  let opt = respuesta[0];

  switch (opt) {
    case 1:
      Tareas.Guardar();
      break;
    case 2:
      Tareas.Eliminar();
      break;
    case 3:
      Tareas.Editar();
      break;
  }
}

ValidacionR();
