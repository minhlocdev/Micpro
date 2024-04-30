import Header2 from "../../../components/Header2";
import { Works } from "../../../constant/WorkList";

const Work = () => {
  return (
    <div className="pb-[120px]">
      <Header2 className="mb-[100px]">
        Our Team’s <span className="text-primary">Work</span>
      </Header2>
      <div className="flex flex-col gap-[100px]">
        {Works.map((item, index) => (
          <div
            className="
              flex items-center 
              text-left
              flex-col 
              odd:gap-[104px] 
              even:gap-[70px]
              md:flex-row
              md:even:flex-row-reverse 
              md:even:text-right group
            "
            key={index}
          >
            <div>
              <div className="text-dark1 mb-4">
                <span>{item.subtitle}</span>
              </div>
              <h3 className="font-bold text-[34px] mb-8">{item.title}</h3>
              <p className="text-gray17 text-lg leading-normal mb-10 font-poppins">
                {item.description}
              </p>
              <a href="#" className="text-lg uppercase tracking-[10px]">
                <span className="block mb-4">VIEW PORTFOLIO</span>
                <div className="w-2/4 h-1 bg-gradientPink group-even:ml-auto"></div>
              </a>
            </div>
            <div className="w-full max-w-[700px] flex-shrink-0">
              <img
                src={`/images/${item.image}.png`}
                alt=""
                className="object-cover w-[700px] h-[585]"
                width={700}
                height={585}
                loading="lazy"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
