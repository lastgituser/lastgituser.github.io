import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
    return (
        <>
            <div className="header-back"></div>
            <input className="hamburger-menu-input" type="checkbox" id="hamburger-menu" />
            <header>
                <nav className="hamburger-links">
                    <Link className="hamburger-link" to="about"><h2>About</h2></Link>
                    <Link className="hamburger-link" to="work"><h2>Work</h2></Link>
                    <a className="hamburger-link" href={require("../pages/Resume-UXExp.pdf")}><h2>Resume</h2></a>
                </nav>
                <Link className="header-logo" to="/">
                    <div className="img-logo"></div>
                </Link>
                <div id="day-night-toggle"></div>
                <div className="header-links">
                    <Link className="header-link" to="about"><h3>About</h3></Link>
                    <Link className="header-link" to="work"><h3>Work</h3></Link>
                    <a className="header-link" href={require("../pages/Resume-UXExp.pdf")}><h3>Resume</h3></a>
                </div>
                <label className="hamburger-menu" htmlFor="hamburger-menu"></label>
            </header>
        </>
    );
};

export default Header;