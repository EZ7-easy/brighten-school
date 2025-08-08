"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Scores from "./scores";
import Autoplay from "embla-carousel-autoplay";
import { carouselItems } from "@/constants"; // This must be an array of real data

const Gallery = () => {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const options = { loop: true, duration: 15 } as const;

  return (
    <div id="Gallery" className="mx-[5%]">
      <p className="text-[#373435] text-[42px] font-bold mb-3 max-md:text-2xl">
        Results
      </p>

      <div>
        <Carousel plugins={[autoplay]} opts={options} className="mb-10">
          <CarouselContent>
            {carouselItems.map((result) => (
              <CarouselItem
                key={result.name}
                className="basis-1/2 max-xl:basis-full md:flex max-md:p-10"
              >
                <Scores
                  imageSrc={result.imageSrc}
                  ieltsScore={result.ieltsScore}
                  cefrScore={result.cefrScore}
                  name={result.name}
                  fullText={result.fullText}
                  shortText={result.shortText}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
