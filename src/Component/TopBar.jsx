import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext.jsx";
import "./TopBar.css";

export default function TopBar() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="top-bar">
      <div className="left">
        <button onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>
          <img src="https://flagcdn.com/24x18/gb.png" alt="EN" /> English
        </button>
        <button onClick={() => setLanguage("hi")} className={language === "hi" ? "active" : ""}>
          <img src="https://flagcdn.com/24x18/in.png" alt="HI" /> हिंदी
        </button>
      </div>

      <div className="right">
        <span>📍Mohaddinagar |</span>
        <span> 📞 +91-94160 13687 |</span>
        <span> ✉️ info@mohanlalbadoli.com</span>
      </div>
    </div>
  );
}
