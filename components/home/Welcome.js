import Image from "next/image";
import background from "@/public/background.png";

export default function Welcome() {
  return (
    <div className="relative flex flex-col items-center justify-between bg-[url('/background.png')] bg-contain bg-center bg-no-repeat text-white">
      <Image className="invisible" src={background} alt="background" />
      <div className="absolute top-12 flex flex-col items-center">
        <div className="min-w-max font-dancing text-4xl font-bold sm:text-6xl xl:text-8xl">
          Les Jardins de Lilly
        </div>
        <div className="mx-10 hidden pt-10 text-center text-base sm:block xl:text-xl">
          Des massages bien-être dans un cadre fleuri et paisible à Montignac,
          Charente
        </div>
      </div>
      <div className="absolute bottom-14">
        <button className="rounded-md border-custom-blue bg-[#111A40] px-6  py-3 tracking-wider text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#1B2A6A] hover:delay-100 hover:duration-300">
          VOIR LES MASSAGES
        </button>
      </div>
    </div>
  );
}
