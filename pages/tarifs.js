import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-5 font-poppins lg:flex lg:flex-col lg:items-center xl:mx-0">
      <div className="relative">
        <div className=" text-center text-2xl">Tarifs des massages</div>
        <div className="relative z-10 mt-12 gap-9 lg:grid lg:grid-cols-2">
          <Tarifs />
          <div className="hidden lg:block">
            <Image src="/tarifs.png" width={526} height={684} alt="tarifs" />
          </div>
        </div>
        <Image
          className="absolute -bottom-20 -left-48 z-0"
          src="/plant4.png"
          width={220}
          height={203}
          alt="plant4"
        />
      </div>
      <button className="mt-14 rounded-md  border-custom-blue bg-[#111A40] px-6 py-3 tracking-wider text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#1B2A6A] hover:delay-100 hover:duration-300">
        PRENDRE RENDEZ-VOUS
      </button>
    </div>
  );
}

function Tarifs() {
  return (
    <div className="relative flex flex-col border border-custom-blue px-10 py-12 lg:h-0 lg:min-h-full">
      <div className="mb-4 text-xl font-bold">Massages Classiques</div>
      <MassagePrice name="Massage Californien" time="1 heure" price="50" />
      <MassagePrice name="Massage Balinais" time="1 heure" price="50" />
      <MassagePrice name="Massage Prénatal" time="1 heure" price="50" />
      <MassagePrice name="Massage Mains & Pieds" time="1 heure" price="50" />
      <MassagePrice name="Massage Amma Assis" time="1 heure" price="50" />
      <div className="mb-4 mt-14 text-xl font-bold">Massages Spéciaux</div>
      <MassagePrice name="Massage Californien" time="1 heure" price="50" />
      <MassagePrice name="Massage Balinais" time="1 heure" price="50" />
      <MassagePrice name="Massage Prénatal" time="1 heure" price="50" />
      <div className="mb-4 mt-14 text-xl font-bold">Massages Enfants</div>
      <MassagePrice name="Massage Enfant" time="30 min" price="20" />
    </div>
  );
}

function MassagePrice({ name, time, price }) {
  return (
    <div className="flex justify-between leading-10 lg:leading-8 xl:leading-10">
      <div>{name}</div>
      <div>
        {time} / {price} €
      </div>
    </div>
  );
}
