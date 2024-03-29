import { create } from "zustand";

interface Btn_Component {
  id: string;
  content: string;
  fontStyle?: string;
  fontSize?: number;
  textColor?: string;
  textAlignment?: string;
  textUnderline?: boolean;
  textItalic?: boolean;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  paddingX?: Number;
  paddingY?: Number;
  bgColor?: string;
  border?: Number;
  borderColor?: string;
  borderRadius?: Number;
}

interface Btn_Store {
  BtnComponents: Btn_Component[];
  addBtnComponent: (property: Btn_Component) => void;

  setId: (id: string) => void;
  setContent: (id: string, content: string) => void;
  setPaddingX: (id: string, paddingX: Number) => void;
  setPaddingY: (id: string, paddingY: Number) => void;
  setBgColor: (id: string, bgColor: string) => void;
  setFontStyle: (id: string, fontStyle: string) => void;
  setFontSize: (id: string, fontSize: number) => void;
  setTextColor: (id: string, textColor: string) => void;
  setTextAlignment: (id: string, textAlignment: string) => void;
  setTextUnderline: (id: string, textUnderline: boolean) => void;
  setTextItalic: (id: string, textItalic: boolean) => void;
  setFontWeight: (id: string, fontWeight: number) => void;
  setLineHeight: (id: string, lineHeight: number) => void;
  setLetterSpacing: (id: string, letterSpacing: number) => void;
  setBorder: (id: string, border: number) => void;
  setBorderColor: (id: string, borderColor: string) => void;
  setBorderRadius: (id: string, borderRadius: number) => void;

  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export const use_Btn_Store = create<Btn_Store>((set) => ({
  BtnComponents: [],
  addBtnComponent: (property) => {
    set((state) => ({
      BtnComponents: [...state.BtnComponents, property],
    }));
  },

  setId: (id) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, id } : component,
      ),
    }));
  },

  setContent: (id, content) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, content } : component,
      ),
    }));
  },

  setPaddingX: (id, paddingX) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, paddingX } : component,
      ),
    }));
  },

  setPaddingY: (id, paddingY) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, paddingY } : component,
      ),
    }));
  },

  setBgColor: (id, bgColor) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, bgColor } : component,
      ),
    }));
  },

  setFontSize: (id, fontSize) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, fontSize } : component,
      ),
    }));
  },
  setTextAlignment: (id, textAlignment) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, textAlignment } : component,
      ),
    }));
  },
  setTextUnderline: (id, textUnderline) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, textUnderline } : component,
      ),
    }));
  },
  setTextItalic: (id, textItalic) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, textItalic } : component,
      ),
    }));
  },
  setFontWeight: (id, fontWeight) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, fontWeight } : component,
      ),
    }));
  },
  setLineHeight: (id, lineHeight) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, lineHeight } : component,
      ),
    }));
  },
  setLetterSpacing: (id, letterSpacing) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, letterSpacing } : component,
      ),
    }));
  },

  setTextColor: (id, textColor) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, textColor } : component,
      ),
    }));
  },

  setFontStyle: (id, fontStyle) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, fontStyle } : component,
      ),
    }));
  },
  setBorder: (id, border) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, border } : component,
      ),
    }));
  },

  setBorderColor: (id, borderColor) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, borderColor } : component,
      ),
    }));
  },
  setBorderRadius: (id, borderRadius) => {
    set((state) => ({
      BtnComponents: state.BtnComponents.map((component) =>
        component.id === id ? { ...component, borderRadius } : component,
      ),
    }));
  },

  selectedId: null,
  setSelectedId: (id) => {
    set({ selectedId: id });
  },
}));
