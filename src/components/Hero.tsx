import { useState } from "react";
import { useTypingEffect } from "../hooks/typing";

export const Hero = () => {

  const text = useTypingEffect("Hi, I'm Noella.", 200);
  const [caret, setCaret] = useState("border-r-[0.35rem]");

  if (text == "Hi, I'm Noella.") {
    setTimeout(() => {
      caret == "border-r-[0.35rem]"? setCaret("border-0") : setCaret("border-r-[0.35rem]");
    }, 530);
  }

  const handleScroll = (e: React.BaseSyntheticEvent) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;  
    console.log(e.target.scrollHeight - e.target.scrollTop);
  
    if (bottom) {
      console.log(e.target.scrollHeight - e.target.scrollTop)
    }
  }


  return (
    <section className="relative w-full" onScroll={handleScroll}>
      <div className="absolute z-40 h-full w-full bg-fixed bg-gradient-to-b from-background via-transparent via-[36%] to-[60%] to-background"></div>
      <div className="flex flex-row w-full gap-10 pt-20">
        <div className="flex flex-col text-6xl text-[#373446] gap-[2.15rem] items-end font-mono-numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>            
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
        </div>
        <div className="h-full w-full flex flex-col mt-64">
          <div className="pl-8 py-5 w-full bg-foreground h-28">
            <h1 className={"font-mono-text text-7xl w-fit tracking-wide " + caret}>
              {text}
            </h1>
          </div>
          <div className="mt-[22.5rem] pl-8 py-6 w-full font-extralight font-mono-text text-6xl flex flex-col gap-[2.2rem]">
              <p>I'm a:</p>
              <p className="text-slate-600">&#60;ul&#62;</p>
              <p>&nbsp;&nbsp;<span className="text-slate-600">&#60;li&#62;</span>product-focused engineer.<span className="text-slate-600">&#60;li&#62;</span></p>
              <p>&nbsp;&nbsp;<span className="text-slate-600">&#60;li&#62;</span>web developer.<span className="text-slate-600">&#60;li&#62;</span></p>
              <p>&nbsp;&nbsp;<span className="text-slate-600">&#60;li&#62;</span>creative designer.<span className="text-slate-600">&#60;li&#62;</span></p>
              <p className="text-slate-600">&#60;&#47;ul&#62;</p>
          </div>
        </div>
      </div>
      <div className="fixed mt-96 z-40 flex flex-col w-full">
        <div className="h-40 w-full bg-gradient-to-t opacity-80 from-background"></div>
        <div className="bg-background h-[34rem] w-full"></div>
      </div>
    </section>
  );
};
