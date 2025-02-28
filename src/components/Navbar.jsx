import { useState, useEffect } from "react";
import "../App.css";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useLocation, Link } from "react-router";

const Navbar = () => {
  // Configurações e estados
  const routes = ["home", "about", "skills", "projects"];
  const hiddenRoute = ["/contact"];
  const location = useLocation();
  
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Toggle do menu móvel
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Efeito para carregar o modo escuro do localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);



  // Efeito para salvar e aplicar o modo escuro
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Observador de interseção para detectar a seção ativa durante o scroll
  useEffect(() => {
    if (isOpen) return;

    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isOpen]);

  // Componentes reutilizáveis
  const NavLinks = ({ isMobile = false }) => (
    <ul className={`${isMobile ? "poppins-font flex flex-col gap-1 space-y-2" : "hidden pr-3 lg:flex flex-row justify-center items-center gap-6"}`}>
      {routes.map((section) => (
        <li key={section}>
          <a
            translate="no"
            className={`${isMobile ? "px-4 py-2 " : "relative "}text-md ${
              activeSection === section
                ? "text-mypurple"
                : darkMode
                ? "text-white"
                : "text-gray-700"
            } ${isMobile ? "" : "poppins-font"} group`}
            href={`#${section}`}
            onClick={isMobile ? () => setIsOpen(false) : undefined}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {!isMobile && (
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-700 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );

  const LogoLink = () => (
    <Link
      to="/"
      translate="no"
      title="Home"
      className="text-mypurple inter md:mx-10 text-xl font-medium"
    >
      Es<span className="text-gray-800 dark:text-white">dras</span>
    </Link>
  );

  const MobileToggleButton = () => (
    <button onClick={toggleNavbar}>
      {isOpen ? (
        <X size={30} className="dark:stroke-white" />
      ) : (
        <Menu size={30} className="dark:stroke-white" />
      )}
    </button>
  );

  const MobileDarkModeToggle = () => (
    <div className="dark:hover:bg-zinc-800 hover:bg-[#a7a6a6] transition-all duration-200 group p-2 rounded-full flex items-center">
      <button
        className="sm:hidden inline-flex"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <Sun size={22} color="orange" />
        ) : (
          <Moon
            size={22}
            className="fill-[#525151] group-hover:stroke-black group-hover:fill-black stroke-[#525151]"
          />
        )}
      </button>
    </div>
  );

  const DesktopDarkModeToggle = () => (
    <div className="__darkmode- hidden sm:flex flex-row">
      <SunIcon />
      <DarkModeSwitch />
      <MoonIcon />
    </div>
  );

  const SunIcon = () => (
    <svg
      viewBox="0 0 16 16"
      className="bi bi-sun-fill max-sm:mr-1 mr-2"
      fill="currentColor"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        color="orange"
      ></path>
    </svg>
  );

  const MoonIcon = () => (
    <svg
      viewBox="0 0 16 16"
      className="bi bi-moon-stars-fill ml-1 sm:ml-2"
      fill="currentColor"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
        color="#8D827E"
      ></path>
      <path
        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
        color="black"
        className="dark:invert"
      ></path>
    </svg>
  );

  const DarkModeSwitch = () => (
    <label
      className="switch text-[#424242] text-sm font-medium cursor-pointer btn-color-mode-switch
      before:absolute before:text-[12px] before:font-medium before:top-2 before:right-5
      after:w-17.5 after:h-7 after:rounded-[26px] after:absolute after:top-0.5 after:left-0.5
      after:text-center after:transition-all after:duration-[.3s]
      shadow-[0px_0px_8px_0px_rgba(17,17,17,0.34)_inset]
      ease-in transition-all duration-[.3s] rounded-[26px] poppins-font inline-block m-0 relative"
      id="light"
    >
      <input
        value="1"
        className="w-12 h-6 opacity-0 absolute top-0 m-0 cursor-pointer"
        id="color_mode"
        name="color_mode"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />

      <label
        className={`btn-color-mode-switch-inner overflow-hidden m-0 w-36
        shadow-[0px_0px_8px_0px_rgba(17,17,17,0.34)_inset] ease-in transition-all 
        duration-[.3s] bg-[#e0e0e0] rounded-[26px]
        after:w-17.5 after:h-7 after:rounded-[26px] after:absolute after:top-0.5
        after:left-0.5 after:text-center after:transition-all after:duration-[.3s]
        after:ease-in after:shadow-[0px_0px_6px_-2px_#111] after:py-[5px]
        before:absolute before:text-[12px] before:font-medium before:top-2 before:right-5 
        h-8 relative block cursor-pointer ${
          darkMode
            ? "before:content-['Light'] after:content-['Dark']"
            : "before:content-['Dark'] after:content-['Light']"
        }`}
        htmlFor="color_mode"
      ></label>
    </label>
  );

  // Renderização principal
  return (
    <>
      <header className="fixed bg-mist-gray w-full max-w-screen h-25 dark:bg-custom-black z-1000">
        <nav className="navbar flex w-full flex-row p-8 sm:p-10 transition-all ease-in duration-150 justify-between gap-10">
          {/* Lado esquerdo - Logo e Links */}
          <div className="flex sm:mr-6 sm:w-1/2 flex-row sm:justify-start items-center">
            <LogoLink />
            {!hiddenRoute.includes(location.pathname) && <NavLinks />}
          </div>

          {/* Lado direito - Botões */}
          <div className="flex sm:w-1/2 flex-row gap-2 items-center justify-end">
            <div className="__darkmode-button md:mr-8 mr-4 items-center justify-center flex-row">
              <div className="flex items-center">
                <MobileDarkModeToggle />
                <DesktopDarkModeToggle />
              </div>
            </div>

            {/* Botão do menu móvel */}
            {!hiddenRoute.includes(location.pathname) && (
              <div className="lg:hidden flex">
                <MobileToggleButton />
              </div>
            )}
          </div>
        </nav>

        {/* Menu móvel */}
        {isOpen && (
          <div className="w-full z-1000 relative -mt-2 flex items-center justify-center">
            <nav
              className={`z-1000 text-xl dark:bg-custom-black border-t border-gray-300 border-solid 
              dark:border-gray-700 relative bg-mist-gray flex w-full max-w-screen h-screen 
              text-center justify-center p-4 lg:hidden ${
                isOpen ? "animate-scale-in-ver-top" : "animate-scale-out-ver-top"
              }`}
            >
              <NavLinks isMobile={true} />
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;