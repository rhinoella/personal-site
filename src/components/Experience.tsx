import arrow from "../assets/arrow.svg";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const experienceData = [
  {
    title: "Technology Delivery Lead",
    company: "Blue202 Labs \u00A0 | \u00A0 Part time",
    date: "Jul. 2024 - Dec. 2024",
    desc: [
      <p>
        <b>Led the software engineering team</b>, overseeing project delivery to
        ensure quality and meeting of client deadlines. Provided{" "}
        <b>technical consulting</b> for SMBs and non-technical startup founders
        to develop and design optimum digital infrastructure.
      </p>,
      <p>
        Created comprehensive project proposals,{" "}
        <b>
          outlining development timelines, budgets, and proposing technology
          stacks
        </b>
        . Conducted recruitment and hiring of all employees, facilitating
        interviews and screening processes.
      </p>,
    ],
  },
  {
    title: "Scientific Software Developer",
    company:
      "UK Science and Technology Facilities Council \u00A0 | \u00A0 Full time",
    date: "Jul. 2023 - Jul. 2024",
    desc: [
      <p>
        Collaborating in a team to develop&nbsp;
        <a
          className="hover:text-pink-600 text-pink-500 underline"
          href="https://github.com/disorderedmaterials/dissolve"
        >
          Dissolve
        </a>
        , a simulation tool written in C++ for the interrogation of neutron
        scattering data, and{" "}
        <a
          className="hover:text-pink-600 text-pink-500 underline"
          href="https://github.com/disorderedmaterials/gudpy"
        >
          GudPy
        </a>
        , a Python software for data processing and reduction.
      </p>,
      <p>
        Provides innovative solutions for{" "}
        <b className="text-white">world-leading research</b> in many industries,
        including petroleum processing, pharmaceutical drug discovery, vaccine
        development and planetary science.
      </p>,
    ],
  },
  {
    title: "Fullstack Developer",
    company: `QED Learning \u00A0 | \u00A0 Part time`,
    date: "Jun. 2023 - May 2024",
    desc: [
      <p>
        Developing augmented reality, phone-application prototypes for an EdTech
        startup, applying C#, Unity3D, CAD and IOS development principles.
      </p>,
      <p>
        <b>Led the design and development</b> of a modular backend architecture
        and .NET API, providing the foundations for an advanced learning
        platform.
      </p>,
      <p>
        Integrated the API with a GPT agent to perform handwriting recognition
        and mathematical operations.
      </p>,
    ],
  },
];

export const Experience = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const treeRef = useRef(null);
  const treeInView = useInView(treeRef);

  const widthVariants = {
    hidden: { width: "min-content" },
    expanded: {
      width: "100%",
      transition: {
        transitionTimingFunction: "ease-in",
        duration: 0.7,
        delay: 0.05,
      },
    },
  };

  const arrowVariants = {
    hidden: { width: "0px" },
    expanded: {
      width: "max-content",
      transition: {
        transitionTimingFunction: "ease-in",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const heightVariants = {
    shrunk: { height: "4rem" },
    long: {
      height: "100%",
      transition: {
        transitionTimingFunction: "ease-out",
        duration: 1.5,
        delay: 0.3,
      },
    },
  };

  useEffect(() => {
    if (inView || treeInView) {
      controls.start("expanded");
      controls.start("long");
    } else {
      controls.start("hidden");
      controls.start("shrunk");
    }
  }, [controls, inView]);

  const list = experienceData.map((experience) => {
    return (
      <div
        key={experience.title}
        className="text-base md:text-xl flex flex-row h-[40rem] md:h-[34rem] mx-auto pl-4"
      >
        <div className="hidden md:flex pr-10 pt-2 uppercase font-extralight w-48">
          <p>{experience.date}</p>
        </div>
        <motion.div
          variants={heightVariants}
          initial="shrunk"
          animate={controls}
          className="hidden md:block border-l-2"
        ></motion.div>
        <motion.div
          variants={arrowVariants}
          initial="hidden"
          animate={controls}
          className="overflow-hidden"
        >
          <img
            src={arrow}
            width={100}
            className="hidden md:block self-start min-w-[100px] pt-10"
          ></img>
        </motion.div>
        <div className="flex flex-col max-w-lg pl-10 px-6 py-6">
          <h4 className="text-xl md:text-4xl tracking-wide">
            {experience.title}
          </h4>
          <p className="uppercase font-light text-gray-400">
            {experience.company}
          </p>
          <div className="flex md:hidden pr-10 pt-2 uppercase font-extralight text-gray-500 md:w-48">
            <p>{experience.date}</p>
          </div>
          <ul
            className="flex flex-col gap-4 pt-5 font-mono-text font-extralight 
          text-gray-100 text-base md:text-lg tracking-tight"
          >
            {experience.desc.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div id="experience" className="h-max pb-12 py-72 md:py-72">
      <motion.div
        variants={widthVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="whitespace-nowrap text-xl md:text-5xl font-mono-text text-right"
      >
        <h3 className="text-2xl md:text-4xl mx-4 md:mx-0 py-4 md:py-8 px-8 md:px-24 bg-gradient-to-r from-violet-900 to-blue-800 rounded-full mt-32 mb-10 md:my-32">
          WORK EXPERIENCE
        </h3>
      </motion.div>
      <div ref={treeRef} className="flex flex-col">
        {list}
      </div>
    </div>
  );
};
