import { useState } from "react";

export const Contact = () => {
  return (
    <section id="contact" className="font-mono-text pb-96">
      <h3>CONTACT</h3>
      <form
        data-netlify="true"
        className="flex flex-col justify-end h-[30rem] bg-background-darker"
      >
        <div id="name" className="flex flex-row gap-4">
          <label htmlFor="input-name">
            <span className="">Name:</span>
          </label>
          <input
            id="input-name"
            placeholder="> enter your name"
            className="grow bg-background-darker"
            type="text"
            name="input-name"
          />
        </div>
        <div
          id="email"
          className="flex flex-row border-b-white border-b-[1px] gap-4"
        >
          <label htmlFor="input-email">
            <span className="invisible">
              <span className="text-emerald-600">contact@noella</span>:
              <span className="text-blue-600">~</span>
            </span>
            <span className="text-slate-500">$ Email:</span>
          </label>
          <input
            id="input-email"
            className="grow bg-background-darker"
            type="text"
            name="input-email"
            required
          />
        </div>
        <div id="message" className="flex flex-row gap-1">
          <label htmlFor="input-message" className="w-fit pr-2">
            <span className="invisible">
              <span className="text-emerald-600">contact@noella</span>:
              <span className="text-blue-600">~</span>
            </span>
            <span className="text-slate-500">$ Message:</span>
          </label>
          <div className="border-slate-100 border-t border-b grow">
            <textarea
              id="input-message"
              rows={10}
              className="grow bg-background-darker p-3 w-[calc(100%-theme(spacing.6))]"
              name="input-message"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-fit self-end mt-5 opacity-80 hover:opacity-100 hidden"
        >
          submit
        </button>
      </form>
    </section>
  );
};
