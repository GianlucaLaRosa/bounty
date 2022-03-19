import classes from "./Help.module.css";
import Card from "../components/ui/Card";

function Help() {
  return (
    <>
      <h1>HELP</h1>
      <Card>
        <p className={classes.table}>
          Scheda aggiunta per fare numero, probabilmente ospiterà una mini
          guida.
        </p>
      </Card>
    </>
  );
}

export default Help;
