import { list, remove } from "./service";
import { XCircle as TrashIcon } from "lucide-react";

export default async function Lista() {
  const paises = await list();

  async function handleRemove(form: FormData) {
    "use server";
    const id = parseInt(form.get("id") as string);
    await remove(id);
  }

  return (
    <ul className="flex flex-col gap-1">
      {paises.map((p) => (
        <li
          key={p.id}
          className="flex gap-2 bg-slate-700 rounded-full overflow-hidden"
        >
          <div className="p-1 pl-5 pr-4 bg-slate-500 items-stretch">{p.id}</div>
          <div className="p-1 opacity-50 bold font-bold">{p.abbr}</div>
          <div className="py-1 flex-1">{p.nome}</div>
          <div className="p-1 bg-red-400 flex">
            <form action={handleRemove}>
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
