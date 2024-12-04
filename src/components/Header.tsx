import { useEffect, useState } from "react";
import homeIcon from "../assets/icons/home.svg";
import sandwich from "../assets/icons/sandwich.svg";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const handleAnimationEnd = () => {
      if (isMobile) {
        const mobileNav = document.querySelector<HTMLElement>("#mobileNav")!;
        if (
          mobileNav.classList.contains("flex") &&
          mobileNav.classList.contains("animate-slide-up")
        ) {
          mobileNav.classList.replace("flex", "hidden");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    if (isMobile) {
      const mobileNav = document.querySelector<HTMLElement>("#mobileNav")!;
      mobileNav.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50">
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};

//      <HeaderMobile />

const revealMenu = () => {
  const mobileNav = document.querySelector<HTMLElement>("#mobileNav")!;
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.replace("animate-slide-up", "animate-slide-down");
    mobileNav.classList.replace("hidden", "flex");
  } else {
    mobileNav.classList.replace("animate-slide-down", "animate-slide-up");
  }
};

const HeaderMobile = () => {
  return (
    <div className="top-0 absolute w-svw bg-gradient-to-b from-background from-40%">
      <div onClick={revealMenu} className="p-10">
        <img src={sandwich} width={40}></img>
      </div>
      <nav
        id="mobileNav"
        className="hidden w-full flex-col text-white text-lg font-extralight items-center animate-slide-down bg-gradient-to-b from-background from-40% h-screen"
      >
        <a
          href="#hero"
          className="w-48 h-24 flex items-center border-b border-neutral-800"
        >
          <img alt="Home icon" src={homeIcon} width={30} className="mx-auto" />
        </a>
        <a
          href="#about"
          className="w-48 h-24 flex flex-row justify-center items-center border-b border-neutral-800"
        >
          about.js
        </a>
        <a
          href="#skills"
          className="w-48 h-24 flex flex-row justify-center items-center border-b border-neutral-800"
        >
          skill.py
        </a>
        <a
          href="#projects"
          className="w-48 h-24 flex flex-row justify-center items-center border-b border-neutral-800"
        >
          projects.cs
        </a>
        <a
          href="#featured"
          className="w-48 h-24 flex flex-row justify-center items-center border-b border-neutral-800"
        >
          featured.sol
        </a>
        <a
          href="#experience"
          className="w-48 h-24 flex flex-row justify-center items-center"
        >
          experience.cpp
        </a>
      </nav>
    </div>
  );
};

const HeaderDesktop = () => {
  return (
    <div className="hidden fixed sm:flex bg-background-darker w-full flex-col">
      <nav className="max-w-[1550px] mx-auto w-full flex flex-row text-white text-lg font-extralight">
        <a href="#hero" className="w-48 bg-background h-24 flex items-center">
          <img alt="Home icon" src={homeIcon} width={30} className="mx-auto" />
        </a>
        <a
          href="#about"
          className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800"
        >
          about.js
        </a>
        <a
          href="#skills"
          className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800"
        >
          skill.py
        </a>
        <a
          href="#projects"
          className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800"
        >
          projects.cs
        </a>
        <a
          href="#featured"
          className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800"
        >
          featured.sol
        </a>
        <a
          href="#experience"
          className="w-48 h-24 flex flex-row justify-center items-center"
        >
          experience.cpp
        </a>
      </nav>
      <div className="bg-background w-full h-6"></div>
    </div>
  );
};
