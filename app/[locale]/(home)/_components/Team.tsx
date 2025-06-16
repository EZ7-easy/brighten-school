"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { teachers } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import SmartImage from "@/components/shared/SmartImage";

const Team = () => {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const options = { loop: true, duration: 30 } as const;

  return (
    <section id="Team" className="mt-16 px-4 md:px-[5%]">
      <h2 className="text-[#373435] text-3xl md:text-[42px] font-bold mb-10 text-center md:text-left">
        OUR TEACHERS
      </h2>

      <Carousel plugins={[autoplay]} opts={options} className="mb-10">
        <CarouselContent>
          {teachers.map((teacher, idx) => (
            <CarouselItem
              key={idx}
              className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full px-4"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    role="button"
                    tabIndex={0}
                    className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <SmartImage
                        src={teacher.image}
                        alt={teacher.name}
                        width={500}
                        height={500}
                        className="w-full h-100 object-cover"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      <hr className="rotate-90 w-8 h-1 bg-[#004ff9] mr-3" />
                      <p className="text-lg md:text-2xl font-semibold text-gray-800">
                        {teacher.name}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="bg-background max-w-3xl max-h-[90vh] overflow-y-auto p-6 grid md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <SmartImage
                      src={teacher.image}
                      alt={teacher.name}
                      width={500}
                      height={500}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold mb-4 text-gray-900">
                      {teacher.name}
                    </DialogTitle>
                    <p className="text-[16px] leading-relaxed text-gray-700">
                      {teacher.about || "No description provided."}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Team;
