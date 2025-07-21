import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

export const Navbar = ({ hide }: NavbarProps) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
      
      // Update active section based on scroll position
      NAV_LINKS.forEach((link) => {
        if (!link.link?.startsWith('#')) return;
        
        const sectionId = link.link.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            setActive(link.title);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: typeof NAV_LINKS[0]) => {
    setActive(link.title);
    setToggle(false);
    
    if (link.link?.startsWith('#')) {
      const sectionId = link.link.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-50 bg-primary transition-all duration-300",
        scrolled || hide ? "shadow-lg" : "mt-20"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shubham&nbsp;<span className="sm:block hidden">| Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-secondary",
                "hover:text-white text-[18px] font-medium cursor-pointer transition-colors"
              )}
            >
              {link.link ? (
                link.link.startsWith('#') ? (
                  <a
                    href={link.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                  >
                    {link.title}
                  </a>
                ) : (
                  <a href={link.link} target="_blank" rel="noreferrer noopener">
                    {link.title}
                  </a>
                )
              ) : (
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick({ ...link, link: `#${link.id}` });
                  }}
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer z-50"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-40 rounded-xl"
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.link ? (
                    link.link.startsWith('#') ? (
                      <a href={link.link}>{link.title}</a>
                    ) : (
                      <a href={link.link} target="_blank" rel="noreferrer noopener">
                        {link.title}
                      </a>
                    )
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};