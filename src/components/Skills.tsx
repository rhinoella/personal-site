import { BaseSyntheticEvent, useEffect, useState } from "react";
import webGraphic from "../assets/icons/web.svg";
import desktopGraphic from "../assets/icons/desktop.svg";
import aiGraphic from "../assets/icons/ai.svg";
import blockGraphic from "../assets/icons/block.svg";

type SkillMap = {
  id: string;
  index: number;
  row: number;
  title: string;
  img: string;
  desc: string;
  skills: string[];
  gradient: string;
};

const skillData: SkillMap[] = [
  {
    id: "skill-1",
    index: 0,
    row: 1,
    title: "Web Development",
    img: webGraphic,
    desc: "Passionate about UI/UX design and crafting engaging user experiences. Skilled in fullstack web development.",
    skills: [
      "TypeScript",
      "C#",
      "AWS",
      ".NET",
      "SQL",
      "Fastify",
      "NodeJS",
      "React",
    ],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "skill-2",
    index: 1,
    row: 1,
    title: "Desktop Development",
    img: desktopGraphic,
    desc: "Experienced in developing advanced, industrially-applied, scientific desktop applications.",
    skills: ["C++", "C#", "Python", "Bash", "CMake", "Qt", "CI/CD"],
    gradient: "from-green-600 to-teal-700",
  },
  {
    id: "skill-3",
    index: 2,
    row: 2,
    title: "Machine Learning",
    img: aiGraphic,
    desc: "Skilled at integrating and developing machine-learning techniques.",
    skills: ["TensorFlow", "Keras", "GPT", "Python"],
    gradient: "from-orange-600 to-rose-800",
  },
  {
    id: "skill-4",
    index: 3,
    row: 2,
    title: "DApps",
    img: blockGraphic,
    desc: "Knowledgeable in the development and testing of smart contracts and decentralised applications.",
    skills: ["Solidity", "Ethers.js", "Hardhat", "Ethereum"],
    gradient: "from-purple-700 to-indigo-800",
  },
];

export const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  // Radius, width, height
  const [circleSizing, setCircleSizing] = useState(["7", "8", "30", "30"]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      isMobile
        ? setCircleSizing(["7", "8", "30", "30"])
        : setCircleSizing(["25", "26", "98", "80"]);
    };

    window.addEventListener("resize", handleResize);
    /*
    if (isMobile) {
      const expandRow = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let target = entry.target.parentElement as HTMLElement;
            target.style.height = "44rem";
          } else {
            let target = entry.target.parentElement as HTMLElement;
            target.style.height = "8rem";
          }
        });
      };

      const observer = new IntersectionObserver(expandRow, {
        threshold: 1,
      });

      document.querySelectorAll(".skill > .title").forEach((row) => {
        observer.observe(row);
      });

      return () => {
        observer.disconnect();
      };
    }*/
  }, [isMobile]);

  const expand = (event: BaseSyntheticEvent) => {
    let target = event.currentTarget as HTMLElement;
    let skillRow = target.parentElement!;

    setTimeout(() => {
      target
        .querySelector<HTMLDivElement>(`.${target.id}`)!
        .classList.replace("invisible", "visible");
    }, 50);

    target.querySelector<HTMLDivElement>(`.${target.id}`)!.style.transform = "";

    Array.from(skillRow.children).forEach((skill, index) => {
      skill.classList.replace("h-32", "h-[26rem]");

      if (skill.id != target.id) {
        let titleElement = skill.querySelector<HTMLParagraphElement>(".title")!;
        // If index is first the title will move in the left direction
        let sign = index == 0 ? "-" : "";
        titleElement.classList.replace("ease-out", "ease-in");
        titleElement.style.transform = `translateX(${sign}50rem)`;
        skill.classList.replace("w-1/2", "w-52");
      }
    });
  };

  const shrink = (event: BaseSyntheticEvent) => {
    let target = event.currentTarget as HTMLElement;
    let skillRow = target.parentElement!;

    setTimeout(() => {
      target
        .querySelector<HTMLDivElement>(`.${target.id}`)!
        .classList.replace("visible", "invisible");
    }, 200);

    target.querySelector<HTMLDivElement>(`.${target.id}`)!.style.transform =
      `translateX(20rem)`;

    Array.from(skillRow.children).forEach((skill) => {
      skill.classList.replace("w-52", "w-1/2");
      skill.classList.replace("h-[26rem]", "h-32");
      let titleElement = skill.querySelector<HTMLParagraphElement>(".title")!;
      // If index is one the title will move in the left direction
      titleElement.classList.replace("ease-in", "ease-out");
      titleElement.style.transform = "";
    });
  };

  const handleClick = (event: BaseSyntheticEvent) => {
    let target = event.currentTarget as HTMLElement;

    if (target.classList.contains("h-32")) {
      target.classList.replace("h-32", "h-[44rem]");
      target.querySelector<HTMLDivElement>(".corner")!.style.transform =
        `translateY(36rem)`;
    } else {
      target.classList.replace("h-[44rem]", "h-32");
      target.querySelector<HTMLDivElement>(".corner")!.style.transform = "";
    }
  };

  const listDesktop = skillData.map((skill: SkillMap) => {
    return (
      <div
        key={skill.id}
        id={skill.id}
        data-index={skill.index}
        onMouseEnter={expand}
        onMouseLeave={shrink}
        className={`transition-[width,height] ease-out duration-300 overflow-hidden w-1/2 hover:w-5/6 
                    p-10 bg-indigo-950 text-white rounded-3xl h-32 shadow-xl shadow-black`}
      >
        <p
          className="title relative z-40 xl:w-2/3 font-mono-text bg-indigo-950 transition-transform 
          duration-200 ease-in h-20 md:text-2xl xl:text-3xl pt-1 overflow-hidden whitespace-nowrap"
        >
          {skill.title}
        </p>
        <p className="emoji absolute z-30 mt-[-4.8rem] text-3xl xl:text-4xl font-mono-numbers font-thin">
          (&gt;﹏&lt;)
        </p>
        <div
          className={`${skill.id} min-h-[18rem] flex flex-col justify-between 
          invisible transition-transform duration-300`}
        >
          <div className="relative flex flex-row pl-10 md:gap-8 xl:gap-16 pt-5 md:w-[30rem] xl:w-[55rem] justify-between">
            <p
              className={
                "xl:text-lg 3xl:text-xl font-mono-numbers w-[40rem] grow"
              }
            >
              {skill.desc}
            </p>
            <img
              className="xl:my-[-4rem] md:h-28 3xl:h-fit"
              src={skill.img}
              width={200}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-2 xl:gap-4 mx-10 md:w-[30rem] xl:w-[50rem] pb-10">
            {skill.skills.map((skillName) =>
              skillBubble({ skillName: skillName, gradient: skill.gradient }),
            )}
          </div>
        </div>
      </div>
    );
  });

  const listMobile = skillData.map((skill: SkillMap) => {
    return (
      <div
        key={skill.id}
        id={skill.id}
        onClick={handleClick}
        data-index={skill.index}
        className={`snap-center skill transition-height ease-out duration-700 overflow-hidden w-full
                    p-10 bg-indigo-950 text-white rounded-3xl shadow-xl h-32 shadow-black`}
      >
        <div className="flex flex-col h-20">
          <p className="title relative z-40 xl:w-2/3 font-mono-text bg-indigo-950 pt-1 overflow-hidden whitespace-nowrap">
            {skill.title}
          </p>
          <div
            className="corner block place-self-end transition-transform 
          duration-500 ease-out"
          >
            <svg
              viewBox="0 0 24 24"
              width={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <polyline
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  points="4 16 16 16 16 4"
                  transform="rotate(180 10 10)"
                ></polyline>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div
          className={`${skill.id} min-h-[18rem] flex flex-col gap-8 justify-between 
           transition-transform duration-300`}
        >
          <div className="relative flex flex-col gap-8 pt-5  justify-between">
            <img
              className="xl:my-[-4rem] md:h-28 3xl:h-fit"
              src={skill.img}
              width={500}
            />
            <p className={"text-base font-mono-numbers grow"}>{skill.desc}</p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 pb-10">
            {skill.skills.map((skillName) =>
              skillBubble({ skillName: skillName, gradient: skill.gradient }),
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      id="skills"
      className="h-full md:h-[55rem] scroll-m-52 mt-48 p-8 md:p-14 w-full bg-gradient-to-b bg-background-darker 
     md:rounded-[5rem]"
    >
      <div className="flex flex-row justify-between px-2 md:px-8">
        <h2 className="text-2xl md:text-5xl 3xl:text-6xl font-mono-text pb-2">
          <span className="font-extralight">&gt;&gt;</span> SKILLS
        </h2>
        <div className="flex flex-row pt-2 md:pt-0">
          <svg width={circleSizing[2]} height={circleSizing[3]}>
            <circle
              cx={circleSizing[1]}
              cy={circleSizing[1]}
              r={circleSizing[0]}
              fill="#990000"
            />
          </svg>
          <svg width={circleSizing[2]} height={circleSizing[3]}>
            <circle
              cx={circleSizing[1]}
              cy={circleSizing[1]}
              r={circleSizing[0]}
              fill="#DAA520"
            />
          </svg>
          <svg width={circleSizing[2]} height={circleSizing[3]}>
            <circle
              cx={circleSizing[1]}
              cy={circleSizing[1]}
              r={circleSizing[0]}
              fill="#006400"
            />
          </svg>
        </div>
      </div>
      {!isMobile && (
        <div id="row-1" className="pt-14 flex flex-row gap-12 px-8">
          {listDesktop.slice(0, 2)}
        </div>
      )}
      {!isMobile && (
        <div id="row-2" className="pt-14 flex flex-row gap-12 px-8">
          {listDesktop.slice(2, 4)}
        </div>
      )}
      {isMobile && (
        <div className="pt-14 flex flex-col gap-6 snap-y"> {listMobile}</div>
      )}
    </div>
  );
};

const skillBubble = (props: { skillName: string; gradient: string }) => {
  return (
    <div
      className={`${props.gradient} font-mono-text tracking-wider bg-gradient-to-br text-white 
      font-medium text-[0.7rem] xl:text-sm p-2 md:py-3 px-4 md:px-6 xl:px-10 rounded-xl h-fit text-center xl:min-w-28`}
    >
      {props.skillName}
    </div>
  );
};
