import Image from "next/image";
import Reserver from "../components/Reserver";

import { Accordion } from "@mantine/core";
import massages from "@/public/massages.json";

import WelcomeMassage from "../components/WelcomeMassage";
export default function Home() {
  return (
    <main className="font-poppins">
      <WelcomeMassage />
      <WideMassages />
      <AccordeonMassages />
      <AccordeonMassages />
    </main>
  );
}

function AccordeonMassages() {
  return (
    <div className="mx-5 mt-14 items-center md:mx-20 xl:hidden">
      <h1 className="mb-5 text-center font-bold">Les Massages Signatures</h1>
      <div>
        <Accordion
          variant="separated"
          defaultValue="la_grande_evasion"
          radius={0}
          styles={{
            item: {
              borderColor: "#689A77",
              "&[data-active]": {
                borderColor: "#689A77",
              },
            },
          }}
        >
          <AccordeonMassage massage={massages.la_grande_evasion} />
          <AccordeonMassage massage={massages.chi_nai_tsang} />
          <AccordeonMassage massage={massages.kobido} />
        </Accordion>
      </div>
    </div>
  );
}

function AccordeonMassage({ massage }) {
  const wrappedDescription = massage.description.map((paragraph, index) => (
    <p className="mb-4" key={index}>
      {paragraph}
    </p>
  ));
  return (
    <Accordion.Item value={massage.id}>
      <Accordion.Control className="font-medium">
        <div>{massage.name}</div>
      </Accordion.Control>
      <Accordion.Panel>
        {wrappedDescription}
        <div className="flex justify-center">
          <Image
            src={`/massages/${massage.image}`}
            width={524}
            height={473}
            alt={massage.name}
          />
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

function WideMassages() {
  return (
    <div className="mx-44 mt-48 hidden xl:block">
      <div className=" text-center text-2xl">Les Massages Signatures</div>
      <div className="mt-12 grid grid-cols-2 gap-9">
        <Cell massage={massages.la_grande_evasion} />
        <div>
          {/* Cell 2 */}
          <Image
            src="/massages/grande-evasion.png"
            width={524}
            height={473}
            alt="grande-evasion"
          />
        </div>
        <div className="relative">
          {/* Cell 3 */}
          <Image
            src="/massages/chinaitsang.png"
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
        <Cell massage={massages.chi_nai_tsang} />
      </div>
      <LargeCell massage={massages.kobido} />
      <div className=" mt-28 text-center text-2xl">Les Massages Classiques</div>
      <div className="mt-12 grid grid-cols-2 grid-rows-3 gap-9">
        <Cell massage={massages.californien} />
        <Cell massage={massages.balinais} />
        <div>
          {/* Cell 7 */}
          <Image src="/room.png" width={524} height={473} alt="room" />
        </div>
        <Cell massage={massages.prenatal} />
        <Cell massage={massages.mains_pieds} />
        <Cell massage={massages.amma_assis} />
      </div>
      <div className=" mt-28 text-center text-2xl">Pour les enfants</div>
      <div className="mt-12 grid grid-cols-2 gap-9">
        <MassageEnfants />
        <div>
          {/* Cell 12 */}
          <Image
            src="/massages/diving-board.png"
            width={524}
            height={473}
            alt="diving-board"
          />
        </div>
      </div>
    </div>
  );
}

function Cell({ massage, whichPlant }) {
  const wrappedDescription = massage.description.map((paragraph, index) => (
    <p className="mb-4" key={index}>
      {paragraph}
    </p>
  ));
  let plant;
  switch (whichPlant) {
    case 1:
      plant = (
        <Image
          className="absolute bottom-0 -right-6"
          src="/plant3.png"
          width={94}
          height={103}
          alt="plant3"
        />
      );
      break;
    case 2:
      plant = (
        <Image
          className="absolute -right-14 bottom-0 scale-x-[-1]"
          src="/plant3.png"
          width={94}
          height={103}
          alt="plant3"
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="relative flex h-0 min-h-full flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">{massage.name}</div>
      <div className="mt-9 flex-grow">{wrappedDescription}</div>
      <Reserver />
      {plant}
    </div>
  );
}

function LargeCell({ massage }) {
  const wrappedDescription = massage.description.map((paragraph, index) => (
    <p className="mb-4" key={index}>
      {paragraph}
    </p>
  ));
  return (
    <div className="relative mt-24 flex flex-col border border-custom-blue px-10 py-12">
      <div className="text-lg font-medium">{massage.name}</div>
      <div className="mt-9 flex-grow">{wrappedDescription}</div>
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

function MassageEnfants() {
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
