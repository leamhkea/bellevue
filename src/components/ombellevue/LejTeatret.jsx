import Image from "next/image";
import AnchorTagPrimaryButton from "../global/knapper/AnchorTagPrimaryButton";

const LejTeatret = () => {
  return (
    <section className="bg-(--beige-100) py-20 grid gap-20 items-center lg:grid-cols-[2fr_1fr]">
      {/* ======================= CONTAINER FOR VENSTRE INDHOLD ======================== */}
      <div className="flex flex-col gap-12">
        {/* HEADING + TEKST */}
        <div className="pb-16">
          <h2 className="pb-8">Lej teatret</h2>
          <p>Skab en uforglemmelig fest i Bellevue Teatrets ikoniske rammer.</p>
        </div>

        {/* IKONER + GULE TEKSTBOKSE */}
        <div className="flex flex-col gap-16 items-stretch sm:flex-row sm:justify-between sm:gap-8">
          {/* PARKERING */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/parking.svg" alt="" width={100} height={100} />
            </div>
            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
              Gratis, ubegrænset parkering
            </p>
          </div>

          {/* STOL */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/chair.svg" alt="" width={80} height={80} />
            </div>

            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
              742 siddepladser
            </p>
          </div>

          {/* CATERING */}
          <div className="relative flex-1">
            <div className="absolute -top-16 left-6">
              <Image src="/svg/catering.svg" alt="" width={100} height={100} />
            </div>

            <p className="highlighttext bg-(--gul-600) rounded-2xl px-6 py-10 h-full flex items-center justify-center text-center">
              Catering, teknik og underholdning
            </p>
          </div>
        </div>

        {/* TEKSTER OM LEJ TEATER + BUTTON */}
        <div className="flex flex-col gap-4">
          <p>
            Med Arne Jacobsens smukke arkitektur, beliggenheden mellem strand og
            skov og en sal med 742 pladser, får jeres arrangement en stemning,
            der løfter enhver begivenhed.
          </p>
          <p>
            Uanset om I planlægger firmafest, jubilæum, privat fejring eller et
            større show, tilbyder vi fleksible løsninger med catering, teknik og
            professionel support - så I trygt kan fokusere på gæsterne.
          </p>
          <p>
            Her får jeres fest ikke bare et sted at være, men en scene at stråle
            på.
          </p>
          <div className="self-center pt-8">
            <AnchorTagPrimaryButton href={`mailto:adm@bellevueteatret.dk`}>
              Kontakt os
            </AnchorTagPrimaryButton>
          </div>
        </div>
      </div>

      {/* ======================= CONTAINER FOR HØJRE INDHOLD ========================== */}
      <div className="flex flex-col gap-6  md:flex-row lg:flex-col">
        <Image
          src="/images/lejteatret1.webp"
          alt=""
          width={800}
          height={200}
          className="rounded-xl"
        />
        <Image
          src="/images/lejteatret2.webp"
          alt=""
          width={800}
          height={200}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default LejTeatret;
