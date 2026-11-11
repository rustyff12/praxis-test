import { useLocation, Link } from "react-router";
import "@/routes/styles/notFound.css";

function NotFound() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";

  const content = {
    de: {
      code: "404",
      title: "Seite nicht gefunden",
      description:
        "Die Seite, die du suchst, existiert leider nicht oder wurde verschoben.",
      button: "Zur Startseite",
    },
    en: {
      code: "404",
      title: "Page not found",
      description:
        "Unfortunately, the page you're looking for doesn't exist or has been moved.",
      button: "Back to home",
    },
  };

  const text = content[language];

  return (
    <section className="not-found">
      <div className="not-found__container">
        <span className="not-found__code">{text.code}</span>
        <h1 className="not-found__title">{text.title}</h1>
        <p className="not-found__description">{text.description}</p>
        <Link className="not-found__button" to={`/${language}`}>
          {text.button}
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
