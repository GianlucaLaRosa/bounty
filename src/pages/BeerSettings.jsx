import classes from "./BeerSettings.module.css";
import Card from "../components/ui/Card";

function BeerSettings() {
  return (
    <>
      <h1>MENU BIRRE</h1>
      <Card>
        <p className={classes.table}>
          Identico al menu del cibo, però cliccando sulla singola voce, si va
          nelle impostazioni della singola birra, che mi son reso conto avrà
          dati diversi dai piatti.
        </p>
      </Card>
    </>
  );
}

export default BeerSettings;
