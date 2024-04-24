import { FaArrowRight } from "react-icons/fa";

import Button from "../../../components/Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-10 gap-x-4 items-center justify-between mb-120">
      <h1
        className="
          max-w-[500px]
          md:max-w-[600px]
          lg:max-w-[800px]
          lg:text-6xl
          text-5xl
          font-bold
          text-center
          lg:leading-snug
          leading-snug
        "
      >
        Build Your Dream Website with Our Skilled{" "}
        <span className="text-gradient">Development</span> Team
      </h1>
      <p className="text-center max-w-[600px] font-medium">
        Are you looking for a way to close all marketing, technical and customer
        support tasks for your company in one place
      </p>
      <div
        className="
            flex
            items-center
            justify-center
            gap-x-3
            gap-y-3
            md:flex-row
            flex-col
          "
      >
        <Button
          className="
              text-white
              bg-primary
            "
        >
          <p>Get Started</p>
          <FaArrowRight />
        </Button>
        <Button
          className="
              border
              border-black
            "
        >
          Pricing
        </Button>
      </div>
    </div>
  );
};

export default Hero;
