import classes from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <IconContext.Provider value={{ className: classes.icon }}>
          <a href="https://www.facebook.it/">
            <FaFacebookSquare />
          </a>
          <a href="https://www.tripadvisor.it/">
            <FaTripadvisor />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </IconContext.Provider>
      </div>
      <div>
        <p>
          <FaCopyright /> Bounty Pub | Tutti i diritti sono riservati
        </p>
      </div>
    </footer>
  );
}

export default Footer;
