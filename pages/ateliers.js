import Image from "next/image";
import Dot from "../components/utils/Dot";

export default function Home() {
  return (
    <main className="font-poppins">
      <div className="mx-44 mt-48">
        <div className=" text-center text-2xl">Les Ateliers</div>
        <Misa />
        <div className="mt-28 grid grid-cols-3 gap-5">
          <Parentalite />
          <Enfants />
          <Entreprise />
        </div>
      </div>
    </main>
  );
}

function Misa() {
  return (
    <div className="mt-28 flex gap-10">
      <div className="flex flex-col justify-center">
        <div className="text-lg font-bold">titre ici</div>
        <div>
          <br />
          <p>
            En tant qu’institutrice MISA, je propose différents accompagnements
            pour les professionels, les enfants et les parents.
          </p>
          <br />
          <p>
            Le massage se pratique dès le plus jeune âge dans de nombreux pays.
          </p>
          <br />
          <p>
            On connait aujourd’hui l’incidence bénéfique de ce soin, pour soi
            même, mais aussi dans les relations interpersonnelles.​
          </p>
        </div>
      </div>
      <div>
        <Image
          className=""
          src="/ateliers.png"
          width={396}
          height={319}
          alt="ateliers"
        />
      </div>
    </div>
  );
}

function Parentalite() {
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

function Enfants() {
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

function Entreprise() {
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
