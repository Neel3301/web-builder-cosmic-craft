import { use_Component_Store } from "@/store/Component_Store";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Interface
interface Handle_Bg_Color_Props {
  id: string;
}

// Component
const Component_Bg_Color = ({ id }: Handle_Bg_Color_Props) => {
  let env = "development";

  // Component Store
  const [Components, setBgColor, setSelectedId] = use_Component_Store((s) => [
    s.Components,
    s.setBgColor,
    s.setSelectedId,
  ]);

  // Finding Component
  const component = Components.find((myComponent) => myComponent.id === id);

  // Handle Color Change
  const handleColorChange = (e: any) => {
    setBgColor(`${id}`, e.target.value);
  };

  // Handle Click
  const handleClick = () => {
    setSelectedId(`${id}`);
    console.log(Components);
  };

  // Setting Environment
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // Handling Loading
  const [isLoading, setIsLoading] = useState(false);

  // fetching website data
  const [websiteData, setWebsiteData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/web/fetch_web", {
          website_id: path.split("/")[2],
        });
        setWebsiteData(res.data.websiteData?.component || []);
      } catch (error) {
        console.error("Error fetching website data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [path]);

  useEffect(() => {
    if (!isLoading) {
      // Finding Right Website Data
      const Style = websiteData?.find(
        (ElementId: { id: string }) => ElementId.id === id,
      );

      if (Style) {
        setBgColor(id, Style.color);
      }
    }
  }, [isLoading, websiteData, id, setBgColor]);

  // Return
  if (env === "production") {
    return null;
  }

  // Return
  return (
    <input
      type="color"
      value={component?.color}
      onChange={handleColorChange}
      className={`absolute z-50 h-[32px] w-[42px] cursor-pointer border-none bg-transparent outline-none`}
      onClick={handleClick}
      style={{ right: `12px`, top: `12px` }}
    />
  );
};

export default Component_Bg_Color;
