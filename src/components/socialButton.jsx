import React from "react";
import "./css/socialButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function SocialButton() {
  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <section>
      <div id="icons">
        <button onClick={() => redirectToLink("https://www.facebook.com")}>
          <FontAwesomeIcon
            icon={faFacebookF}
            style={{ color: "#3b5998", fontSize: "40px" }} // Ajusta el tamaño del icono
          />
        </button>

        <button onClick={() => redirectToLink("https://www.github.com")}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#333333", fontSize: "40px" }} // Ajusta el tamaño del icono
          />
        </button>

        <button onClick={() => redirectToLink("https://www.linkedin.com")}>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{ color: "#0082ca", fontSize: "40px" }} // Ajusta el tamaño del icono
          />
        </button>
      </div>
    </section>
  );
}

export default SocialButton;
