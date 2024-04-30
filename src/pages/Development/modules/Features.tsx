import { FaApple, FaSlack } from "react-icons/fa";
import Header2 from "../../../components/Header2";

const Features = () => {
  return (
    <div
      className="
                rounded-t-3xl
                bg-white
                w-full
                pt-[70px] px-12 pb-[120px]
            "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 lg:md-32">
        {Array(4)
          .fill(0)
          .map((index) => (
            <div
              className="bg-white p-8 rounded-xl border border-grayf2 hover:shadow-xl cursor-pointer transition"
              key={index}
            >
              <div className="rounded-full w-[88px] h-[88px] mb-8 bg-gradientPink flex items-center justify-center">
                <FaApple size={40} color="white" />
              </div>
              <h3 className="text-lg font-semibold">
                Discover, Explore the Product
              </h3>
            </div>
          ))}
      </div>
      <Header2 className="max-w-[810px] mb-10">
        More than <span className="text-primary">80,000+</span> companies trust
        Micpro
      </Header2>
      <div className="flex items-center gap-5 justify-between overflow-hidden">
        {Array(5)
          .fill(0)
          .map((index) => (
            <div
              key={index}
              className="text-neutral-400 w-[150px] h-[40] flex items-center gap-x-2"
            >
              <FaSlack size={35} />{" "}
              <span className="text-2xl font-semibold">slack</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Features;
