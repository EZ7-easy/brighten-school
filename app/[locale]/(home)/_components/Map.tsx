"use client";

import SmartImage from "@/components/shared/SmartImage";

const Map = () => {
  return (
    <div
      className={
        "text-[#373435] pt-16 pb-[200px] grid grid-cols-2 max-lg:grid-cols-1 px-[5%] bg-[url(/home/world-map.svg)] bg-cover bg-no-repeat max-lg:bg-center backdrop-blur-50"
      }
    >
      <div
        className={
          "max-lg:flex max-sm:block md:block max-lg:justify-between max-md:mb-10 md:mb-10"
        }
      >
        <div>
          <p
            className={
              "text-[#373435] text-[42px] font-bold mb-7 max-md:text-2xl"
            }
          >
            OUR BRANCHES
          </p>
          <p
            className={
              "text-[#373435] text-lg max-md:text-sm max-w-[28rem] font-semibold"
            }
          >
            At the moment, 12 large branches are providing services in the most
            convenient locations in Tashkent and are equipped with advanced
            technologies, the best conditions for high-level learning have been
            created.
          </p>
        </div>
        <div className={"md:mt-10 font-semibold"}>
          <div>
            <p className={"text-3xl mb-4 max-md:text-xl"}>
              8/1 Toshkent city center
            </p>
            <p className={"text-[#004ff9] text-lg max-md:text-sm"}>landmark:</p>
            <p className={"text-lg max-md:text-sm"}>
              metro station XALQLAR DO`STLIGI <br /> former UzBowling
            </p>
          </div>
        </div>
      </div>

      <div>
        <SmartImage
          src={"/home/location-photo.webp"}
          alt={"location-photo"}
          width={500}
          height={500}
          className={"w-full"}
        />
      </div>
    </div>
  );
};
export default Map;
