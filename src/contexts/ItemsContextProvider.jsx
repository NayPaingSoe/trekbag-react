import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemContextProvider({children}) {

    const localItems = JSON.parse(localStorage.getItem("items"));
    const [items, setItems] = useState(localItems || initialItems);
  
    useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items));
    }, [items]);
  
    const handleAddItem = (itemText) => {
      let newItem = {
        id: new Date().getTime(),
        name: itemText,
        packed: false,
      };
      setItems((prev) => [...prev, newItem]);
    };
  
    const markAllAsComplete = () => {
      const tempItems = items.map((item) => ({ ...item, packed: true }));
      setItems(tempItems);
    };
  
    const markAllAsInComplete = () => {
      const tempItems = items.map((item) => ({ ...item, packed: false }));
      setItems(tempItems);
    };
  
    const handleRemoveAllItems = () => {
      setItems([]);
    };
  
    const resetToInitial = () => {
      setItems(initialItems);
    };
  
    const handleDeleteItem = (id) => {
      const tempItems = items.filter((item) => item.id != id);
      setItems(tempItems);
    };
  
    const handleToggleItem = (id) => {
      const tempItems = items.map((item) => {
        if (item.id == id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      setItems(tempItems);
    };

  return (
    <ItemsContext.Provider value={{
      items,
      handleAddItem,
      handleDeleteItem,
      handleToggleItem,
      handleRemoveAllItems,
      resetToInitial,
      markAllAsComplete,
      markAllAsInComplete
    }}>
      {children}
    </ItemsContext.Provider>
  )
}
