import Select from "react-select";
import EmptyView from "./EmptyView";
import {  useMemo, useState } from "react";
import { useItemStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    value: "default",
    label: "Sort by default",
  },
  {
    value: "packed",
    label: "Sort by packed",
  },
  {
    value: "unpacked",
    label: "Sort by unpacked",
  },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");

  const items = useItemStore(state=>state.items);
  const deleteItem = useItemStore(state=>state.deleteItem);
  const toggleItem = useItemStore(state=>state.toggleItem);

  const filteredItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy == "packed") {
          return b.packed - a.packed;
        } else if (sortBy == "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {filteredItems.length == 0 && <EmptyView />}
      {filteredItems.length > 0 && (
        <section className="sortig">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}
      {filteredItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={deleteItem}
          handleToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({
  item: { id, name, packed },
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <li className="item">
      <label>
        <input
          checked={packed}
          type="checkbox"
          onChange={() => handleToggleItem(id)}
        />
        {name}
      </label>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}
