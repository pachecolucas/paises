import List from "./List";
import Form from "./Form";
import { getById, list } from "@/services/pais";

type PropsPaises = {
  id?: number | undefined;
};

export default async function Wrapper({ id }: PropsPaises) {
  const pais = id ? await getById(id) : undefined;
  const paises = await list();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="uppercase font-light tracking-[1em] text-center opacity-30">
        Países
      </h1>
      <List paises={paises} />
      <Form pais={pais} />
    </div>
  );
}
