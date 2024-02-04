import homeIcon from "../assets/icons/home.svg";

export const Header = () => {
  return (
    <header className="fixed z-50 bg-background-darker w-full">
      <nav className="max-w-[1550px] mx-auto w-full flex flex-row text-white text-lg font-extralight">
        <div className="w-48 bg-background h-24 flex items-center"><img alt="Home icon" src={homeIcon} width={30} className="mx-auto" /></div>
        <div className="w-48 h-24 flex flex-row justify-center items-center border-r border-neutral-800">about.js</div>
        <div className="w-48 h-24 flex flex-row justify-center items-center">projects.py</div>
      </nav>
    </header>
  );
}