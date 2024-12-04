import { useState } from "react";

export const Featured = () => {
  return (
    <div
      id="featured"
      className="h-full md:h-[55rem] scroll-m-52 mt-48 pb-14 w-full bg-gradient-to-b bg-background-darker 
     md:rounded-[5rem] flex flex-col items-center gap-10"
    >
      <div className="flex flex-row justify-between w-full">
        <div className="bg-stripes w-full bg-cover h-28 flex items-center">
          <h2 className="text-4xl md:text-5xl 3xl:text-6xl font-mono-text pb-2 pl-12">
            FEATURED IN
          </h2>
        </div>
      </div>
      <iframe
        className="max-w-[90vw]"
        width="900"
        height="515"
        src="https://www.youtube.com/embed/sGgGYp93OcU?si=7dhj1o3txJihM36H"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="text-center px-2">
        <h3 className="text-2xl">Fundamentals of Computers by Noella Spitz</h3>
        <p className="font-light italic">
          A lecture delivered to students of the 2024 DirectEd Development
          bootcamp cohort in Kenya and Ethiopia.
        </p>
      </div>
    </div>
  );
};
