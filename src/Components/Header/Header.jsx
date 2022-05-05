import "./Header.css";
import brookeLogo from "../../images/brooke-logo.svg";
import { useState } from "react";

const Header = ({ scroll }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navItem, setNavItem] = useState([
    { value: "about me", hoverd: false, href: "aboutMe" },
    { value: "experience", hoverd: false, href: "experience" },
    { value: "testimonials", hoverd: false, href: "testimonial" },
    { value: "contacts", hoverd: false, href: "contact" },
  ]);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
  };

  const handleMouse = (index) => {
    const newItems = [...navItem];
    const hoverdItem = { ...newItems[index] };
    hoverdItem.hoverd = !hoverdItem.hoverd;
    newItems.splice(index, 1, hoverdItem);
    setNavItem(newItems);
  };

  return (
    <header>
      <nav className={`nav ${scroll ? "white-bg" : ""}`}>
        <div
          className={`collapsible container ${
            navOpen ? "collapsible__expanded" : ""
          }`}
        >
          <a className="nav__brand" href="https://brookeoq9pa.zyrosite.com/">
            <img src={brookeLogo} alt="" />
          </a>
          <div className="btnBox">
            <button onClick={handleClick} className="nav__icon">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className="nav__list collapsible__content">
            {navItem.map((item, i) => (
              <li key={item.value} className="nav__item" onClick={handleClick}>
                <a
                  onMouseOver={() => handleMouse(i)}
                  onMouseOut={() => handleMouse(i)}
                  href={`#${item.href}`}
                >
                  {item.value}
                </a>
                {item.hoverd && <span></span>}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
