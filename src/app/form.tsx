"use client";

import { add } from "./service";
import { FormEvent } from "react";

export default function Form() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nome = form.nome.value;
    const abbr = form.abbr.value;
    console.log("handleSubmit...", { nome, abbr }, event.target);
    await add({ nome, abbr });
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <input type="text" name="nome" className="bg-white p-1 text-black" />
      <input
        type="text"
        name="abbr"
        className="bg-white p-1 text-black"
        maxLength={2}
      />
      <button
        type="submit"
        className="bg-green-500 text-black p-1 hover:bg-green-400"
      >
        Add
      </button>
    </form>
  );
}
