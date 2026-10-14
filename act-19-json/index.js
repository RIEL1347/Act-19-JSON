import * as ctrl from "./src/controllers/producto.controller.js"
import * as model from "./src/models/producto.model.js"

console.log("------- PRODUCTO A ARRANCAR ---------");
console.log(model.listar().map((p) => p.nombre));

console.log("------- CREANDO UNO NUEVO --------");
const nombre = "Sincronizada" + Date.now();
const creado = ctrl.crearProducto({nombre, precio:32, categoria:"comida"});

// El controlador devuelve "{ok:data}" o "{ok:false, error}"
// Asi que SIEMPRE se tiene que revisar que de los dos llego antes de usar el .data

if(creado.ok){
    console.log("creado", creado.data.nombre);
} else {
    console.log("no se pudo crear:", creado.error.mensaje);
} 


console.log("---------- Productos ahora -----------");
console.log(model.listar().map((p) => p.nombre));

console.log("")
console.log("Abre 'src/data/productos.json' y compruebalo");
console.log("Vuelve a ejecutar: el producto anterior sigue ahi");