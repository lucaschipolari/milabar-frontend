import ContactForm from "../components/ContactView/ContactForm";
import Map from "../components/ContactView/Map";

import Logo from "../components/ui/Logo/Logo";

import "../styles/contactView.css"

const ContactView = () => {
  return (
    <div className="bg-contact">
      <div className="container d-flex flex-column align-items-center text-center px-3">
        <Logo />
        <div className="justify-content-center w-100">
          <ContactForm />
        </div>
        <Map />
      </div>
    </div>
  );
};
export default ContactView;
