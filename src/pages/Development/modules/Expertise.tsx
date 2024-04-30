import { FaCheckCircle } from "react-icons/fa";
import Header2 from "../../../components/Header2";
import { expertiseList } from "../../../constant/ExpertiseList";
import { twMerge } from "tailwind-merge";
function CoreItem({
  icon,
  title = "High-quality motion design",
  color,
}: {
  icon: React.ReactNode;
  title?: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={twMerge(`w-5 h-5 flex-shrink-0`, color)}>{icon}</span>
      <p className="text-black leading-normal">{title}</p>
    </div>
  );
}
const Expertise = () => {
  return (
    <div
      className="
            bg-grayf1
             pt-[70px] px-12 pb-8
             mb-120
             flex
             flex-col
             items-center
             gap-y-10
          "
    >
      <Header2 className="max-w-[810px]">
        Explore our core <span className="text-primary">Expertise</span>
      </Header2>
      <p className="text-center max-w-[700px]">
        We produce beautiful and engaging websites. Our team is mostly
        experienced in the design of stunning interfaces, e-commerce and
        marketing website development, ready to work with you on your project!
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {expertiseList.map((item, index) => (
          <div className="bg-white rounded-xl py-6 px-8" key={index}>
            <h4 className="font-bold text-xl pb-5 border-b border-b-grayf2 mb-6">
              {item.title}
            </h4>
            <div className="flex flex-col gap-4">
              {item.features.map((feature, index) => (
                <CoreItem
                  icon={<FaCheckCircle />}
                  key={index}
                  title={feature}
                  color={item.color}
                ></CoreItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
