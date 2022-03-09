import classes from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <FaFacebookSquare />
        <FaTripadvisor />
        <FaInstagramSquare />
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
