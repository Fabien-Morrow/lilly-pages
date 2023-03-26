import Image from "next/image";
import californien from "@/public/massages/californien.png";
import californienHover from "@/public/massages/californien-hover.png";
import chineitsang from "@/public/massages/chineitsang.png";
import chineitsangHover from "@/public/massages/chineitsang-hover.png";
import kobido from "@/public/massages/kobido.png";
import kobidoHover from "@/public/massages/kobido-hover.png";
import prenatal from "@/public/massages/prenatal.png";
import prenatalHover from "@/public/massages/prenatal-hover.png";
import shiatsu from "@/public/massages/shiatsu.png";
import shiatsuHover from "@/public/massages/shiatsu-hover.png";

export default function TeasingMassages() {
  return (
    <div>
      <div className="color-custom-blue mt-48 text-center text-2xl font-bold">
        Les Massages
      </div>

      <div className="mt-16 grid grid-cols-2 gap-5">
        <div className="group relative col-span-2 mx-0 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg">
          <Image
            className="min-w-full"
            src={kobido}
            width={1075}
            height={480}
            alt="kobido"
          />
          <Image
            className="absolute hidden min-w-full group-hover:inline"
            src={kobidoHover}
            width={1075}
            height={480}
            alt="kobido-hover"
          />
        </div>
        <TeaseAMassage
          massage={californien}
          hover={californienHover}
          name="Californien"
        />
        <TeaseAMassage
          massage={prenatal}
          hover={prenatalHover}
          name="Prénatal"
        />
        <TeaseAMassage
          massage={chineitsang}
          hover={chineitsangHover}
          name="Chi Nei Tsang"
        />
        <TeaseAMassage massage={shiatsu} hover={shiatsuHover} name="Shiatsu" />
      </div>
      <div className="flex justify-center">
        <button className="mt-14 rounded-md  border-custom-blue bg-[#111A40] px-6 py-3 tracking-wider text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#1B2A6A] hover:delay-100 hover:duration-300">
          VOIR TOUS LES MASSAGES
        </button>
      </div>
    </div>
  );
}

function TeaseAMassage({ massage, hover, name }) {
  return (
    <div className="group relative flex items-center justify-center">
      <Image className="" src={massage} width={568} height={464} alt={name} />
      <Image
        className="absolute hidden group-hover:inline"
        src={hover}
        width={568}
        height={464}
        alt={name}
      />
    </div>
  );
}
