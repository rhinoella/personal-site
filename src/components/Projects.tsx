import { useState } from "react";

import cnnArch from "../assets/images/CnnArch.png";
import inceptionArch from "../assets/images/inceptionArch.png";

import ticketeerImage from "../assets/images/ticketeerDesign.jpg";
import tickAttendee from "../assets/images/tickAttendee.jpg";
import tickEvent from "../assets/images/tickEvent.jpg";
import tickEvents from "../assets/images/tickEvents.jpg";
import tickLogs from "../assets/images/tickLogs.jpg";
import tickScan from "../assets/images/tickScan.jpg";

import waba from "../assets/images/WhatsApp-Business-Featured.jpg";
import waChat from "../assets/images/waChat.png";

import swiftLogo from "../assets/images/swiftLogo.png";
import swiftCta from "../assets/images/swiftCta.png";
import swiftGlobe from "../assets/images/swiftGlobe.png";

import blueCta from "../assets/images/blueCta.png";
import blueServ from "../assets/images/blueServ.png";
import blueContact from "../assets/images/blueContact.png";

import dissolveBulk from "../assets/images/dissolveBulk.png";
import dissolveSpecies from "../assets/images/dissolveSpecies.png";

import gpMain from "../assets/images/gpMain.png";
import gpData from "../assets/images/gpData.png";

type ProjectData = {
  title: string;
  subheading: string;
  text: string;
  gradient: string[];
  cta?: string;
  href?: string;
  images: string[];
};

const projectData: ProjectData[] = [
  {
    title: "CNN AI Bird Classifier",
    subheading: "University of Reading | 2023",
    text: `Transfer-learned and fine-tuned a CNN model to classify 70 species of campus birds, 
    achieving 80% accuracy using a minimal dataset. Hosted the model on a VPS with a custom API
    which allowed HTTP requests to be sent from a Raspberry Pi camera, classifying the bird and
    uploading the results onto a website.`,
    gradient: ["from-emerald-600", "to-purple-900"],
    cta: "Read report",
    href: "https://docs.google.com/document/d/1ZWefC6GaF2BhPo_irSQ_Z1rPjaxFurQeuxbouVKHZ-E/edit?usp=sharing",
    images: [cnnArch, inceptionArch],
  },
  {
    title: "Ticketeer Scan Mobile App",
    subheading: "Blue202 Labs | 2024",
    text: `Designed the complete UI/UX for Ticketeer Scan, a ticket scanning app. Acted as a senior 
    developer to guide the remote developer team - conducting code reviews, supporting bug 
    fixes and delegating tasks.`,
    gradient: ["from-indigo-900", "to-purple-800"],
    cta: "View on App Store",
    href: "https://apps.apple.com/app/ticketeerscan/id6736955232",
    images: [
      ticketeerImage,
      tickAttendee,
      tickEvent,
      tickLogs,
      tickScan,
      tickEvents,
    ],
  },
  {
    title: "Event WhatsApp API Solutions",
    subheading: "Blue202 Labs | 2024",
    text: `Developed custom WhatsApp API solutions for the leading Egyptian luxury jewellery company 
    and interior design companies. Facilitated automated messaging flows and ticket generation to 1,500+ 
    contacts for exclusive events. Provided a personalised service to clients, 
    managing the entire system and ensuring the delivery of all messages.`,
    gradient: ["from-purple-900", "to-emerald-600"],
    images: [waba, waChat],
  },
  {
    title: "Swift Website & Branding",
    subheading: "Blue202 Labs | 2024",
    text: `Designed and developed a bespoke website for Swift Distribution using React and Next.js. 
    Developed a logo, brand identity and design aesthetic that aligned with the client's target images.
    Provided a complete hosting solution on AWS.`,
    gradient: ["from-emerald-600", "to-purple-900"],
    images: [swiftLogo, swiftCta, swiftGlobe],
    cta: "View Site",
    href: "https://swiftdist.com",
  },
  {
    title: "Blue202 Labs Website",
    subheading: "Blue202 Labs | 2024",
    text: `Sole designer and developer for the Blue202 Labs, writing all of the site content including
    blog posts and copywriting material.`,
    gradient: ["from-indigo-900", "to-purple-800"],
    images: [blueCta, blueServ, blueContact],
    cta: "View Site",
    href: "https://blue202labs.com",
  },
  {
    title: "Dissolve Simulation Software",
    subheading: "STFC | 2024",
    text: `Contributor on Dissolve, a C++ simulation tool for the interrogation of neutron/x-ray scattering data.
    Developed CI/CD build systems to deliver the software on Apple Silicon, wrote documentation, 
    led workshops for students and users and developed error calculation modules.`,
    gradient: ["from-purple-900", "to-emerald-600"],
    images: [dissolveBulk, dissolveSpecies],
    cta: "Read More",
    href: "https://projectdissolve.com",
  },
  {
    title: "GudPy Data Reduction Software",
    subheading: "STFC | 2024",
    text: `Contributed on GudPy, a Python software for data processing and reduction. Refactored the code base, 
    eliminating over 3,000 lines of redundant code while maintaining functionality. Implemented Bayesian Optimisation 
    algorithms to reduce data errors in the processing step by a factor of ten.`,
    gradient: ["from-emerald-600", "to-purple-900"],
    images: [gpMain, gpData],
    cta: "GitHub",
    href: "https://github.com/disorderedmaterials/GudPy",
  },
];

export const Projects = () => {
  const [inFocus, setInFocus] = useState(0);

  const totalProjects = projectData.length;

  const projects = projectData.map((project, index) => {
    const virtualIndex = index % projectData.length;
    return (
      <Project
        key={index}
        id={virtualIndex}
        title={project.title}
        text={project.text}
        gradient={project.gradient}
        cta={project.cta}
        inFocus={inFocus}
        href={project.href}
        images={project.images}
        subheading={project.subheading}
      />
    );
  });

  const handleFocusChange = (direction: "next" | "prev") => {
    setInFocus((prev) => {
      let newFocus = direction === "next" ? prev + 1 : prev - 1;
      if (newFocus < 0) return prev;
      if (newFocus >= totalProjects) {
        newFocus -= totalProjects;
      }
      return newFocus;
    });
  };

  return (
    <section id="projects" className="pt-64 flex flex-col gap-10 md:gap-24">
      <div className="flex flex-col md:flex-row gap-12 md:items-center pl-8 md:pl-0">
        <h3 className="font-mono-text text-5xl">PROJECT SHOWCASE</h3>
        <div className="flex-row gap-6 pr-6 hidden md:flex">
          <button
            name="Previous Item"
            onClick={() => handleFocusChange("prev")}
          >
            <svg
              className="opacity-55 hover:opacity-100 group w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className={
                  inFocus === 0
                    ? "fill-[#6e96c4]"
                    : "fill-[#0077ff] group-hover:fill-[#004cff]"
                }
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
              />
            </svg>
          </button>
          <button name="Next Item" onClick={() => handleFocusChange("next")}>
            <svg
              className="opacity-55 hover:opacity-100 group w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className={
                  inFocus === projectData.length - 1
                    ? "fill-[#6e96c4]"
                    : "fill-[#0077ff] group-hover:fill-[#004cff]"
                }
                d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="no-scrollbar w-full flex flex-row gap-10 overflow-x-scroll md:overflow-x-hidden overflow-y-hidden pb-12">
        {projects}
      </div>
      <div></div>
    </section>
  );
};

export const Project = (props: {
  id: number;
  title: string;
  subheading: string;
  text: string;
  gradient: string[];
  cta?: string;
  inFocus: number;
  href?: string;
  images: string[];
}) => {
  return (
    <article
      key={props.id}
      id={`${props.id}`}
      className={`min-w-[20rem] md:min-w-[60%] min-h-[30rem] md:max-h-[50vh] bg-gradient-to-br ${props.gradient[0]} ${props.gradient[1]} rounded-3xl p-6 md:p-12 w-full justify-between flex flex-col`}
      style={{
        transform: `translateX(-${props.inFocus * 100 + 4 * props.inFocus}%)`,
        //        transform: `translateX(-${inFocus * (340 + 32 * inFocus)}px)`,
        transition: "transform 0.3s ease", // Add a smooth transition
      }}
    >
      <div className="flex flex-col justify-between pb-8 md:items-center md:flex-row">
        <h4 className="text-3xl font-mono-numbers">{props.title}</h4>
        <div className="text-nowrap">{props.subheading}</div>
      </div>
      <div className="flex flex-col gap-6 items-center xl:items-start h-full">
        <div className="h-3/4 flex flex-row gap-2 overflow-x-scroll no-scrollbar">
          {props.images.map((i) => (
            <img
              key={`img-${i}-${props.id}`}
              className="bg-white rounded place-self-center object-cover max-h-[10rem]"
              src={i}
            ></img>
          ))}
        </div>
        <div className="flex flex-col w-full place-self-start h-full justify-between">
          <p className="text-lg md:text-xl font-light">{props.text}</p>
          {props.cta && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.href}
              className="flex gap-2 items-center place-self-end text-lg font-light px-4 py-2 hover:bg-white/20 w-fit rounded cursor-pointer"
            >
              {props.cta}
              {rightArrow}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const rightArrow = (
  <svg
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.7399 8.70711C23.1304 8.31658 23.1304 7.68342 22.7399 7.29289L16.3759 0.928932C15.9854 0.538408 15.3522 0.538408 14.9617 0.928932C14.5712 1.31946 14.5712 1.95262 14.9617 2.34315L20.6186 8L14.9617 13.6569C14.5712 14.0474 14.5712 14.6805 14.9617 15.0711C15.3522 15.4616 15.9854 15.4616 16.3759 15.0711L22.7399 8.70711ZM0 9H22.0328V7H0V9Z"
      fill="white"
    />
  </svg>
);
