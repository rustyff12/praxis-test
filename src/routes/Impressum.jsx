import { useLocation } from "react-router";

import { impressumContent } from "@/data/impressum";
import "@/routes/styles/impressum.css";

function Impressum() {
  const location = useLocation();
  const language = location.pathname.startsWith("/en") ? "en" : "de";
  const text = impressumContent[language];

  return (
    <section className="impressum">
      <div className="impressum__container">
        <h1 className="impressum__title">{text.title}</h1>

        <section className="impressum__section">
          <h2>{text.providerHeading}</h2>
          <p>{text.provider}</p>
          <p>{text.practice}</p>
          {text.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>

        <section className="impressum__section">
          <h2>{text.contactHeading}</h2>
          <p>
            <strong>{text.phoneLabel}:</strong>{" "}
            <a href="tel:+491784911920">{text.phone}</a>
          </p>
          <p>
            <strong>{text.emailLabel}:</strong> <span>{text.email}</span>
          </p>
        </section>

        <section className="impressum__section">
          <h2>{text.professionalHeading}</h2>
          <p>{text.profession}</p>
          <p>{text.country}</p>
          <p>{text.regulations}</p>
          <p>
            {text.regulationName}:{" "}
            <a
              href={text.regulationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.regulationLinkText}
            </a>
          </p>
          <p>{text.additionalRegulations}</p>
        </section>

        <section className="impressum__section">
          <h2>{text.authorityHeading}</h2>
          <p>{text.authority}</p>
        </section>

        <section className="impressum__section">
          <h2>{text.vatHeading}</h2>
          <p>{text.vat}</p>
        </section>

        <section className="impressum__section">
          <h2>{text.registerHeading}</h2>
          <p>{text.register}</p>
        </section>
      </div>
    </section>
  );
}

export default Impressum;
