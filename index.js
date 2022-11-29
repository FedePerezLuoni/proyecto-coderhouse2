/* let nombre = prompt("Buenas, por favor ingrese su nombre");

const productos = [
  { id: 1, nombre: "Remera", precio: 3000 },
  { id: 2, nombre: "Buzos", precio: 10000 },
  { id: 3, nombre: "Bermudas", precio: 5000 },
  { id: 4, nombre: "Pantalones", precio: 7500 },
];

let catalogo;

if (!nombre) {
  nombre = "usuario";
}

function mostrarCatalogo() {
  let textoOpciones = "";
  for (producto of productos) {
    textoOpciones += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
  }
  catalogo = prompt(
    `Hola ${
      nombre[0].toUpperCase() + nombre.substring(1)
    } que desea comprar? \n${textoOpciones}`
  );

  const productoCompra = productos.find((producto) => producto.id == catalogo);
  if (productoCompra) {
    comprar(productoCompra);
    seguirCompra();
  } else if (catalogo) {
    mostrarCatalogo();
  }
}

function comprar(producto) {
  let compra = confirm(
    `El precio de la ${producto.nombre} es $${producto.precio} \n¿Desea continuar con la compra?`
  );
  if (compra) {
    alert(`${producto.nombre} comprada con exito!`);
  }
}

function seguirCompra() {
  let seguirCompra = confirm("¿Quiere continuar comprando?");
  if (seguirCompra) {
    mostrarCatalogo();
  }
} */

/* function comprarProducto(nombre, precio) {
  let carrito = [];
  if (localStorage.getItem("cart") != undefined) {
    carrito = JSON.parse(localStorage.getItem("cart"));
  }
  carrito.push({ nombre, precio });
  localStorage.setItem("cart", JSON.stringify(carrito));
} */

/* CARRITO DE COMPRA */

function comprarProducto(nombre, precio) {
  let carrito = [];
  if (localStorage.getItem("cart") != undefined) {
    carrito = JSON.parse(localStorage.getItem("cart"));
    alert("Producto agregado al carrito");
  }
  carrito.push({ nombre, precio });
  localStorage.setItem("cart", JSON.stringify(carrito));
}
