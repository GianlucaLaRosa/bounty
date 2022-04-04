import classes from "./Select.module.css";

function Select(props) {
  const { label, id, items } = props;
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id}>
        {items.map(el => (
          <option>{el.name}</option>
        ))}
      </select>
    </div>
  );
}
export default Select;
