"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Scores from "./scores";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const options = { loop: true, duration: 30 } as const;

  // Array with 8 items (or real data)
  const carouselItems = Array(8).fill(null);

  return (
    <div id="Gallery" className="mx-[5%]">
      <p className="text-[#373435] text-[42px] font-bold mb-3 max-md:text-2xl">
        Gallery
      </p>

      <div>
        <Carousel plugins={[autoplay]} opts={options} className="mb-10">
          <CarouselContent>
            {carouselItems.map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 max-xl:basis-full md:flex max-md:p-10"
              >
                <Scores />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
