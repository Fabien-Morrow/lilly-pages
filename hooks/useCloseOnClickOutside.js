import { useEffect } from "react";

export default function useCloseOnClickOutside(
  menuRef,
  burgerRef,
  isOpen,
  toggle
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        toggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, isOpen]);
}
