"use client";
import Image from "next/image";

export default function SingleCard({ item }) {
  if (!item) return <p>Item ikke fundet</p>;

  return (
    <article className="max-w-3xl mx-auto p-6">
      {item.image?.[0]?.url && (
        <Image
          src={item.image[0].url}
          alt={item.image[0].alt || item.name}
          width={1200}
          height={600}
          className="object-cover rounded-lg mb-6"
        />
      )}
      <h1>hallo</h1>
      <h1>{item.id}</h1>
      <h1>{item.name}</h1>
    </article>
  );
}

// const SingleCard = ({ item }) => {
//   if (!item) return <p>fejl...</p>;
//   return (
//     <div>
//       <h1>hallo</h1>
//       <h1>{item.id}</h1>
//       <h1>{item.name}</h1>
//     </div>
//   );
// };

// export default SingleCard;
