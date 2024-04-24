import ConentWrapper from "../../components/ContentWrapper";
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
      </ConentWrapper>
    </section>
  );
};

export default Development;
