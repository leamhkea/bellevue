import BellevueStriber from "@/components/global/animationer/BellevueStriber";
import Image from "next/image";
import VandTaarn from "@/components/global/ikoner/VandTaarn";
import ListCard from "@/components/listview/forestillinger/ListCard";
import { createClient } from "@supabase/supabase-js";
import Karrusel from "@/components/global/komponenter/Karrusel";
import { parseDates } from "@/app/utils.js"

  // Supabase client (fungerer som server)
  const supabase = createClient(
    "https://rzwaokiepaobrlrpphia.supabase.co",
  
    // Key som ligger i .env fil
    process.env.SUPABASE_ANON_KEY
  );
  

export default async function Home() {

    // Hent data fra Supabase med navn på tabel
    const { data } = await supabase.from("bellevue_items").select("*");
  
    console.log("Fetched data:", data);

      // const today = new Date();
      // today.setHours(0, 0, 0, 0);
    
      // // Beregner gyldige dato fra funktion i utils
      //   const itemsWithLatestDate = useMemo(
      //     () => parseDates(items, { addLatestDate: true }),
      //     [items]
      //   );
    

  return (
    <div>
      <BellevueStriber>
        <div className="flex flex-col max-w-300 relative left-50 pt-40">
        <h1 className="display bellevueblaa-600 indent-5 moerkblaa-600">Bellevue</h1>

          <div className="flex relative">
          <h1 className="display font-thin flex justify-end koboltblaa-600">Teatret</h1>
            <div className="flex flex-col gap-5 mt-30 -order-1">
              <p className="max-w-120 mt-10 italic text-lg">
                “I 1937 opførtes Bellevue Teatret tæt på Bellavista af Arne Jacobsen. Teaterbygningens indgangsfacade med to cirkulære trappetårne er vendt mod Strandvejen. En indretning med lette materialer, der emmer af sommer, hvilket understreges af taget, der kan skydes til side.”</p>
                <p className="italic">Dansk arkitektur center</p>
            </div>
            <VandTaarn className="left-250 -top-30 w-40 opacity-20"/>
          </div>
        <div className="flex justify-end p-10">
          <Image
          src={"/bellevue-salen.webp"}
          alt="Bellevue Teatret"
          width={500}
          height={500}
          className="object-cover rounded-lg mt-10 relative bottom-25"
          />
        </div>
        </div>
      </BellevueStriber>

        <section>
      <ul>
      {data.map((item)=>(

              <ListCard key={item.id} item={item}/>
      ))}
      </ul>

        </section>


    </div>
  );
}
