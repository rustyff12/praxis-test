import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";
import { servicesContent } from "@/data/services";
import "./styles/services.css";

function Services() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const content = servicesContent[language];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="services" id="services">
      <motion.div
        className="services__container"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="services__title">{content.mainTitle}</h2>

        <div className="services__grid">
          {content.services.map((service) => (
            <article className="service-card" key={service.id}>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;
