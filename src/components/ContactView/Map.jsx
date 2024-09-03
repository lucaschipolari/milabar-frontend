import "../ContactView/map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Map = () => {
  return (
    <div className="mb-5">
      <nav>
        <div className="nav nav-tabs nav-container" id="nav-tab" role="tablist">
          <button
            className="nav-link active button-nav"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            San Miguel de Tucumán
          </button>
          <button
            className="nav-link button-nav"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Yerba Buena
          </button>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          <div className="map-container text-center">
            <div className="row">
              <div className="contact-info col-md-6 mt-3">
                <h3>Sucursal San Miguel de Tucumán</h3>
                <div className="mt-5">
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-danger"
                    />{" "}
                    Dirección: 25 de Mayo 899, San Miguel de Tucumán, Argentina
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="text-primary" />{" "}
                    Teléfono: +54 381 1234567
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-success"
                    />{" "}
                    WhatsApp: +54 9 381 7654321
                  </p>
                  <p className="mb-4">
                    <FontAwesomeIcon icon={faClock} /> Horarios: Martes a
                    Domingo de 20:30 a 01:00
                  </p>
                </div>
              </div>

              <div className="iframe-container col-md-6 mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d222.54137355627384!2d-65.20182443446957!3d-26.818889678195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s25%20de%20Mayo%20899!5e0!3m2!1ses!2sar!4v1723657993046!5m2!1ses!2sar"
                  className="map-iframe"
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <div className="map-container text-center">
            <div className="row">
              <div className="contact-info col-md-6 mt-3">
                <h3>Sucursal Yerba Buena</h3>
                <div className="mt-5">
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-danger"
                    />{" "}
                    Dirección: Av. Aconquija 523, T4107 Yerba Buena, Tucumán
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="text-primary" />{" "}
                    Teléfono: +54 381 1234567
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-success"
                    />{" "}
                    WhatsApp: +54 9 381 7654321
                  </p>
                  <p className="mb-4">
                    <FontAwesomeIcon icon={faClock} /> Horarios: Martes a
                    Domingo de 20:30 a 01:00
                  </p>
                </div>
              </div>

              <div className="iframe-container col-md-6 mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d222.54137355627384!2d-65.20182443446957!3d-26.818889678195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s25%20de%20Mayo%20899!5e0!3m2!1ses!2sar!4v1723657993046!5m2!1ses!2sar"
                  className="map-iframe"
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Map;
