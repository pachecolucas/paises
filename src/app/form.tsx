"use client";

import { Pais, add, update } from "./service";
import { FormEvent } from "react";
import { revalidatePath } from "next/cache";

type PropsForm = {
  pais?: Pais | undefined;
};

export default function Form({ pais }: PropsForm) {
  console.log("Form", pais);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const id = form.cod.value;
    const nome = form.nome.value;
    const abbr = form.abbr.value;
    console.log("handleSubmit...", { id, nome, abbr }, event.target);
    id ? await update({ id, nome, abbr }) : await add({ nome, abbr });
    form.reset();
    revalidatePath("/teste");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <input
        type="text"
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
        className="bg-green-500 text-black p-1 hover:bg-green-400"
      >
        Add
      </button>
    </form>
  );
}
