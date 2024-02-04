import { BaseSyntheticEvent, useState } from "react";
import { useDeleteEffect, useTypingEffect } from "../hooks/typing";
import webGraphic from "../assets/icons/web.svg";

type SkillMap = { id: string; index: number; row: number; title: string; img: string; desc: string; skills: string[] };

let skillData: SkillMap[] = [{
  id: "skill-1",
  index: 0,
  row: 1,
  title: "Web Development",
  img: webGraphic,
  desc: "Passionate about UI/UX design and crafting engaging user experiences.",
  skills: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "TailwindCSS", "Adobe Illustrator"]
},
{
  id: "skill-2",
  index: 1,
  row: 1,
  title: "Desktop Development",
  img: "",
  desc: "Experienced in developing industrially-applied desktop applications.",
  skills: []
},
{
  id: "skill-3",
  index: 2,
  row: 2,
  title: "Machine Learning",
  img: "",
  desc: "",
  skills: []
},
{
  id: "skill-4",
  index: 3,
  row: 2,
  title: "DApps",
  img: "",
  desc: "",
  skills: []
}]

export const Skills = () => {
  const expand = (event: BaseSyntheticEvent) => {
    let target = event.currentTarget as HTMLElement;
    let skillRow = target.parentElement!;

    target.querySelector<HTMLDivElement>(`.${target.id}`)!.classList.replace("invisible", "visible");

   Array.from(skillRow.children).forEach((skill, index) => {
    skill.classList.replace("h-32", "h-[40rem]");
      if(skill.id != target.id) {
        let titleElement = skill.querySelector<HTMLParagraphElement>(".title")!;
        // If index is first the title will move in the left direction
        let sign = (index == 0) ? "-" : "";
        titleElement.classList.replace("ease-out", "ease-in");
        titleElement.style.transform = `translateX(${sign}50rem)`;
        skill.classList.replace("w-1/2", "w-52");
      }
    })
  }

  const shrink = (event: BaseSyntheticEvent) => {
    let target = event.currentTarget as HTMLElement;
    let skillRow = target.parentElement!;

    setTimeout(() => {
      target.querySelector<HTMLDivElement>(`.${target.id}`)!.classList.replace("visible", "invisible")
    }, 200);

    Array.from(skillRow.children).forEach((skill, index) => {
      skill.classList.replace("w-52", "w-1/2");
      skill.classList.replace("h-[40rem]", "h-32");
      let titleElement = skill.querySelector<HTMLParagraphElement>(".title")!;
      // If index is one the title will move in the left direction
      titleElement.classList.replace("ease-in", "ease-out");
      titleElement.style.transform = "";
    })
  }

  const list = skillData.map((skill: SkillMap) => {
    return (
      <div 
        key={skill.id}
        id={skill.id}
        data-index={skill.index}
        onMouseEnter={expand}
        onMouseLeave={shrink}
        className={`transition-[width,height] ease-out duration-300 overflow-hidden w-1/2 hover:w-5/6 
                    p-10 bg-foreground text-white rounded-3xl h-32`}>
          <p className="title relative z-40 w-full font-mono-text bg-foreground transition-transform duration-200 ease-in h-28 text-4xl overflow-hidden whitespace-nowrap">{skill.title}</p>
          <p className="emoji absolute z-30 mt-[-6.8rem] text-4xl font-mono-numbers font-thin">(&gt;﹏&lt;)</p>
          <div className={`${skill.id} flex flex-col gap-20 invisible transition-transform duration-300`}>
            <div className="relative flex flex-row justify-between pl-20 w-[65rem]">
              <p className={"text-3xl font-mono-numbers w-[40rem]"}>
                {skill.desc}
              </p>
              <img src={skill.img} width={200} />   
            </div>
            <div className="flex flex-row flex-wrap gap-4 mx-20 w-[60rem]">
              {skill.skills.map((skillName) => skillBubble({ skillName: skillName }))}
            </div>
          </div>
      </div>
    );
  });

  return (
    <div className="h-screen pt-64 w-full">
      <h2 className="text-8xl font-mono-text border-b-2">SKILLS</h2>
      <div id="row-1" className="pt-14 flex flex-row gap-10">
        {list.slice(0, 2)}
      </div>
      <div id="row-2" className="pt-14 flex flex-row gap-10">
        {list.slice(2, 4)}
      </div>
    </div>
  );
}

const skillBubble = (props: {skillName: string}) => {
  return(
    <div className="from-sky-500 bg-gradient-to-br to-blue-600 text-white text-xl py-5 px-10 rounded-xl h-fit text-center min-w-44">
      {props.skillName}
    </div>
  );
}