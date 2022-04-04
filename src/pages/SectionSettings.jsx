import classes from "./SectionSettings.module.css";
import Card from "../components/ui/Card";
import ItemsTable from "../components/layout/ItemsTable";
import { useMenu } from "../hooks/useMenu";

function SectionSettings() {
  const { menuTree, menuIsFetching } = useMenu();

  return (
    <>
      <h1>MENU PIATTI</h1>
      {menuIsFetching && <span>Loading sections...</span>}
      {!menuTree && <span>No sections, sorry!</span>}
      {menuTree && (
        <Card>
          <ItemsTable items={menuTree.map(section => section)} />
        </Card>
      )}
    </>
  );
}

export default SectionSettings;
