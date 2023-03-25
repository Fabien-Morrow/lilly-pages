"use client";

import Link from "next/link";
import { BurgerIcon } from "./BurgerIcon";
import PopupMenu from "./PopupMenu";
import { useRef, useState } from "react";

export default function Menu() {
  const burgerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <nav className="ml-auto flex items-center justify-center gap-7 font-poppins lg:text-sm xl:text-base">
      <PopupMenu isOpen={isOpen} toggle={toggle} burgerRef={burgerRef} />
      <div className="hidden lg:block">
        <Link href="/">Accueil</Link>
      </div>
      <div className="hidden lg:block">
        <Link href="/#presentation">Qui suis-je</Link>
      </div>
      <div className="hidden lg:block">
        <Link href="/massages">Les massages</Link>
      </div>
      <div className="hidden lg:block">
        <Link href="/tarifs">Tarifs</Link>
      </div>
      <div className="hidden lg:block">
        <Link href="/ateliers">Les ateliers</Link>
      </div>
      <BurgerIcon ref={burgerRef} isOpen={isOpen} toggle={toggle} />
    </nav>
  );
}
