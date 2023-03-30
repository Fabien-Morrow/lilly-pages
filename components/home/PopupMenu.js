import Link from "next/link";
import { useRef } from "react";
import useCloseOnClickOutside from "../../hooks/useCloseOnClickOutside";
import Reserver from "../Reserver";

export default function PopupMenu({ isOpen, toggle, burgerRef }) {
  const menuRef = useRef(null);
  useCloseOnClickOutside(menuRef, burgerRef, isOpen, toggle);
  // isOpen = true means that mobile menu is open
  return (
    // translate-y-5 because I can't set the transform-box properly :/
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box
    // <div
    //   ref={menuRef}
    //   className={
    //     "[transform-box: border-box] absolute left-0 right-0 z-10 mx-auto mt-5 flex w-48 flex-col items-center justify-center gap-4 rounded-2xl border bg-custom-blue p-4 text-xl font-bold text-white transition-all duration-300 " +
    //     (isOpen ? "translate-y-10" : "-translate-y-full")
    //   }
    // >
    <div
      ref={menuRef}
      className={
        "absolute inset-x-1/2 z-10 mx-auto flex min-w-max -translate-x-1/2 flex-col items-center justify-center gap-4 border border-custom-blue bg-white p-4 text-xl transition-all duration-300 " +
        (isOpen ? "translate-y-40" : "-translate-y-full")
      }
    >
      <div>
        <Link href="/">Accueil</Link>
      </div>
      <div>
        <Link href="/#presentation" onClick={() => toggle()}>
          Qui suis-je
        </Link>
      </div>
      <div>
        <Link href="/massages" onClick={() => toggle()}>
          Les massages
        </Link>
      </div>
      <div>
        <Link href="/ateliers" onClick={() => toggle()}>
          Les ateliers
        </Link>
      </div>
      <div>
        <Link href="/tarifs" onClick={() => toggle()}>
          Tarifs
        </Link>
      </div>
      <Reserver />
    </div>
  );
}
