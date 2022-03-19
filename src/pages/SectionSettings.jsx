import classes from "./SectionSettings.module.css";
import Card from "../components/ui/Card";
function SectionSettings() {
  return (
    <>
      <h1>IMPOSTAZIONI SEZIONI</h1>
      <Card>
        <div className={classes.card}>
          <h2>Salse</h2>

          <form>
            <div>
              <label>Attivo</label>
              <input type="checkbox"></input>
            </div>
            <div>
              <label>Ordine</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </form>
        </div>
      </Card>
      <Card>
        <div className={classes.card}>
          <h2>Sfizi</h2>

          <form>
            <div>
              <label>Attivo</label>
              <input type="checkbox" checked></input>
            </div>
            <div>
              <label>Ordine</label>
              <select>
                <option>1</option>
                <option selected>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </form>
        </div>
      </Card>
      <Card>
        <div className={classes.card}>
          <h2>Hamburger</h2>

          <form>
            <div>
              <label>Attivo</label>
              <input type="checkbox" checked></input>
            </div>
            <div>
              <label>Ordine</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option selected>3</option>
                <option>4</option>
              </select>
            </div>
          </form>
        </div>
      </Card>
      <Card>
        <div className={classes.card}>
          <h2>Gourmet</h2>

          <form>
            <div>
              <label>Attivo</label>
              <input type="checkbox" checked></input>
            </div>
            <div>
              <label>Ordine</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option selected>4</option>
              </select>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
}

export default SectionSettings;
