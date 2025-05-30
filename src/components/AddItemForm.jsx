import React, { useRef } from "react";
import Button from "./Button";
import { useState } from "react";
import { useItemStore } from "../stores/itemsStore";

export default function AddItemForm() {
  const inputRef = useRef();
  const [itemText, setItemText] = useState("");
  const addItem = useItemStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText) {
      inputRef.current.focus();
      return;
    }

    addItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        value={itemText}
        type="text"
        onChange={(e) => setItemText(e.target.value)}
      />
      <Button>Add Item to lists</Button>
    </form>
  );
}
