import { forwardRef } from "react";

const BurgerIcon = forwardRef((props, ref) => {
  return (
    <button ref={ref} className="lg:hidden" onClick={() => props.toggle()}>
      <div
        className={
          "my-[5px] h-[1px] w-[19px] origin-top-left bg-custom-blue transition-all duration-300 " +
          (props.isOpen && "rotate-45 scale-90")
        }
      ></div>
      <div
        className={
          "my-[5px] h-[1px] w-[19px] bg-custom-blue transition-all duration-300 " +
          (props.isOpen ? "opacity-0" : "opacity-100")
        }
      ></div>
      <div
        className={
          "my-[5px] h-[1px] w-[19px] origin-top-left bg-custom-blue transition-all duration-300 " +
          (props.isOpen && "-rotate-45 scale-90")
        }
      ></div>
    </button>
  );
});

BurgerIcon.displayName = "BurgerIcon";

export { BurgerIcon };
