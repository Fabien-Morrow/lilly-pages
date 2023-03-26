import Image from "next/image";

export default function Welcome() {
  return (
    <div className="mt-28 pt-6">
      <div className="mx-auto flex max-w-min flex-col items-center">
        <div className="min-w-max text-3xl font-bold">
          La carte des massages bien être
        </div>
        <div className="mx-10 mt-8 text-center text-2xl">
          Homemade massages at home to help you relax, feel better and improve
          your health.
        </div>
        <Image
          className="mt-20"
          src="/green-logo.png"
          width={116}
          height={227}
          alt="green-logo"
        />
      </div>
    </div>
  );
}
