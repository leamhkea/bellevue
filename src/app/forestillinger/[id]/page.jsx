import SingleCard from "@/components/singleview/SingleCard";
import { createClient } from "@supabase/supabase-js";

// Supabase client
const supabase = createClient(
  "https://rzwaokiepaobrlrpphia.supabase.co",
  process.env.SUPABASE_ANON_KEY
);

export default async function SingleItem({ params }) {
  const { id } = params; // Fanger id fra URL
  console.log("params id:", id);

  // Hent item fra Supabase med id
  const { data, error } = await supabase
    .from("bellevue_items")
    .select("*")
    .eq("id", id)
    .single(); // single() sikrer kun ét object returneres

  if (error) {
    console.error("Supabase error:", error);
    return <p>Der skete en fejl med at hente item.</p>;
  }

  if (!data) return <p>Item ikke fundet</p>;

  console.log("Fetched item:", data);

  return (
    <section>
      <SingleCard {...data} item={data} />
    </section>
  );
}