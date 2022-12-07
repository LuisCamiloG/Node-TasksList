exports.Validacion = (validation, mensaje) => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    switch (validation) {
      case 1:
        setTimeout(() => {
          console.log("Bienvenido");
        }, 1000);

        setTimeout(() => {
          console.log("¿Qué desea realizar?");
        }, 2000);

        setTimeout(() => {
          readline.question(mensaje, (res) => {
            resolve(res);
            readline.close();
          });
        }, 3000);
        break;

      case 2:
        readline.question(mensaje, (res) => {
          resolve(res);
          readline.close();
        });
        break;
      default:
        break;
    }
  });
};
