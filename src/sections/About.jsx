import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";
import { aboutContent } from "@/data/about";
import "./styles/about.css";

function About() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const content = aboutContent[language];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about" id="about">
      <motion.div
        className="about__container"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="about__image-wrapper">
          <img
            className="about__image"
            src="/images/about-placeholder.webp"
            alt={content.imageAlt}
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">{content.title}</h2>
          <h3 className="about__name">{content.name}</h3>

          {content.paragraphs.map((paragraph, index) => (
            <p className="about__paragraph" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
