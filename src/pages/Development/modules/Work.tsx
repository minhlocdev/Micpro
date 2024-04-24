import Header2 from "../../../components/Header2";

const Works = [
  {
    subtitle: "Mobile app, Weather, Software",
    title: "Weather App UI Kit - WETHY",
    description:
      "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
    image: "weather",
  },
  {
    subtitle: "Web Design, Video call, Software",
    title: "Video Calling Website - Jabber ",
    description:
      "WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS screens and applying them to any weather app.",
    image: "videocall",
  },
  {
    subtitle: "Web app, Software, Car Dashbord",
    title: "Car Dashboard UI Kit Design ",
    description:
      "Motiv. is a Free Car Dashboard UI Kit Design of 20+ Free pixel-perfect screens and 60+ Components easy to use in Figma. ",
    image: "dashboard",
  },
  {
    subtitle: "Web Design, Software",
    title: "Video Editing Website - Revise ",
    description:
      "Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user.",
    image: "editvideo",
  },
];

const Work = () => {
  return (
    <section className="main-container pb-[120px]">
      <Header2 className="mb-[100px]">
        Our Team’s <span className="text-primary">Work</span>
      </Header2>
      <div className="flex flex-col gap-[100px]">
        {Works.map((item, index) => (
          <div
            className="flex items-center odd:gap-[104px] even:gap-[70px] even:flex-row-reverse even:text-right group"
            key={index}
          >
            <div>
              <div className="text-dark1 mb-4 flex items-start gap-2 group-even:justify-end">
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
              ></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
