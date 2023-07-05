import Lista from "./lista";
import Form from "./form";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-2 container mx-auto">
      <h1 className="uppercase font-light tracking-[1em] text-center opacity-30">
        Países
      </h1>
      <Lista />
      <Form />
    </div>
  );
}
