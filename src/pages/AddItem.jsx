import classes from "./AddItem.module.css";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Select from "../components/ui/Select";
import { useMenu } from "../hooks/useMenu";

function AddItem() {
  const { menuTree, menuIsFetching } = useMenu();

  return (
    <>
      <h1>Aggiungi piatto</h1>
      <Input type="text" label="Nome" id="name" />
      <TextArea label="Descrizione" id="description" />
      <Select label="Sezione" items={menuTree} />
    </>
  );
}

export default AddItem;
