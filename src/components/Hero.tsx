import { useState } from "react";
import { useTypingEffect } from "../hooks/typing";

export const Hero = () => {
  const text = useTypingEffect("Hi, I'm Noella.", 200);
  const [caret, setCaret] = useState("border-r-[0.35rem]");

  if (text == "Hi, I'm Noella.") {
    setTimeout(() => {
      caret == "border-r-[0.35rem]"
        ? setCaret("border-0")
        : setCaret("border-r-[0.35rem]");
    }, 530);
  }

  return (
    <section
      id="hero"
      className="relative w-full scroll-m-36 md:w-[1000px] xl:w-[1440px] mx-auto h-min grid"
    >
      <div className="h-full col-start-1 row-start-1">
        <div className="sticky top-0 md:top-24 z-40 h-screen flex flex-col">
          <div className="bg-gradient-to-b from-background from-5% h-64 md:h-[22rem]"></div>
          <div className="h-[calc(theme(space.36))]"></div>
          <div className="bg-gradient-to-t from-background h-16 md:h-[22rem]"></div>
          <div className="bg-background grow"></div>
        </div>
      </div>
      <div className="flex flex-row w-full gap-1 md:gap-10 pt-72 md:pt-48 col-start-1 row-start-1">
        <div className="hidden md:flex flex-col text-xl md:text-4xl xl:text-6xl text-[#373446] gap-2 md:gap-[2.15rem] items-end font-mono-numbers">
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
        <div className="h-full w-full flex flex-col md:mt-[22rem] xl:mt-64 min-h-[140vh]">
          <div className="pl-8 py-5 w-full bg-foreground md:h-22 xl:h-28">
            <h1
              className={
                "font-mono-text text-2xl md:text-4xl xl:text-7xl w-fit tracking-wide " +
                caret
              }
            >
              {text}
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="md:hidden pt-[2.3rem] pl-2 flex flex-col text-lg text-[#373446] gap-[0.032rem] items-end font-mono-numbers">
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
            <div
              className="mt-[24rem] md:mt-[22.4rem] xl:mt-[23rem] pl-8 py-6 w-full font-extralight font-mono-text text-xl
            md:text-4xl xl:text-5xl 
            flex flex-col md:gap-[2.15rem] xl:gap-[2.9rem]"
            >
              <p>I'm a:</p>
              <p className="text-slate-600">&#60;ul&#62;</p>
              <p>
                &nbsp;&nbsp;<span className="text-slate-600">&#60;li&#62;</span>
                product-focused
                {window.innerWidth < 640 && (
                  <span>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                )}{" "}
                engineer.
                <span className="text-slate-600">&#60;li&#62;</span>
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-slate-600">&#60;li&#62;</span>
                web developer.
                <span className="text-slate-600">&#60;li&#62;</span>
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-slate-600">&#60;li&#62;</span>
                creative{" "}
                {window.innerWidth < 640 && (
                  <span>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                )}{" "}
                designer.
                <span className="text-slate-600">&#60;li&#62;</span>
              </p>
              <p className="text-slate-600">&#60;&#47;ul&#62;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
