import Intro from "./Intro";
import RundvisningInfo from "./RundvisningInfo";
import BilledeSektion from "./BilledeSektion";

const OmSamlet = () => {
  return (
    <section className="flex flex-col gap-30 mb-30">
      <Intro />
      <RundvisningInfo />
      <BilledeSektion />
    </section>
  );
};

export default OmSamlet;
