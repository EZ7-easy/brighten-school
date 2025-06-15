"use client";

const About = () => {
  return (
    <section
      id="About"
      className="mt-10 px-4 md:px-[5%] grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      {/* Responsive Video */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/zqiijOvrLd0"
            title="Welcome to INTER NATION SCHOOL📚"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-[#373435] flex flex-col justify-center">
        <h2 className="font-bold text-3xl sm:text-4xl mb-4">
          ABOUT OUR ENGLISH LANGUAGE CENTER
        </h2>
        <p className="text-sm sm:text-base font-semibold my-4 leading-relaxed">
          INTER NATION SCHOOL ENGLISH LEARNING CENTRE was founded on July 22,
          2013, and currently operates 12 large branches across the most
          convenient locations in Tashkent. These branches are equipped with
          advanced technologies to create the best possible conditions for
          high-level learning. Education is conducted according to a special
          program developed by Oxford University (Oxford University Press),
          which is renowned for its excellence. Our LEARNING CENTRE is the first
          in Uzbekistan to offer this program in a licensed format.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="text-base font-medium">There are</p>
            <p className="text-5xl font-bold text-gray-900">12</p>
            <p className="text-base font-medium">branches</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="text-base font-medium">There are</p>
            <p className="text-5xl font-bold text-gray-900">1800</p>
            <p className="text-base font-medium">students</p>
          </div>
          <div className="p-4 bg-gray-50 rounded shadow">
            <p className="text-base font-medium">There are</p>
            <p className="text-5xl font-bold text-gray-900">500</p>
            <p className="text-base font-medium">staff members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
