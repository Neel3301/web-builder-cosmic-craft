import { create } from "zustand";

interface Component {
  id: string;
  color: string;
  elements?: {
    id: string;
    color: string;
  }[];
}

interface Component_Store {
  Components: Component[];
  addComponents: (property: Component) => void;

  setBgColor: (id: string, color: string) => void;
  setElementColor: (id: string, eid: string, color: string) => void;

  selectedId: string | null;
  setSelectedId: (id: string | null) => void;

  selectedElementId: string | null;
  setSelectedElementId: (id: string | null) => void;
}

export const use_Component_Store = create<Component_Store>((set) => ({
  Components: [],
  addComponents: (property) => {
    set((state) => ({
      Components: [...state.Components, property],
    }));
  },
  setBgColor: (id, color) => {
    set((state) => ({
      Components: state.Components.map((component) =>
        component.id === id ? { ...component, color } : component,
      ),
    }));
  },
  setElementColor: (id, eid, color) => {
    set((state) => ({
      Components: state.Components.map((component) => {
        if (component.id === id && component.elements) {
          const updatedElements = component.elements.map((element) =>
            element.id === eid ? { ...element, color } : element,
          );
          return { ...component, elements: updatedElements };
        }
        return component;
      }),
    }));
  },

  selectedId: null,
  setSelectedId: (id) => {
    set({ selectedId: id });
  },

  selectedElementId: null,
  setSelectedElementId: (id) => {
    set({ selectedId: id });
  },
}));
