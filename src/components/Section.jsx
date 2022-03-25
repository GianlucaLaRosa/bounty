import Card from "./ui/Card";
import classes from "./Section.module.css";

function Section(props) {
  const cssClass =
    props.isOpen === props.id ? classes.activeTitle : classes.title;

  return (
    <Card>
      <h2 onClick={props.onClick.bind(null, props.id)} className={cssClass}>
        {props.title.toUpperCase()}
      </h2>
      {props.isOpen === props.id &&
        props.items.map(el => (
          <div className={classes.content} key={el.id}>
            <h3>{el.name}</h3>
            <p>
              {el.description}
              <span className={classes.allerg}>
                &nbsp; allergeni {el.allergeneIds?.join(",")}
              </span>
            </p>
            <p className={classes.price}>Euro {el.price}</p>
          </div>
        ))}
    </Card>
  );
}

export default Section;
