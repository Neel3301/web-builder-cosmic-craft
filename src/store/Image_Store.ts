import { create } from "zustand";

interface Image_Component {
  id: string;
  img: string;
  imgUrl: string;
  displayImg: string;
  height: number;
  width: number;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  object: "fill" | "contain" | "cover" | "none" | "scale-down";
}

interface Image_Store {
  ImageComponents: Image_Component[];
  addImageComponent: (property: Image_Component) => void;

  setId: (id: string) => void;
  setImg: (id: string, img: string) => void;
  setImgUrl: (id: string, imgUrl: string) => void;
  setDisplayImg: (id: string, displayImg: string) => void;
  setHeight: (id: string, height: number) => void;
  setWidth: (id: string, width: number) => void;
  setMaxHeight: (id: string, maxHeight: number) => void;
  setMaxWidth: (id: string, maxWidth: number) => void;
  setMinHeight: (id: string, minHeight: number) => void;
  setMinWidth: (id: string, minWidth: number) => void;
  setObject: (
    id: string,
    object: "fill" | "contain" | "cover" | "none" | "scale-down",
  ) => void;

  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export const use_Image_Store = create<Image_Store>((set) => ({
  ImageComponents: [],

  addImageComponent: (property) => {
    set((state) => ({
      ImageComponents: [...state.ImageComponents, property],
    }));
  },

  setId: (id) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, id } : component,
      ),
    }));
  },
  setImg: (id, img) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, img } : component,
      ),
    }));
  },

  setDisplayImg: (id, displayImg) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, displayImg } : component,
      ),
    }));
  },
  setImgUrl: (id, imgUrl) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, imgUrl } : component,
      ),
    }));
  },
  setHeight: (id, height) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, height } : component,
      ),
    }));
  },
  setWidth: (id, width) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, width } : component,
      ),
    }));
  },
  setMaxHeight: (id, maxHeight) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, maxHeight } : component,
      ),
    }));
  },
  setMaxWidth: (id, maxWidth) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, maxWidth } : component,
      ),
    }));
  },
  setMinHeight: (id, minHeight) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, minHeight } : component,
      ),
    }));
  },
  setMinWidth: (id, minWidth) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, minWidth } : component,
      ),
    }));
  },

  setObject: (id, object) => {
    set((state) => ({
      ImageComponents: state.ImageComponents.map((component) =>
        component.id === id ? { ...component, object } : component,
      ),
    }));
  },

  selectedId: null,
  setSelectedId: (id) => {
    set({ selectedId: id });
  },
}));
