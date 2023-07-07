"use client";

import { Pais, add, update } from "@/services/pais";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
      <Input type="hidden" name="cod" defaultValue={pais?.id} />
      <Input
        type="text"
        name="nome"
        placeholder="Nome do país"
        defaultValue={pais?.nome}
      />
      <Input
        type="text"
        name="abbr"
        placeholder="Abreviação"
        defaultValue={pais?.abbr}
        maxLength={2}
      />
      <Button type="submit">Salvar</Button>
      <Button asChild variant="secondary" size="sm">
        <Link href="/">Cancelar</Link>
      </Button>
    </form>
  );
}
