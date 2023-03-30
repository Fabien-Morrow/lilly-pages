import Image from "next/image";
import Dot from "../components/utils/Dot";
import { Accordion } from "@mantine/core";
import ateliers from "@/public/ateliers.json";

export default function Home() {
  return (
    <main className="font-poppin">
      <div className="mx-5 mt-8 md:mx-20 md:mt-32 xl:mx-44">
        <div className=" text-center text-2xl">Les Ateliers</div>
        <Misa />
        <AccordeonAteliers />
        <div className="hidden xl:mt-28 xl:grid xl:grid-cols-3 xl:gap-5">
          <Parentalite content={ateliers.parentalite} />
          <Enfants content={ateliers.enfants} />
          <Entreprise content={ateliers.entreprise} />
        </div>
      </div>
    </main>
  );
}

function AccordeonAteliers() {
  return (
    <div className="mt-5 xl:hidden">
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
        <AccordeonAtelier content={ateliers.parentalite} />
        <AccordeonAtelier content={ateliers.enfants} />
        <AccordeonAtelier content={ateliers.entreprise} />
      </Accordion>
    </div>
  );
}

function AccordeonAtelier({ content }) {
  const wrappedDescription = content.description.map((paragraph, index) => (
    <p className="mb-4" key={index}>
      {paragraph}
    </p>
  ));
  return (
    <Accordion.Item value={content.id}>
      <Accordion.Control className="font-medium">
        <div>{content.name}</div>
      </Accordion.Control>
      <Accordion.Panel>{wrappedDescription}</Accordion.Panel>
    </Accordion.Item>
  );
}

function Misa() {
  return (
    <div className="mt-12 flex gap-10">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4 xl:block">
          <div>
            <br />
            <p>
              En tant qu’institutrice MISA, je propose différents
              accompagnements pour les professionels, les enfants et les
              parents.
            </p>
            <br />
            <p>
              Le massage se pratique dès le plus jeune âge dans de nombreux
              pays.
            </p>
            <br />
            <p>
              On connait aujourd’hui l’incidence bénéfique de ce soin, pour soi
              même, mais aussi dans les relations interpersonnelles.​
            </p>
          </div>
          <div className="md:block md:min-w-max xl:hidden">
            <Image
              className=""
              src="/ateliers.png"
              width={200}
              height={205}
              alt="ateliers"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <Image
          className=""
          src="/ateliers.png"
          width={200}
          height={205}
          alt="ateliers"
        />
      </div>
    </div>
  );
}

function Parentalite({ content }) {
  return (
    <div className="border border-custom-green p-8">
      <div className="mb-9 text-lg font-medium">
        Accompagnement à la parentalité
      </div>
      <div className="">
        Ce qui fait l&apos;originalité et la spécificité du californien,
        c&apos;est principalement la douceur avec laquelle on procède aux
        manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de la
        tête aux pieds)
      </div>
    </div>
  );
}

function Enfants({ content }) {
  return (
    <div className="relative border border-custom-green p-8">
      <div className="mb-9 text-lg font-medium">Ateliers pour les enfants</div>
      <div className="">
        Ce qui fait l&apos;originalité et la spécificité du californien,
        c&apos;est principalement la douceur avec laquelle on procède aux
        manoeuvres , ainsi que la fluidité du rythme et des enchaînements (de la
        tête aux pieds)
      </div>
      <Image
        className="absolute -left-28 -bottom-14"
        src="/plant.png"
        width={204}
        height={205}
        alt="plant"
      />
    </div>
  );
}

function Entreprise({ content }) {
  return (
    <div className="border border-custom-green p-8">
      <div className="mb-9 text-lg font-medium">Ateliers en entreprise</div>
      <div>
        Pour vous accompagner dans vos actions de prévention des RPS.
        <div className="mt-3">
          <div className="flex items-baseline">
            <div>
              <Dot />
            </div>
            <div className="ml-2">
              Interventions régulières en individuel (20- 30min) AMMA assis,
              massage mains&pieds, Kobido
            </div>
          </div>
          <div className="flex items-baseline">
            <div>
              <Dot />
            </div>
            <div className="ml-2">
              Gestion du stress, cohésion d’équipe, en association avec une
              sophrologue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
