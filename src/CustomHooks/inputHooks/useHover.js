import { useEffect, useState } from "react";

// При помощи useRef передаем ссылку на элемент в этот хук, затем отслеживаем наведение мышью на элемент
const useHover = (ref) => {
  const [isHovering, setIsHovering] = useState(false);
  const on = () => setIsHovering(true);
  const off = () => setIsHovering(false);
  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    node.addEventListener("mouseenter", on);
    node.addEventListener("mousemove", on);
    node.addEventListener("mouseleave", off);
    return () => {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };
  }, []);
  return isHovering;
};

export default useHover;
