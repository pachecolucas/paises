import { list, remove } from "./service";
import { X as TrashIcon } from "lucide-react";

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
          <div className="w-10 bg-slate-500 text-center flex justify-center">
            <div className="self-center">{p.id}</div>
          </div>
          <div className="opacity-50 bold font-bold flex self-center">
            {p.abbr}
          </div>
          <div className="flex-1 flex self-center">{p.nome}</div>
          <div className="p-1 pr-2 bg-red-400 flex">
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
