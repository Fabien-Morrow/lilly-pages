import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative font-poppins">
        <div className=" text-center text-2xl">Tarifs des massages</div>
        <div className="relative z-10 mt-12 grid grid-cols-2 gap-9">
          <Tarifs />
          <div>
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
    <div className="relative flex h-[684px] w-[526px] flex-col border border-custom-blue px-10 py-12">
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
    <div className="flex justify-between py-2">
      <div>{name}</div>
      <div>
        {time} / {price} €
      </div>
    </div>
  );
}
