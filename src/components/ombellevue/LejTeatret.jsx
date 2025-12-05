import Parking from "../global/ikoner/Parking";
import Chair from "../global/ikoner/Chair";
import Catering from "../global/ikoner/Catering";

const LejTeatret = () => {
  return (
    <section>
      {/* ======================= CONTAINER FOR VENSTRE INDHOLD ======================== */}
      <div>
        <h2>Lej teatret</h2>
        <p>Skab en uforglemmelig fest i Bellevue Teatrets ikoniske rammer.</p>

        {/* IKONER + GULE TEKSTBOKSE */}
        <div className="flex justify-between">
          <div>
            <Parking size={90} />
            <p className="highlighttext bg-(--gul-600) p-6 rounded-2xl">
              Gratis, ubegrænset parkering
            </p>
          </div>
          <div>
            <Chair size={90} />
            <p className="highlighttext bg-(--gul-600) p-6 rounded-2xl">
              742 siddepladser
            </p>
          </div>
          <div>
            <Catering size={90} />
            <p className="highlighttext bg-(--gul-600) p-6 rounded-2xl">
              Catering, teknik og underholdning
            </p>
          </div>
        </div>
      </div>
      {/* ======================= CONTAINER FOR HØJRE INDHOLD ========================== */}
      <div></div>
    </section>
  );
};

export default LejTeatret;
