"use client";
import Image from "next/image";

export default function ListClient({ items = [] }) {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <li>
      {/* Herunder hentes data ind */}
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-(--beige-100) p-10 mb-20 flex justify-between"
          >
            {/* Container VENSTRE */}
            <div className="grid gap-5">
              {/* Container for tid + tag */}
              <div className="w-150">
                <div className="grid grid-cols-2 gap-30">
                  {/* <div className="grid grid-cols-[1fr_5px_1fr] gap-30"> */}
                  <p>{item.date}</p>
                  {/* <p>|</p> */}
                  <p>{item.tags}</p>
                </div>
              </div>

              {/* Container for heading */}
              <h2 className="text-4xl">{item.name}</h2>
            </div>

            {/* Container HØJRE */}
            <div>
              <a
                className="px-9 py-3 rounded-4xl border border-(--bellevueblaa-600) text-(--bellevueblaa-600)"
                href="https://www.ticketmaster.dk/artist/folk-og-rovere-i-kardemommeby-billetter/871667?brand=dk_bellevue&language=da-dk&venueId=305"
                target="_blank"
              >
                Køb billet
              </a>
            </div>
          </div>
        ))}
        {/* <p>{item.description}</p> */}
        {/* {item.image?.[0] && (
              <Image
                src={item.image[0].url}
                alt={item.image[0].alt}
                width={200}
                height={200}
                className="object-cover"
              />
            )} */}
      </div>
    </li>
  );
}
