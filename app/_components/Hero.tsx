import React from "react";

function Hero() {
  return (
    <section className="bg-black">
      <div
        className="flex items-baseline 
        justify-center pt-20">
        <h2
          className="text-white border 
            px-3 p-2 rounded-full
        text-center border-white">
          See What's New | <span className="text-sky-300">AI Diagram</span>
        </h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
            Let’s work better
            <strong className="font-extrabold text-white sm:block">
              together.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-slate-200">
            Centralize all of your scattered docs and diagrams. Build a team
            knowledge repository with a multiplayer-first tool.{" "}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
