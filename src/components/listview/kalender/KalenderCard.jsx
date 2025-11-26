"use client";
import Image from "next/image";

export default function ListClient({ items = [] }) {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <li>
      <h1>Bellevue_tems fra tabel testside</h1>

      {/* Herunder hentes data ind */}
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-(--beige-100) p-10 mb-20 flex justify-between"
          >
            {/* Container VENSTRE */}
            <div>
              {/* Container for tid + tag */}
              <div className="w-100">
                <div className="grid grid-cols-3">
                  <p>{item.date}</p>
                  <p>|</p>
                  <p>{item.tags}</p>
                </div>
              </div>

              {/* Container for heading */}
              <h2>{item.name}</h2>
            </div>

            {/* Container HØJRE */}
            <div>
              <div className="px-12 py-6 border border-(--bellevueblaa-600)">
                <a
                  href="https://www.ticketmaster.dk/artist/folk-og-rovere-i-kardemommeby-billetter/871667?brand=dk_bellevue&language=da-dk&venueId=305"
                  target="_blank"
                >
                  Køb billet
                </a>
              </div>
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
