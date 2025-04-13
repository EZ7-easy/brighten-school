"use client";

const About = () => {
  return (
    <div
      id={"About"}
      className={"mt-10 grid grid-cols-1 md:grid-cols-2 px-[5%] gap-10"}
    >
      <div className={"flex justify-center"}>
        <iframe
          className={"w-full h-[470px] rounded-lg shadow-lg"}
          src="https://www.youtube.com/embed/zqiijOvrLd0"
          title="Welcome to INTER NATION SCHOOL📚"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={"w-full text-[#373435] flex flex-col justify-center"}>
        <p className={"font-bold text-4xl mb-4"}>
          ABOUT OUR ENGLISH LANGUAGE CENTER
        </p>
        <p className={"text-md font-semibold my-4 leading-relaxed"}>
          INTER NATION SCHOOL ENGLISH LEARNING CENTRE was founded on July 22,
          2013, and currently operates 12 large branches across the most
          convenient locations in Tashkent. These branches are equipped with
          advanced technologies to create the best possible conditions for
          high-level learning. Education is conducted according to a special
          program developed by Oxford University (Oxford University Press),
          which is renowned for its excellence. Our LEARNING CENTRE is the first
          in Uzbekistan to offer this program in a licensed format.
        </p>
        <div className={"grid md:grid-cols-3 grid-cols-1 gap-4 text-center"}>
          <div className={"p-4"}>
            <p className={"text-lg font-medium"}>There are</p>
            <p className={"block text-6xl font-bold text-gray-900"}>12</p>
            <p className={"text-lg font-medium"}>branches</p>
          </div>
          <div className={"p-4"}>
            <p className={"text-lg font-medium"}>There are</p>
            <p className={"block text-6xl font-bold text-gray-900"}>1800</p>
            <p className={"text-lg font-medium"}>students</p>
          </div>
          <div className={"p-4"}>
            <p className={"text-lg font-medium"}>There are</p>
            <p className={"block text-6xl font-bold text-gray-900"}>500</p>
            <p className={"text-lg font-medium"}>staff members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
