"use server";

import { revalidatePath } from "next/cache";
import sql from "./db";
import { FormEvent } from "react";

export type Pais = {
  id?: number;
  nome: string;
  abbr: string;
};

export async function getById(id: number): Promise<Pais> {
  const row = await sql`select id, nome, abbr from paises where id=${id}`;
  return row.pop() as Pais;
}

export async function list(): Promise<Pais[]> {
  return await sql`select id, nome, abbr from paises order by nome`;
}

export async function add({ nome, abbr }: Pais) {
  console.log("server add", { nome, abbr });
  await sql`insert into paises (nome, abbr) values (${nome}, ${abbr})`;
}

export async function remove(id: number) {
  console.log("server delete", id);
  await sql`delete from paises where id=${id}`;
  revalidatePath("/");
}

export async function update({ id, nome, abbr }: Pais) {
  console.log("server upadte", { id, nome, abbr });
  const _id = id ?? 0;
  await sql`update paises set nome=${nome}, abbr=${abbr} where id=${_id}`;
}
