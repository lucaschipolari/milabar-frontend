import ContactForm from "../components/ContactView/ContactForm";
import Map from "../components/ContactView/Map";

import "../styles/contactView.css";

const ContactView = () => {
  return (
    <div className="bg-contact mb-3">
      <div className="container d-flex flex-column align-items-center text-center px-3">
        <h1 className="my-3 contact-title fw-bold">¡Contactate con nosotros!</h1>
        <h5 className="m-0 contact-title fw-normal">
          Por <b>consultas</b> de cualquier tipo o por franquicias llenar este
          formulario
        </h5>
        <div className="justify-content-center w-100">
          <ContactForm />
        </div>
        <h3 className="mb-4 contact-title fw-bold">Nuestras Sucursales</h3>
        <Map />
      </div>
    </div>
  );
};
export default ContactView;
