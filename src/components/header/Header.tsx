import React, { useEffect, useState } from "react";
import "./Header.scss";
import { HashLink } from "react-router-hash-link";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled app-header" : "app-header"}>
      <div className="header-container">
        <div className="logo-container">
          <p>Vasya.inc</p>
        </div>
        <div className="flex text-blocks-container">
          <HashLink to="#text">
            <p>Текстовые блоки</p>
          </HashLink>
          <HashLink to="#gallery">
            <p>Галерея</p>
          </HashLink>
        </div>
        <div className="text-blocks-container">
          <HashLink to="#connect">
            <p>👋 Форма с приветами</p>
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
