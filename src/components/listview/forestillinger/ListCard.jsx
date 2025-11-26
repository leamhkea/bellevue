"use client";
import Image from "next/image";


export default function ListClient({ items = [] }) {
  if (!items.length) return <p>Ingen items fundet</p>;

  return (
    <div >
      <h1>Bellevue_tems fra tabel testside</h1>

      {/* Herunder hentes data ind  rounded-xl shadow-blue-100*/}
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <div className="rounded-xl border-b-4 border-l-4 border-blue-100">
            {item.image?.[0] && (
              <Image
                src={item.image[0].url}
                alt={item.image[0].alt}
                width={200}
                height={200}
                className="object-cover rounded-xl"
              />
            )}
            <h2 className="--moerkblaa-600 font-bold ">{item.name}</h2>
            <p className="--moerkblaa-600 font-light">Pris: {item.price} kr</p>
            <p className="--moerkblaa-600 font-light">{item.description}</p>

            </div>

            <p>Tags: {item.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
