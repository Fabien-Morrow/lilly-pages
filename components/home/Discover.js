import Image from "next/image";
import Dot from "../utils/Dot";
import { Carousel } from "@mantine/carousel";

export default function Discover() {
  const photos = [
    "place1",
    "place2",
    "place3",
    "place4",
    "place5",
    "place6",
    "place7",
    "place8",
  ];

  const wrappedPhotos = photos.map((photo) => {
    return (
      <Carousel.Slide
        className="flex items-center justify-center"
        key={photo}
        gap="xs"
      >
        <div>
          <Image
            src={`/place/${photo}.png`}
            width={331}
            height={291}
            alt={photo}
          />
        </div>
      </Carousel.Slide>
    );
  });

  return (
    <div className="relative flex flex-col items-center">
      <div className="color-custom-blue mt-48 text-center font-poppins text-2xl font-bold">
        Découvrir le lieu
      </div>
      <div className="relative">
        <Image
          className="absolute top-0 -left-40"
          src="/plant2.png"
          width={168}
          height={119}
          alt="gincko-biloba"
        />
        <Carousel
          className="mt-14"
          mx="auto"
          withIndicators
          height={300}
          loop
          align="start"
          slideGap="xs"
          slideSize="33.333333%"
          controlSize={30}
          controlsOffset="xl"
          nextControlIcon={<NextArrow />}
          previousControlIcon={<PreviousArrow />}
          breakpoints={[
            { maxWidth: "lg", slideSize: "50%", slidesToScroll: 2 },
            { maxWidth: "sm", slideSize: "100%", slidesToScroll: 1 },
          ]}
        >
          {wrappedPhotos}
        </Carousel>
      </div>
    </div>
  );
}

function NextArrow() {
  return <Image src="/right.png" width={30} height={30} alt="arrow-right" />;
}

function PreviousArrow() {
  return <Image src="/left.png" width={30} height={30} alt="arrow-left" />;
}
