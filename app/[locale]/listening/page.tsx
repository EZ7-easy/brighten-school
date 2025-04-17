"use client";

import { musics } from "@/constants";
import MusicPlayer from "../_components/MusicPlayer";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function Listening() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 text-black bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Listening Audio
        </h1>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-blue-600">
            <Button onClick={handleClick} variant={"ghost"}>
              {open ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </Button>
            Beginner Listening Audio
          </h2>
          {open && (
            <div className="space-y-4">
              {musics.map((music) => (
                <div
                  key={music.name}
                  className="border-b border-gray-200 pb-4 last:border-0"
                >
                  <MusicPlayer audioSrc={music.src} title={music.name} />
                </div>
              ))}
            </div>
          )}
          {!open && <div className="hidden"></div>}
        </div>
      </div>
    </main>
  );
}

export default Listening;
