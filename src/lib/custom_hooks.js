import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export const useItemContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("Context is not defined!");
  }
  return context;
};
