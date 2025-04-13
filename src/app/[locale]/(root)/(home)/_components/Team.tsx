"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { teachers } from "../../../../../../constants";
import Autoplay from "embla-carousel-autoplay";

const Team = () => {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const options = { loop: true, duration: 30 } as const;

  // Array with 8 items (or real data)

  return (
    <div id={"Team"} className={"mt-12 mx-[5%]"}>
      <p className={"text-[#373435] text-[42px] font-bold mb-7"}>
        OUR TEACHERS
      </p>

      <Carousel plugins={[autoplay]} opts={options} className="mb-10">
        <CarouselContent className={""}>
          {teachers.map((teacher, idx) => (
            <CarouselItem
              key={idx}
              className={
                "xl:basis-1/5 lg:basis-1/4 md:basis-1/3 max-md:basis-full space-x-0 pl-0"
              }
            >
              <Dialog>
                <DialogTrigger>
                  <div className={" m-10"}>
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className={"flex ml-7"}>
                    <hr className={"rotate-90 w-8 h-2 bg-[#004ff9] mt-3"} />
                    <p className={"text-2xl font-bold text-start mb-5"}>
                      {teacher.name}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent
                  className={
                    "bg-background grid md:grid-cols-2 max-w-3xl max-h-[90%]"
                  }
                >
                  <div>
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={500}
                      height={500}
                      className={"w-full"}
                    />
                  </div>
                  <div className={"text-[17px]"}>
                    <div className={"flex"}>
                      <hr className={"rotate-90 w-8 h-2 bg-[#004ff9] mt-3"} />
                      <p className={"text-2xl font-bold text-start mb-5"}>
                        {teacher.name}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default Team;
