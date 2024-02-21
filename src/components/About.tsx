import noellaPixel from "../assets/noellaPixel.png";

export const About = () => {
  return (
    <section id="about" className="py-32 scroll-m-64">
      <div className="w-full bg-gradient-to-br from-blue-700 to-indigo-950 gap-20 rounded-3xl p-20 flex flex-row justify-between">
        <div className="flex flex-col w-5/6 xl:text-2xl font-extralight gap-8">
          <h3 className="md:text-3xl xl:text-5xl font-bold font-mono-text">
            Noella Spitz
          </h3>
          <div className="flex flex-row gap-2">
            <svg
              className="pt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
              />
            </svg>
            <p className="font-semibold">London, UK</p>
          </div>
          <p>
            A detail-orientated, multi-talented Software Engineer dedicated to
            delivering quality results and innovative solutions. Possesses over
            three years of experience in designing, developing and testing
            user-friendly applications and high-level systems, collaborating
            with teams and users to deliver first-class results.
          </p>
          <div className="flex flex-row md:gap-4 xl:gap-8">
            <a
              href="https://github.com/rhinoella"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/noella-spitz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <p>noella.spitz@gmail.com</p>
          </div>
        </div>
        <div className="border-4 border-dashed border-slate-300 rounded-[50%] p-16">
          <img src={noellaPixel} width={300}></img>
        </div>
      </div>
    </section>
  );
};
