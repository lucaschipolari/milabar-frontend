import emailjs from "emailjs-com";

import Swal from "sweetalert2";

export const sendEmailToClient = (data) => {
  return emailjs
    .send(
      "service_8zberdz",
      "template_a0cdhz8",
      {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        issue: data.issue,
        message: data.message,
        to_email: data.email,
      },
      "oHlowk37N8JMvbYiC"
    )
    .then(
      (response) => {
        Swal.fire("Success", "Correo enviado con exito", "success");
      },
      (error) => {
        Swal.fire("Error", "Fallo al enviar el correo", "error");
      }
    );
};

export const sendEmailToRestaurant = (data) => {
  return emailjs
    .send(
      "service_8zberdz",
      "template_q01xpm8",
      {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        issue: data.issue,
        message: data.message,
        to_email: "lamilabar899@gmail.com",
      },
      "oHlowk37N8JMvbYiC"
    )
    .then(
      (response) => {
        Swal.fire("Success", "Correo enviado con exito", "success");
      },
      (error) => {
        Swal.fire("Error", "Fallo al enviar el correo", "error");
      }
    );
};
