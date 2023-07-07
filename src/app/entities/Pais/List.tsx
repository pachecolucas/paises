"use client";

import { Pais, remove } from "@/services/pais";
import { X as TrashIcon, Edit as EditIcon } from "lucide-react";
import Link from "next/link";

type PropsLista = {
  paises: Pais[];
};

export default function Lista({ paises }: PropsLista) {
  async function handleRemove(form: FormData) {
    if (!confirm("asdasd")) return;
    const id = parseInt(form.get("id") as string);
    await remove(id);
    window.location.replace("/");
  }

  return (
    <ul className="flex flex-col gap-1">
      {paises.map((p) => (
        <li key={p.id} className="group flex rounded-full overflow-hidden">
          <div className="w-10 bg-slate-500 text-center flex justify-center">
            <div className="self-center">{p.id}</div>
          </div>
          <div className="px-2 bold font-bold flex items-center">
            <div className="opacity-50">{p.abbr}</div>
          </div>
          <div className="flex-1 flex items-center">
            <div>{p.nome}</div>
          </div>
          <Link href={`/?id=${p.id}`} className="p-1 px-2">
            <EditIcon />
          </Link>
          <div className="p-1 pr-2 flex">
            <form action={handleRemove} className="flex">
              <input type="hidden" name="id" value={p.id} />
              <button type="submit">
                <TrashIcon />
              </button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  );
}
