"use client";

import SmartImage from "@/components/shared/SmartImage";
import { useState } from "react";

type ScoresProps = {
  imageSrc: string;
  ieltsScore: string;
  cefrScore: string;
  name: string;
  fullText: string;
  shortText: string;
};

function Scores({
  imageSrc,
  ieltsScore,
  cefrScore,
  name,
  fullText,
  shortText,
}: ScoresProps) {
  const [showMore, setShowMore] = useState(false);

  const toggleShow = () => setShowMore(!showMore);

  return (
    <div className="md:flex">
      <div>
        {/* Visible only on small screens */}
        <div className="sm:hidden">
          <SmartImage
            src={imageSrc}
            alt="i-result"
            width={500}
            height={500}
            className="w-[95%] mb-4 max-md:w-full max-md:mx-auto"
          />
          <div className="flex gap-2">
            <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg border border-indigo-200 shadow-sm">
              <p className="text-2xl font-bold">{ieltsScore}</p>
              <p className="text-xs uppercase tracking-wider">IELTS Score</p>
            </div>
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg border border-emerald-200 shadow-sm">
              <p className="text-2xl font-bold">{cefrScore}</p>
              <p className="text-xs uppercase tracking-wider">CEFR Level</p>
            </div>
          </div>
        </div>

        {/* Optimized image */}
        <SmartImage
          src={imageSrc}
          alt="i-result"
          width={500}
          height={500}
          className="w-[95%] max-sm:hidden h-[90%] max-md:h-[30rem] max-md:w-full max-md:mx-auto"
        />
      </div>

      <div>
        <p className="text-start text-2xl font-bold">{name}</p>
        <p className="max-w-md mt-5 text-sm max-md:max-w-lg">
          {showMore ? fullText : shortText}
        </p>
        <button
          onClick={toggleShow}
          className="mt-3 text-blue-600 text-sm hover:underline font-medium"
        >
          {showMore ? "Show less" : "Show more"}
        </button>

        <div className="flex gap-2 mt-6 max-sm:hidden">
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg border border-indigo-200 shadow-sm">
            <p className="text-2xl font-bold">{ieltsScore}</p>
            <p className="text-xs uppercase tracking-wider">IELTS Score</p>
          </div>
          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-2xl font-bold">{cefrScore}</p>
            <p className="text-xs uppercase tracking-wider">CEFR Level</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scores;
