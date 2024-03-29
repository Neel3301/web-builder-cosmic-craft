import { create } from "zustand";

interface Model_Store {
  studioToolBoxIsOpen: boolean;
  studioToolBoxOnOpen: () => void;
  studioToolBoxOnClose: () => void;

  studioImageToolBoxIsOpen: boolean;
  studioImageToolBoxOnOpen: () => void;
  studioImageToolBoxOnClose: () => void;

  studioBtnToolBoxIsOpen: boolean;
  studioBtnToolBoxOnOpen: () => void;
  studioBtnToolBoxOnClose: () => void;

  studioPageSliderIsOpen: boolean;
  studioPageSliderOnOpen: () => void;
  studioPageSliderOnClose: () => void;

  isNavbarVisible: boolean;
  setIsNavbarVisible: () => void;

  whichMockup: string;
  setMockup: (mockup: string) => void;
}
const use_Model_Store = create<Model_Store>((set) => ({
  // Text Toolbox
  studioToolBoxIsOpen: false,
  studioToolBoxOnOpen: () =>
    set((state) => ({
      studioToolBoxIsOpen: true,
      studioImageToolBoxIsOpen: false,
      studioPageSliderIsOpen: false,
      studioBtnToolBoxIsOpen: false,
    })),
  studioToolBoxOnClose: () => set((state) => ({ studioToolBoxIsOpen: false })),

  // Image Toolbox
  studioImageToolBoxIsOpen: false,
  studioImageToolBoxOnOpen: () =>
    set((state) => ({
      studioImageToolBoxIsOpen: true,
      studioToolBoxIsOpen: false,
      studioPageSliderIsOpen: false,
      studioBtnToolBoxIsOpen: false,
    })),
  studioImageToolBoxOnClose: () =>
    set((state) => ({ studioImageToolBoxIsOpen: false })),

  // Btn Toolbox
  studioBtnToolBoxIsOpen: false,
  studioBtnToolBoxOnOpen: () =>
    set((state) => ({
      studioBtnToolBoxIsOpen: true,
      studioToolBoxIsOpen: false,
      studioPageSliderIsOpen: false,
      studioImageToolBoxIsOpen: false,
    })),
  studioBtnToolBoxOnClose: () =>
    set((state) => ({ studioBtnToolBoxIsOpen: false })),

  // page Slidebar
  studioPageSliderIsOpen: false,
  studioPageSliderOnOpen: () =>
    set((state) => ({
      studioPageSliderIsOpen: !state.studioPageSliderIsOpen,
      studioImageToolBoxIsOpen: false,
      studioToolBoxIsOpen: false,
    })),
  studioPageSliderOnClose: () =>
    set((state) => ({ studioPageSliderIsOpen: false })),

  // Navbar
  isNavbarVisible: true,
  setIsNavbarVisible: () =>
    set((state) => ({ isNavbarVisible: !state.isNavbarVisible })),

  // Mockup
  whichMockup: "desktop",
  setMockup: (mockup: string) => {
    if (mockup === "desktop") {
      set((state) => ({ whichMockup: "desktop" }));
    } else {
      set((state) => ({ whichMockup: "mobile" }));
    }
  },
}));

export default use_Model_Store;
