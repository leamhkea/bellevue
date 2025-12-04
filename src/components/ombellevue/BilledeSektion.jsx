import Image from "next/image";

const BilledeSektion = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* =============================== STORST BILLEDE ================================ */}
      <Image
        src="/images/ombellevue1.png"
        alt=""
        width={2000}
        height={1200}
        className="rounded-xl"
      />

      {/* ============================== TRE BILLEDE GRID =============================== */}
      <div className="grid grid-cols-3 gap-8">
        <Image
          src="/images/ombellevue2.png"
          alt=""
          width={800}
          height={600}
          className="rounded-xl w-full h-auto"
        />
        <Image
          src="/images/ombellevue3.png"
          alt=""
          width={800}
          height={600}
          className="rounded-xl w-full h-auto"
        />
        <Image
          src="/images/ombellevue4.png"
          alt=""
          width={800}
          height={600}
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BilledeSektion;
