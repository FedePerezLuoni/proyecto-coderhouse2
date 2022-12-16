/* CARRITO DE COMPRA */

const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
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
