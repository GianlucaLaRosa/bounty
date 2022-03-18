import classes from "./Settings.module.css";
import Card from "../components/ui/Card";
import { FaCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { DUMMY_SECTIONS as Sections, DUMMY_DATA as Data } from "../dummyDatas";

function Settings() {
  return (
    <>
      <h1>SETTINGS</h1>
      <Card>
        <table className={classes.table}>
          <thead>
            <tr className={classes.header}>
              <th>ID</th>
              <th>NOME</th>
              <th>ATTIVO</th>
              <th>PREZZO</th>
            </tr>
          </thead>
          <tbody>
            {Data.map(dish => (
              <tr>
                <td>{dish.id}</td>
                <td>{dish.name}</td>
                <td className={classes.check}>
                  {dish.active ? <FaCheckCircle /> : <FaCircle />}
                </td>
                <td>{dish.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}

export default Settings;
