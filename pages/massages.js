import Image from "next/image";
import Reserver from "../components/Reserver";

import Welcome from "../components/WelcomeMassage";

export default function Home() {
  return (
    <main className="font-poppins">
      <Welcome />
      <div className="mx-44 mt-48">
        <div className=" text-center text-2xl">Les Massages Signatures</div>
        <div className="mt-12 grid grid-cols-2 gap-9">
          <Cell1 />
          <Cell2 />
          <Cell3 />
          <Cell4 />
        </div>
        <LargeCell />
        <div className=" mt-28 text-center text-2xl">
          Les Massages Classiques
        </div>
        <div className="mt-12 grid grid-cols-2 grid-rows-3	 gap-9">
          <Cell5 />
          <Cell6 />
          <Cell7 />
          <Cell8 />
          <Cell9 />
          <Cell10 />
        </div>
        <div className=" mt-28 text-center text-2xl">Pour les enfants</div>
        <div className="mt-12 grid grid-cols-2 gap-9">
          <Cell11 />
          <Cell12 />
        </div>
      </div>
    </main>
  );
}

function Cell1() {
  return (
    <div className="relative flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">LA GRANDE EVASION</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
      <Image
        className="absolute bottom-0 -right-6"
        src="/plant3.png"
        width={94}
        height={103}
        alt="plant3"
      />
    </div>
  );
}

function Cell2() {
  return (
    <div>
      <Image
        src="/grande-evasion.png"
        width={524}
        height={473}
        alt="grande-evasion"
      />
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative">
      <Image
        src="/chinaitsang.png"
        width={524}
        height={473}
        alt="chinaitsang"
      />
      <Image
        className="absolute -right-14 bottom-0 scale-x-[-1]"
        src="/plant3.png"
        width={94}
        height={103}
        alt="plant3"
      />
    </div>
  );
}

function Cell4() {
  return (
    <div className="flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">CHI NAI TSANG</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
    </div>
  );
}

function LargeCell() {
  return (
    <div className="relative mt-24 flex flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">MASSAGE KOBIDO</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
        <br />
      </div>
      <Reserver />
      <Image
        className="absolute -bottom-14 -right-10"
        src="/plant.png"
        width={204}
        height={205}
        alt="plant"
      />
    </div>
  );
}

function Cell5() {
  return (
    <div className="flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">MASSAGE CALIFORNIEN</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
    </div>
  );
}

function Cell6() {
  return (
    <div className="flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">MASSAGE BALINAIS</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
    </div>
  );
}

function Cell7() {
  return (
    <div>
      <Image src="/room.png" width={524} height={473} alt="room" />
    </div>
  );
}

function Cell8() {
  return (
    <div className="flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">MASSAGE PRENATAL</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
    </div>
  );
}

function Cell9() {
  return (
    <div className="flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">MASSAGE MAINS & PIEDS</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
    </div>
  );
}

function Cell10() {
  return (
    <div className="flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">MASSAGE AMMA ASSIS</div>
      <div className="mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <Reserver />
    </div>
  );
}

function Cell11() {
  return (
    <div className="relative flex h-[473px] w-[524px] flex-col px-10 py-12">
      <div className="relative z-20 text-lg font-medium">MASSAGE ENFANTS</div>
      <div className="relative z-20 mt-9 flex-grow">
        <p>
          Ce qui fait l&apos;originalité et la spécificité du californien,
          c&apos;est principalement la douceur avec laquelle on procède aux
          manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de
          la tête aux pieds).
        </p>
        <br />
        <p>
          Il facilite la détente et la relaxation, ce qui entraîne un état de
          bien-être global du corps et un lâcher prise de l&apos;esprit : c’est
          Le massage bien-être &quot;anti-stress&quot;.
        </p>
      </div>
      <div className="relative z-20">
        <Reserver />
      </div>

      <Image
        className="absolute left-0 z-10"
        src="/green-shape.svg"
        width={395}
        height={422}
        alt="green-shape"
      />
    </div>
  );
}

function Cell12() {
  return (
    <div>
      <Image
        src="/diving-board.png"
        width={524}
        height={473}
        alt="diving-board"
      />
    </div>
  );
}
