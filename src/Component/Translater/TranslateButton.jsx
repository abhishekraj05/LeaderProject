import React, { useEffect, useState } from "react";

const TranslateButton = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Hide popup and banner
  useEffect(() => {
    const removeGooglePopup = () => {
      const popup = document.getElementById("goog-gt-tt");
      if (popup) popup.style.display = "none";

      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) banner.style.display = "none";

      document.body.style.top = "0px";
    };

    const interval = setInterval(removeGooglePopup, 1000);
    return () => clearInterval(interval);
  }, []);

  const waitForTranslateElement = () => {
    return new Promise((resolve) => {
      const checkExist = setInterval(() => {
        const combo = document.querySelector(".goog-te-combo");
        if (combo) {
          clearInterval(checkExist);
          resolve(combo);
        }
      }, 100);
    });
  };

  const handleLanguageChange = async (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);

    const combo = await waitForTranslateElement();
    combo.value = selectedLang;
    combo.dispatchEvent(new Event("change"));

    // ✅ Refresh page after short delay to apply translation
    setTimeout(() => {
      window.location.reload();
    }, 1000); // You can increase delay if needed
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <select
        value={language}
        onChange={handleLanguageChange}
        style={selectStyle}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </>
  );
};

const selectStyle = {
  position: "fixed",
  top: "40rem",
  right: "20px",
  padding: "8px 12px",
  borderRadius: "6px",
  fontSize: "14px",
  cursor: "pointer",
  zIndex: 9999,
  backgroundColor: "green",  
  color: "white",             
  border: "none"            
};


export default TranslateButton;
