import BellevueStriber from "@/components/global/animationer/BellevueStriber";

const HeroVenner = () => (
  <div>
    <div className=" max-h-[900px]">
      <BellevueStriber>
        <div className=" pt-50 pb-20 sm:px-10 md:px-20">
          <div>
            <h1>VENNE LOGO</h1>
          </div>
          <section>
            <div className="grid grid-cols-3 gap-3 font-bold text-(--roed-600) text-center">
              <p className="bg-(--gul-600) p-8 rounded-2xl">Gratis Billetter</p>
              <p className="bg-(--gul-600) p-8 rounded-2xl">
                Eksklusive arrengementer
              </p>
              <p className="bg-(--gul-600) p-8 rounded-2xl ">
                12 måneders medlemsskab
              </p>
            </div>
          </section>
        </div>
      </BellevueStriber>
    </div>
  </div>
);

export default HeroVenner;
