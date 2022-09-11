import { useState } from "react";

export function useNavbarScroll(): boolean {
  const [navScrolledState, setNavScrolledState] = useState(false);
  const navScrolled = () => {
    if (window.scrollY >= 30) {
      setNavScrolledState(true);
    } else {
      setNavScrolledState(false);
    }
  };
  window.addEventListener("scroll", navScrolled);

  return navScrolledState;
}
