"use client";

import SmartImage from "@/components/shared/SmartImage";
import { useState } from "react";

function Scores() {
  const [showMore, setShowMore] = useState(false);

  const toggleShow = () => setShowMore(!showMore);

  return (
    <div className="md:flex">
      <div>
        {/* Visible only on small screens */}
        <div className="flex gap-2 md:hidden mb-4">
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg border border-indigo-200 shadow-sm">
            <p className="text-2xl font-bold">8.0</p>
            <p className="text-xs uppercase tracking-wider">IELTS Score</p>
          </div>

          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-2xl font-bold">C1</p>
            <p className="text-xs uppercase tracking-wider">CEFR Level</p>
          </div>
        </div>

        {/* Optimized image */}
        <SmartImage
          src="/home/i-result1.webp"
          alt="i-result"
          width={500}
          height={500}
          className="w-[95%] max-sm:hidden h-[90%] max-md:h-[30rem] max-md:w-full max-md:mx-auto"
        />
      </div>

      <div>
        <p className="text-start text-2xl font-bold">Saforova Oysha</p>
        <p className="max-w-md mt-5 text-sm max-md:max-w-lg">
          {showMore
            ? `Praesent ac dui fermentum, blandit mi id, aliquam est. Fusce nec ante sed augue sollicitudin viverra. 
               Duis consequat auctor mollis. Maecenas vestibulum hendrerit lacus sit amet vehicula. Sed molestie diam nec metus 
               fringilla pellentesque. Vestibulum sit amet tincidunt nisi, eget tincidunt mi. Pellentesque egestas laoreet nulla, 
               et consectetur lorem dictum quis. Suspendisse non fringilla ex. Proin congue id sapien ut rhoncus.`
            : `Praesent ac dui fermentum, blandit mi id, aliquam est Duis consequat auctor mollis. Maecenas vestibulum hendrerit lacus sit amet vehicula. Sed molestie diam nec metus 
               fringilla pellentesque. Vestibulum sit amet tincidunt nisi...`}
        </p>
        <button
          onClick={toggleShow}
          className="mt-3 text-blue-600 text-sm hover:underline font-medium"
        >
          {showMore ? "Show less" : "Show more"}
        </button>

        <div className="flex gap-2 mt-6 max-sm:hidden">
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg border border-indigo-200 shadow-sm">
            <p className="text-2xl font-bold">8.0</p>
            <p className="text-xs uppercase tracking-wider">IELTS Score</p>
          </div>

          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-2xl font-bold">C1</p>
            <p className="text-xs uppercase tracking-wider">CEFR Level</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scores;
