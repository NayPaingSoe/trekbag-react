import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist((set) => ({
    items: initialItems,
    addItem: (itemText) => {
      let newItem = {
        id: new Date().getTime(),
        name: itemText,
        packed: false,
      };
      set((state) => ({ items: [...state.items, newItem] }));
    },

    markAllAsComplete: () => {
      set((state) => {
        const tempItems = state.items.map((item) => ({
          ...item,
          packed: true,
        }));
        return { items: tempItems };
      });
    },
    markAllAsInComplete: () => {
      set((state) => {
        const tempItems = state.items.map((item) => ({
          ...item,
          packed: false,
        }));
        return { items: tempItems };
      });
    },

    removeAllItems: () => {
      set(() => ({ items: [] }));
    },
    resetToInitial: () => {
      set(() => ({ items: initialItems }));
    },

    deleteItem: (id) => {
      set((state) => {
        const tempItems = state.items.filter((item) => item.id != id);
        return { items: tempItems };
      });
    },
    toggleItem: (id) => {
      set((state) => {
        const tempItems = state.items.map((item) => {
          if (item.id == id) {
            return { ...item, packed: !item.packed };
          }
          return item;
        });
        return { items: tempItems };
      });
    },

    //
    //
  }),{
    name:"items"
  })
);
