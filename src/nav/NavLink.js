import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
  // apply ativeClass style alongside scrollintoview call 
  // by storing the navLinkId in the Nav component's local state


  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? "activeClass" : ""}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

export default NavLink;
