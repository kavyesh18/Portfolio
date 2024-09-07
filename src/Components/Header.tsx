import { IconHexagonLetterK } from "@tabler/icons-react";
import Sidebar from "./Sidebar";

const links = ["About", "Works", "Experience", "Skills", "Contact"];

const navlinks = (col: boolean) => {
  return links.map((link, index) => (
    <a
      key={link}
      className={`${col ? 'flex flex-col items-center' : ''} text-primaryColor hover:text-textColor text-lg`}
      href={`#${link}`}
    >
      <span className="text-primaryColor">0{index + 1}. </span>{link}
    </a>
  ));
}

const Header = () => {
  return (
    <nav className="flex px-10 bg-bgcolor h-[18vh] dm-mono-regular justify-between items-center">
      <IconHexagonLetterK size={60} color="#64FFDA" stroke={1.2} />
      <div className="hidden md:flex gap-8">
        {navlinks(false)}
      </div>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </nav>
  );
};

export default Header;
export { navlinks };
