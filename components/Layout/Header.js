import React, { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const navLinks = [
    { name: "Accueil", src: "/" },
    { name: "Historique", src: "/historique" },
    { name: "Carte et menus", src: "/carte-menus" },
    { name: "Galerie", src: "/gallerie" },
    { name: "Contacte", src: "contact" },
  ];
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="navbar-logo has-text-danger">Niamniamporky</h1>
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarTarget"
            onClick={() => setIsActive(!isActive)}
          >
            {[1,2,3].map(_=>(
            <span key={_} aria-hidden="true"/>

            ))}
          </a>
        </div>

        <div
          id="navbarTarget"
          className={!isActive ? "navbar-menu" : "navbar-menu is-active"}
        >
          <div className="navbar-end">
            {navLinks.map((link) => (
              <Link href={link.src} key={link.src}>
                <a className="navbar-item">{link.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
