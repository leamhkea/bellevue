import Image from "next/image";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const InteraktivtKort = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* =========================== WRAPPER BLÅ CONTAINER ============================ */}
      <div className="bg-(--moerkblaa-600) py-20">
        <section className="flex flex-col gap-8 items-center">
          <h3 className="beige-100">Find din plads - helt enkelt</h3>
          <p className="text-(--beige-100) text-center max-w-xl">
            Gå på opdagelse i vores interaktive kort og se Bellevue Teatrets sal
            hjemmefra. Her kan du nemt orientere dig, finde din plads og få et
            trygt overblik, før du ankommer.
          </p>
        </section>
      </div>

      {/* ============================ INTERAKTIVT KORT ============================= */}
      <section className="flex flex-col gap-8">
        <Image
          src="/bellevue-salen.webp"
          alt=""
          width={2000}
          height={1200}
          className="rounded-xl"
        />

        <div className="flex justify-end">
          <AnchorTagPrimaryButton href={`/om-bellevue`}>
            Læs mere
          </AnchorTagPrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default InteraktivtKort;
