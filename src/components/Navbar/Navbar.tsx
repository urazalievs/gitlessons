import { dataNavbar } from "./dataNavbar";
import { NabarItem } from "../UI/NabarItem/NabarItem";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="navbar__list">
        {dataNavbar.map((e)=>(
          <NabarItem navSvg={e.svg} navBadge={e.badge} navName={e.name}/>
        ))}
       
      </ul>
    </nav>
  );
};
