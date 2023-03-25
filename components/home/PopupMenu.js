import Link from "next/link";
import { useRef } from "react";
import useCloseOnClickOutside from "../../hooks/useCloseOnClickOutside";

export default function PopupMenu({ isOpen, toggle, burgerRef }) {
  const menuRef = useRef(null);
  useCloseOnClickOutside(menuRef, burgerRef, isOpen, toggle);
  // isOpen = true means that mobile menu is open
  return (
    // translate-y-5 because I can't set the transform-box properly :/
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box
    <div
      ref={menuRef}
      className={
        "[transform-box: border-box] font-opensans absolute left-0 right-0 z-10 mx-auto mt-5 flex w-48 flex-col items-center justify-center gap-4 rounded-2xl border bg-custom-blue p-4 text-xl font-bold text-white transition-all duration-300 " +
        (isOpen ? "translate-y-10" : "-translate-y-full")
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
        <Link href="/tarifs" onClick={() => toggle()}>
          Tarifs
        </Link>
      </div>
      <div>
        <Link href="/ateliers" onClick={() => toggle()}>
          Les ateliers
        </Link>
      </div>
      <div>
        <Link href="/ateliers" onClick={() => toggle()}>
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  );
}
