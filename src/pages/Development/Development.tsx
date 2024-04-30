import ConentWrapper from "../../components/ContentWrapper";
import Budget from "./modules/Budget";
import Expertise from "./modules/Expertise";
import Features from "./modules/Features";
import Hero from "./modules/Hero";
import Work from "./modules/Work";

const Development = () => {
  return (
    <section className="mb-100">
      <ConentWrapper>
        <Hero />
        <Features />
        <Work />
        <Expertise />
        <Budget />
      </ConentWrapper>
    </section>
  );
};

export default Development;
