import Lista from "./lista";
import Form from "./form";
import { getById, list } from "./service";

type PropsPaises = {
  id?: number | undefined;
};

export default async function Paises({ id }: PropsPaises) {
  const pais = id ? await getById(id) : undefined;
  const paises = await list();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="uppercase font-light tracking-[1em] text-center opacity-30">
        Países
      </h1>
      <Lista paises={paises} />
      <Form pais={pais} />
    </div>
  );
}
