import ListFilterClient from "./ListFilterClient";

export default async function ListFilterServer() {
  const res = await fetch("https://api.example.com/items");
  const items = await res.json();

  return <ListFilterClient items={items} />;
}
