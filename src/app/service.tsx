"use server";

import { revalidatePath } from "next/cache";
import sql from "./db";
import { FormEvent } from "react";

type Pais = {
  id?: number;
  nome: string;
  abbr: string;
};

export async function list() {
  return await sql`select id, nome, abbr from paises`;
}

export async function add({ id, nome, abbr }: Pais) {
  console.log("server add", { nome, abbr });
  await sql`insert into paises (nome, abbr) values (${nome}, ${abbr})`;
  revalidatePath("/");
}

export async function remove(id: number) {
  console.log("server delete", id);
  await sql`delete from paises where id=${id}`;
  revalidatePath("/");
}
