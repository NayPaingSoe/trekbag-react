import Button from "./Button";
import { useItemStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemStore(state=>state.markAllAsComplete);
  const markAllAsInComplete = useItemStore(state=> state.markAllAsInComplete);
  const resetToInitial = useItemStore(state=> state.resetToInitial);
  const removeAllItems = useItemStore(state=> state.removeAllItems);

  return (
    <section className="button-group">
        <Button  buttonType="secondary" onClick={markAllAsComplete}  >Mark All As Complete</Button>
        <Button  buttonType="secondary" onClick={markAllAsInComplete}  >Mark All as Incomplete</Button>
        <Button buttonType="secondary" onClick={resetToInitial} >Reset to Initial</Button>
        <Button buttonType="secondary" onClick={removeAllItems}  >Remove all Items</Button>
    </section>
  );
}
