import Image from "next/image";

import Brand from "../components/home/Brand";
import Menu from "../components/home/Menu";
import RendezVous from "../components/RendezVous";

export default function RootLayout({ children }) {
  return (
    <>
      <header className="my-8 mx-5 flex lg:mx-5 xl:mx-20">
        <Brand />
        <Menu />
        <RendezVous />
      </header>
      {children}
      <div className="mt-64 flex justify-between px-20 py-4">
        <div className="flex items-center font-poppins text-lg">Contact</div>
        <Brand />
        <div className="flex gap-5">
          <Image src="/instagram.svg" width={28} height={28} alt="instagram" />
          <Image src="/facebook.svg" width={28} height={28} alt="facebook" />
        </div>
      </div>
    </>
  );
}
