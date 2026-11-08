import { useLocation, Link } from "react-router";
import "@/components/layout/styles/footer.css";

function Footer() {
  const location = useLocation();
  const language = location.pathname.startsWith("/en") ? "en" : "de";

  const content = {
    de: {
      description: "Privatpraxis für Ergotherapie",
      navigation: "Navigation",
      links: [
        { label: "Startseite", href: "home" },
        { label: "Leistungen", href: "services" },
        { label: "Über mich", href: "about" },
        { label: "Kontakt", href: "contact" },
      ],
      contact: "Kontakt",
      legal: "Impressum",
    },
    en: {
      description: "Private Occupational Therapy Practice",
      navigation: "Navigation",
      links: [
        { label: "Home", href: "home" },
        { label: "Services", href: "services" },
        { label: "About", href: "about" },
        { label: "Contact", href: "contact" },
      ],
      contact: "Contact",
      legal: "Legal notice",
    },
  };

  const text = content[language];

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <span className="site-footer__name">Ursprungskraft</span>
          <p>{text.description}</p>
        </div>

        <div className="site-footer__navigation">
          <h3>{text.navigation}</h3>
          <nav aria-label={text.navigation}>
            {text.links.map((link) => (
              <Link key={link.href} to={`/${language}#${link.href}`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__contact">
          <h3>{text.contact}</h3>
          <a href="tel:+491784911920">0178 / 4911920</a>
          <p>Universitätsstraße 16 / 2. OG</p>
          <p>91054 Erlangen</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Ursprungskraft</p>

        <Link to={`/${language}/impressum`}>{text.legal}</Link>
      </div>
    </footer>
  );
}

export default Footer;
