/* CARRITO DE COMPRA */

let listaProductos = [
  {
    id: 1,
    nombre: "Trapstar",
    cantidad: 1,
    precio: 15000,
    img: "../img/buzo_trapstar.png",
  },
  {
    id: 2,
    nombre: "Vcode",
    cantidad: 1,
    precio: 10000,
    img: "../img/buzo_vcode.jpg",
  },
  {
    id: 3,
    nombre: "Culture",
    cantidad: 1,
    precio: 12500,
    img: "../img/buzo_culture.png",
  },
  {
    id: 4,
    nombre: "Fallen",
    cantidad: 1,
    precio: 15000,
    img: "../img/buzo_fallen.png",
  },
  {
    id: 5,
    nombre: "B$TRD Crew",
    cantidad: 1,
    precio: 5000,
    img: "../img/remera_crew.png",
  },
  {
    id: 6,
    nombre: "H8ers",
    cantidad: 1,
    precio: 5000,
    img: "../img/remera_h8ers.png",
  },
  {
    id: 7,
    nombre: "Sorry 13",
    cantidad: 1,
    precio: 5000,
    img: "../img/remera_s13.png",
  },
  {
    id: 8,
    nombre: "THRIVING CHAOS",
    cantidad: 1,
    precio: 5000,
    img: "../img/remera_chaos.png",
  },
];

let carrito = [];

const contenedorProductos = document.querySelector("#contenedor__productos");

const contenedorCarrito = document.querySelector("#contenedor__carrito");

const vaciarCarrito = document.querySelector("#vaciar__carrito");

const precioTotal = document.querySelector("#total");

listaProductos.forEach((productos) => {
  const { id, nombre, cantidad, precio, img } = productos;
  contenedorProductos.innerHTML += `
  <div class="tarjeta" data-aos="fade-right">
    <h3>${nombre}</h3>
    <img
      src="${img}"
      alt="Tarjeta de producto"
      class="tarjeta__img"
    />
    <p class="productos__precio">$${precio}</p>
    <button onclick="agregarProducto(${id})" class="boton__activo">
      Comprar
    </button>
  </div>
  `;
});

function agregarProducto(id) {
  const item = listaProductos.find((productos) => productos.id === id);
  carrito.push(item);

  mostrarCarrito();
}

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");

  modalBody.innerHTML = "";
  carrito.forEach((productos) => {
    const { id, nombre, cantidad, precio, img } = productos;
    modalBody.innerHTML += `
    <div class="modal__contenedor">
    
    <div>
    <img class="img-fluid carrito__img" src="${img}"/>
    </div>
    
    <div>
    <p>Producto: ${nombre}</p>
    <p>Precio: ${precio}</p>
    <p>Cantidad: ${cantidad}</p>

    <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>
    </div>

    </div>
    `;
  });

  contenedorCarrito.textContent = carrito.length;

  if (carrito.length === 0) {
    modalBody.innerHTML = `
    <p class="text-center"> El carrito esta vacio! </p>
    `;
  }

  precioTotal.innerText = carrito.reduce(
    (acumulador, productos) =>
      acumulador + productos.cantidad * productos.precio,
    0
  );

  storage();
};

function eliminarProducto(id) {
  const prendaId = id;
  carrito = carrito.filter((prenda) => prenda.id !== prendaId);
  mostrarCarrito();
}

function storage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
});

vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  mostrarCarrito();
});

/* CONTACTO */

let enviar = document.getElementById("enviar");

enviar.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "ffedeperezluoni@gmail.com",
            },
          ],
        },
      ],
      from: {
        email: "decodeba2022@gmail.com",
      },
      subject: "Decode",
      content: [
        {
          type: "text/html",
          value: `
          
          <h2>Nombre: ${document.getElementById("nombre").value} ${
            document.getElementById("apellido").value
          }</h2> \n
          <h2>De: ${document.getElementById("email").value}</h2> \n
          <h2>Telefono: ${document.getElementById("telefono").value}</h2> \n
          <h2>Mensaje: ${
            document.getElementById("mensaje-usuario").value
          }</h2> \n
   
          `,
        },
      ],
    }),
  })
    .then(() => console.log("Mensaje enviado con exito"))
    .catch((e) => console.error(e));
  Swal.fire("Mensaje enviado", "Pronto nos pondremos en contacto!", "success");
});
