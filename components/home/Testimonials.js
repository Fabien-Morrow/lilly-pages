import Image from "next/image";
import Dot from "../utils/Dot";

export default function Testimonials() {
  return (
    <div>
      <div className="color-custom-blue mt-48 text-center text-2xl font-bold">
        Ce qu&apos;ils en ont pensé
      </div>
      <div className="mt-14 flex justify-between gap-3">
        <div className="flex items-center">
          <Image src="/left.png" width={30} height={30} alt="arrow-left" />
        </div>
        <ShowTestimonial />
        <div className="flex items-center">
          <Image src="/right.png" width={30} height={30} alt="arrow-right" />
        </div>
      </div>
      <div className="mt-7 flex justify-center gap-3">
        <Dot />
        <Dot focus="true" />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </div>
  );
}

function ShowTestimonial() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[60%] text-center text-lg italic">
        &quot;J&apos;ai enfin l&apos;impression d&apos;avoir les jambes légères!
        vraiment super, une magicienne!&quot; - Céline
      </div>
      <div className="mt-7">
        <Image
          src="/testimonials/celine.png"
          width={209}
          height={202}
          alt="customer-celine"
        />
      </div>
    </div>
  );
}
