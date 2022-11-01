let nombre = prompt("Buenas, por favor ingrese su nombre");

let catalogo;

if (!nombre) {
  nombre = "usuario";
}

function mostrarCatalogo() {
  catalogo = prompt(
    `Hola ${nombre[0].toUpperCase() + nombre.substring(1)} que desea comprar? 
        1. Remeras 
        2. Buzos 
        3. Bermudas`
  );
  if (catalogo) {
    switch (catalogo) {
      case "1":
        comprar("remera", 3000);
        seguirCompra();
        break;

      case "2":
        comprar("buzo", 10000);
        seguirCompra();
        break;

      case "3":
        comprar("bermuda", 7500);
        seguirCompra();
        break;

      default:
        mostrarCatalogo();
        break;
    }
  }
}

function comprar(prenda, precio) {
  let compra = confirm(
    `El precio de la ${prenda} es $${precio} \n¿Desea continuar con la compra?`
  );
  if (compra) {
    alert(
      `${prenda[0].toUpperCase() + prenda.substring(1)} comprada con exito!`
    );
  }
}

function seguirCompra() {
  let seguirCompra = confirm("¿Quiere continuar comprando?");
  if (seguirCompra) {
    mostrarCatalogo();
  }
}
