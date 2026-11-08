import { useEffect } from "react";
import { useLocation } from "react-router";

function LanguageAttribute() {
  const location = useLocation();

  useEffect(() => {
    const language = location.pathname.startsWith("/en") ? "en" : "de";

    document.documentElement.lang = language;
  }, [location.pathname]);

  return null;
}

export default LanguageAttribute;
