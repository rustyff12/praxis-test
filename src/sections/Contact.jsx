import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

import { contactContent } from "@/data/contact";
import "./styles/contact.css";

function Contact() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const content = contactContent[language];

  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Universit%C3%A4tsstra%C3%9Fe+16%2C+91054+Erlangen";

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">{content.title}</h2>

        <div className="contact__content">
          <div className="contact__details">
            <h3>{content.practiceName}</h3>
            <p className="contact__practice-type">{content.practiceType}</p>

            <div className="contact__detail">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="contact__icon"
                aria-hidden="true"
              />

              <div>
                <h4>{content.addressLabel}</h4>
                {content.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="contact__detail">
              <FontAwesomeIcon
                icon={faPhone}
                className="contact__icon"
                aria-hidden="true"
              />

              <div>
                <h4>{content.phoneLabel}</h4>
                <a href="tel:+491784911920">0178 / 4911920</a>
              </div>
            </div>
          </div>
          <div className="contact__directions">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              className="contact__directions-icon"
              aria-hidden="true"
            />

            <p>{content.directionsNote}</p>

            <a
              className="contact__maps-link"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.directions}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
