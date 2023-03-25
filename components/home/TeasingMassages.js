import Image from "next/image";

export default function TeasingMassages() {
  return (
    <div>
      <div className="color-custom-blue mt-48 text-center font-poppins text-2xl font-bold">
        Les Massages
      </div>

      <div className="mt-16 grid grid-cols-2 gap-5">
        <div className="group relative col-span-2 mx-0 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg">
          <Image
            className="min-w-full"
            src="/massages/kobido.png"
            width={1075}
            height={480}
            alt="kobido"
          />
          <Image
            className="absolute hidden min-w-full group-hover:inline"
            src="/massages/kobido-hover.png"
            width={1075}
            height={480}
            alt="kobido-hover"
          />
        </div>
        <TeaseAMassage fileName={"californien"} />
        <TeaseAMassage fileName={"prenatal"} />
        <TeaseAMassage fileName={"chineitsang"} />
        <TeaseAMassage fileName={"shiatsu"} />
      </div>
      <div className="flex justify-center">
        <button className="mt-14 rounded-md  border-custom-blue bg-[#111A40] px-6 py-3 tracking-wider text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#1B2A6A] hover:delay-100 hover:duration-300">
          VOIR TOUS LES MASSAGES
        </button>
      </div>
    </div>
  );
}

function TeaseAMassage({ fileName }) {
  return (
    <div className="group relative flex items-center justify-center">
      <Image
        className=""
        src={`/massages/${fileName}.png`}
        width={568}
        height={464}
        alt={`${fileName}`}
      />
      <Image
        className="absolute hidden group-hover:inline"
        src={`/massages/${fileName}-hover.png`}
        width={568}
        height={464}
        alt={`${fileName}-hover`}
      />
    </div>
  );
}
