import classes from "./Adv.module.css";

function Adv(props) {
  return (
    <section className={classes.container}>
      <img
        src="https://picsum.photos/300/200"
        alt="Interni del pub"
        className={props.odd ? classes.imgOdd : classes.img}
      />
      <div className={classes.text}>
        <h3 className={classes.title}>Titolo</h3>
        <p>Breve presentazione delle offerte del pub.</p>
      </div>
    </section>
  );
}

export default Adv;
