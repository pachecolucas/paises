import Lista from "./lista";
import Form from "./form";

export default function Home() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <h1>Países</h1>
      <Lista />
      <Form />
    </div>
  );
}
