export const Hero = () => {
  return (
    <section className="relative flex flex-row pt-20">
      <div className="flex flex-row w-full gap-10">
        <div className="flex flex-col text-6xl font-thin gap-8 items-end">
          <p className="text-[#15141B]">8</p>
          <p className="text-[#242433]">9</p>
          <p className="text-[#373446]">10</p>
          <p className="text-[#242433]">11</p>
          <p className="text-[#15141B]">12</p>
        </div>
        <div className="h-full w-full flex flex-col justify-center">
          <h1 className="pl-8 py-5 font-light text-7xl w-full bg-foreground">
            Hi, I'm Noella
          </h1>
        </div>
      </div>
    </section>
  );
};
