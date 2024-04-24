import { GiHamburgerMenu } from "react-icons/gi";

import Button from "./Button";

const menuLinks = [
  "Home",
  "Services",
  "Expertise",
  "Cases",
  "Pricing",
  "Company",
];
function Header() {
  return (
    <header className="pt-[30px] mb-11">
      <div className="max-w-[1260px] mx-auto px-5 flex items-center justify-between">
        <a href="/" className="font-semibold text-xl flex items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="MicPro"
            className="w-[36px] h-[36px]"
          ></img>
          <span>MicPro</span>
        </a>
        <ul className="hidden lg:flex items-center justify-center gap-10">
          {menuLinks.map((link) => (
            <li key={link}>
              <a href={"#"} className="font-medium">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden cursor-pointer">
          <GiHamburgerMenu size={30} />
        </div>
        <Button className="hidden lg:flex font-medium leading-normal py-[18px] px-[50px] rounded-full text-white bg-primary">
          Start a Project
        </Button>
      </div>
    </header>
  );
}

export default Header;
