"use client";

import { Pais, add, update } from "./service";
import { FormEvent } from "react";

type PropsForm = {
  pais?: Pais | undefined;
};

export default function Form({ pais }: PropsForm) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const id = form.cod.value;
    const nome = form.nome.value;
    const abbr = form.abbr.value;
    console.log("handleSubmit...", { id, nome, abbr }, event.target);
    id ? await update({ id, nome, abbr }) : await add({ nome, abbr });
    window.location.replace("/");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <input
        type="hidden"
        name="cod"
        defaultValue={pais?.id}
        className="bg-white p-1 text-black"
      />
      <input
        type="text"
        name="nome"
        defaultValue={pais?.nome}
        className="bg-white p-1 text-black"
      />
      <input
        type="text"
        name="abbr"
        defaultValue={pais?.abbr}
        className="bg-white p-1 text-black"
        maxLength={2}
      />
      <button
        type="submit"
        className="bg-green-500 text-black p-1 hover:bg-green-400 uppercase text-lg font-bold"
      >
        Salvar
      </button>
      <a
        href="/"
        className="bg-slate-800 p-1 text-center text-sm uppercase  font-bold"
      >
        Cancelar
      </a>
    </form>
  );
}
