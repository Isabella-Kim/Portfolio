import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <div className="Header">
      <div className="wrapHeader">
        <div className="logo">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Header/Logo.png`}
              alt=""
            />
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="blog" spy={true} smooth={true} duration={500}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
