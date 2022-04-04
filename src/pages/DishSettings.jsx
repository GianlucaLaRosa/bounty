import classes from "./DishSettings.module.css";
import Card from "../components/ui/Card";
import ItemsTable from "../components/layout/ItemsTable";
import { useMenu } from "../hooks/useMenu";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function DishSettings() {
  const { menuTree, menuIsFetching } = useMenu();
  return (
    <>
      <h1>MENU PIATTI</h1>
      <Link to="/settings/addItem">
        <Button cta> Aggiungi piatto</Button>
      </Link>
      {menuIsFetching && <span>Loading dishes...</span>}
      {!menuTree && <span>No dishes, sorry!</span>}
      {menuTree && (
        <Card>
          <ItemsTable items={menuTree.map(section => section.items).flat()} />
        </Card>
      )}
    </>
  );
}

export default DishSettings;
