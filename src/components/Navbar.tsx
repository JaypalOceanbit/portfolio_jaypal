import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

export let smootherPaused = true;
export function resumeSmoother() {
  smootherPaused = false;
  document.body.style.overflowY = "auto";
}

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section) {
            document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          JD
        </a>
        <a
          href="mailto:dhoriyajj4125@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          dhoriyajj4125@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
