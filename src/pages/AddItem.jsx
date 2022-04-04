import classes from "./AddItem.module.css";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Select from "../components/ui/Select";
import { useMenu } from "../hooks/useMenu";
import InputCard from "../components/ui/InputCard";
import Button from "../components/ui/Button";

function AddItem() {
  const { menuTree } = useMenu();

  return (
    <>
      <h1>Aggiungi piatto</h1>
      <Card>
        <form>
          <Input type="text" label="Nome" id="name" />
          <TextArea label="Descrizione" id="description" />
          <div className={classes.section}>
            <Select label="Sezione" items={menuTree} />
            <Button cta>
              <p>+</p>
            </Button>
          </div>
          <InputCard label="Allergeni">
            <Input
              type="checkbox"
              label="Glutine"
              id="gluten"
              value="gluten"
              hor
            />
            <Input
              type="checkbox"
              label="Crostacei"
              id="crustaceans"
              value="crustaceans"
              hor
            />
            <Input type="checkbox" label="Uova" id="eggs" value="eggs" hor />
            <Input type="checkbox" label="Pesce" id="fish" value="fish" hor />
            <Input
              type="checkbox"
              label="Arachidi"
              id="peanuts"
              value="peanuts"
              hor
            />
            <Input type="checkbox" label="Soia" id="soya" value="soya" hor />
            <Input
              type="checkbox"
              label="Soia"
              id="lactose"
              value="lactose"
              hor
            />
            <Input
              type="checkbox"
              label="Frutta guscio"
              id="nuts"
              value="nuts"
              hor
            />
            <Input
              type="checkbox"
              label="Sedano"
              id="celery"
              value="celery"
              hor
            />
            <Input
              type="checkbox"
              label="Senape"
              id="mustard"
              value="mustard"
              hor
            />
            <Input
              type="checkbox"
              label="Sesamo"
              id="sesame"
              value="sesame"
              hor
            />
            <Input
              type="checkbox"
              label="Diossido zolfo"
              id="sulphur"
              value="sulphur"
              hor
            />
            <Input
              type="checkbox"
              label="Lupino"
              id="lupin"
              value="lupin"
              hor
            />
            <Input
              type="checkbox"
              label="Molluschi"
              id="molluscs"
              value="molluscs"
              hor
            />
          </InputCard>
          <InputCard label="Badge">
            <Input type="checkbox" label="Piccante" id="hot" value="hot" hor />
            <Input
              type="checkbox"
              label="Vegetariano"
              id="vegetarian"
              value="vegetarian"
              hor
            />
            <Input
              type="checkbox"
              label="Vegano"
              id="vegan"
              value="vegan"
              hor
            />
            <Input type="checkbox" label="Novità" id="new" value="new" hor />
          </InputCard>
          <Input type="number" label="Prezzo" id="price" />
          <Input type="checkbox" label="Attivo" id="isActive" hor />
          <div className={classes.action}>
            <Button type="reset">Annulla</Button>
            <Button cta>Aggiungi</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default AddItem;
