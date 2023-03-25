import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div>
          <Image src="/logo.png" width={53} height={53} alt="logo" />
        </div>
        <h1 className="ml-5 hidden items-center justify-center font-dancing lg:inline-flex lg:text-2xl xl:text-3xl">
          Les Jardins de Lilly
        </h1>
      </div>
    </Link>
  );
}
