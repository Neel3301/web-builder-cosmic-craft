import { use_Component_Store } from "@/store/Component_Store";
import { useState } from "react";

interface Add_Component_Props {
  id: string;
  bgColor: string;
}

const Add_Component = ({ id, bgColor }: Add_Component_Props) => {
  const [addComponents, Components] = use_Component_Store((s) => [
    s.addComponents,
    s.Components,
  ]);

  const existingComponent = Components.find(
    (myComponent) => myComponent.id === id,
  );

  const [initialized, setInitialized] = useState(false);
  if (!existingComponent) {
    if (!initialized) {
      addComponents({
        id: id,
        color: bgColor,
      });
      setInitialized(true);
    }
  }

  return null;
};

export default Add_Component;
