import classes from "./ItemsTable.module.css";
import { FaCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function ItemsTable(props) {
  return (
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
        {props.items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td className={classes.check}>
              {item.isActive ? <FaCheckCircle /> : <FaCircle />}
            </td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemsTable;
