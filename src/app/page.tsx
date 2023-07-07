import Pais from "./entities/Pais";

export default function Home({ searchParams }: any) {
  const id = searchParams.id ?? undefined;

  return (
    <div className="p-4 flex-col gap-2 container mx-auto">
      <Pais id={id} />
    </div>
  );
}
