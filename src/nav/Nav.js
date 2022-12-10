import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navBar">
      <div>{navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
      </div>
      <div>
      <div className="logo">
        <h3>Denis Fröbel</h3>
        <p>Barkeeper</p>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
