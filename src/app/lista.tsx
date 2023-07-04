import sql from "./db";

export default async function Lista() {
  const paises = await sql`select id, nome, abbr from paises`;

  console.log(paises);

  return (
    <ul>
      {paises.map((p) => (
        <li key={p.id}>
          {p.id} - {p.nome} ({p.abbr})
        </li>
      ))}
    </ul>
  );
}
