import Image from "next/image";

export default function Presentation() {
  return (
    <div id="presentation" className="">
      <div className="float-left mr-7 hidden lg:block">
        <Image
          className=""
          src="/sandrine-full.png"
          width={409}
          height={484}
          alt="sandrine"
        />
      </div>
      <div className="text-center lg:text-left">
        <h1 className="font-bold lg:text-2xl">Qui suis-je ?</h1>
        <p className="pt-14 text-sm lg:text-lg">
          Infirmière diplomée d&apos;état, praticienne en relation d&apos;aide
          par le massage, certifiée en KOBIDO selon l&apos;enseignement de
          Sandrine Takumi Finch.
        </p>
        <br />
        <p>
          Parce que la santé est un état de complet bien-être physique et
          psychique, c&apos;est tout naturellement que je me suis orientée vers
          les massages bien-être, afin de proposer des soins apaisants,
          relaxants et dynamisants de manière non verbale.
        </p>
        <br />
        <p>
          La Formation spécialiste Kobido parfait cette évolution par son côté
          très technique, précis et délicat.
        </p>
        <br />
        <p>
          Un massage est avant tout une rencontre, chaque rendez-vous est
          précédé d&apos;un temps d&apos;échange afin de répondre à vos
          attentes, en tenant compte de votre inpidualité.
        </p>
        <br />
        <p>
          *Ces techniques ne se substituent en aucun cas à des soins de
          kinésithérapies.
        </p>
      </div>
    </div>
  );
}
