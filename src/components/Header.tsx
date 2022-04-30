import { useState } from "react";
import { Link } from "react-router-dom";
import FileLink from "./FileLink";
import FileLinkHamburger from "./header/FileLinkHamburger";
import HamburgerLink from "./header/HamburgerLink";
import HeaderLink from "./header/HeaderLink";

const Header = () => {
    const toggleDarkMode = (event:any) => {
        document.body.classList.toggle("dark");
    };
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburgerMenu = (event:any) => {
        setHamburgerOpen(!hamburgerOpen);
    };
    
    let hamburgerLinksHiddenClasses = hamburgerOpen ? "" : " hidden ";
    let hamburgerMenuIcon = hamburgerOpen ? " bg-x " : " bg-hamburger ";

    return (
        <>
            <div className="absolute bg-secondary dark:bg-primary h-24 w-full -z-50"></div>
            <header className="bg-secondary dark:bg-primary bg-opacity-100 lg:bg-opacity-30 dark:lg:bg-opacity-30 dark:hover:bg-opacity-100 hover:bg-opacity-100 flex justify-center">
                <div className="transition ease-in-out duration-300 grid grid-cols-3 grid-rows-1 gap-4 px-4 md:px-16 py-4 w-full max-w-[100rem] items-center">
                    <input className="hidden" type="checkbox" id="hamburger-menu" />
                    <Link className="invert dark:filter-none w-16 h-16 justify-self-start" to="/">
                        <div className="w-16 h-16 bg-logo bg-center bg-no-repeat bg-contain"></div>
                    </Link>
                    <div className="cursor-pointer w-24 h-12 md:w-32 md:h-16 bg-toggle-day dark:bg-toggle-night bg-center bg-no-repeat bg-contain justify-self-center" onClick={toggleDarkMode}></div>
                    <div className="justify-self-end lg:flex flex-row items-center justify-between w-60 hidden">
                        <HeaderLink dest="about" title="About" />
                        <HeaderLink dest="work" title="Work" />
                        <FileLink file={require("../pages/Resume-UXEng.pdf")} title="Resume" />
                    </div>
                    <label className={hamburgerMenuIcon + "dark:invert lg:hidden bg-contain bg-center bg-no-repeat w-16 h-16 justify-self-end"} htmlFor="hamburger-menu" onClick={toggleHamburgerMenu}></label>
                    <nav className={hamburgerLinksHiddenClasses + "grid grid-rows-fr grid-cols-1 gap-4 justify-items-center col-span-full p-8 lg:hidden"} onClick={toggleHamburgerMenu}>
                        <HamburgerLink dest="about" title="About" />
                        <HamburgerLink dest="work" title="Work" />
                        <FileLinkHamburger file={require("../pages/Resume-UXExp.pdf")} title="Resume" />
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;