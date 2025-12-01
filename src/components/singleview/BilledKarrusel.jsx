import Image from "next/image";

const BilledKarrusel = ({ billede, item}) => {
  return (
    <div className="">
        <Image
          src={billede.url}
          alt={billede.alt}
          width={1000}
          height={1000}
          className="object-cover rounded-full p-10 max-h-screen"
          />
    </div>
  );
};

export default BilledKarrusel;
