import Image from "next/image";

export default function Reserver() {
  return (
    <div className="flex">
      <div className="text-lg text-custom-green">PRENDRE RENDEZ-VOUS</div>
      <Image
        className="ml-4"
        src="/arrow-reservation.svg"
        width={15}
        height={14}
        alt="arrow-reservation"
      />
    </div>
  );
}
