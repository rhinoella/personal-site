import homeIcon from "../assets/icons/home.svg";

export const Header = () => {
  return (
    <header className="fixed z-50 bg-background-darker w-full flex flex-col">
      <nav className="max-w-[1550px] mx-auto w-full flex flex-row text-white text-lg font-extralight">
        <a href="#hero" className="w-48 bg-background h-24 flex items-center"><img alt="Home icon" src={homeIcon} width={30} className="mx-auto" /></a>
        <a href="#about" className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800">about.js</a>
        <a className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800">skill.py</a>
        <a className="w-48 h-24 flex flex-row justify-center items-center">experience.cpp</a>
      </nav>
      <div className="bg-background w-full h-6"></div>
    </header>
  );
}