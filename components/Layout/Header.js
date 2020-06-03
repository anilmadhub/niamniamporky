import React from "react";
import Link from "next/link";
export default function Header() {
  const navLinks = [
    { name: "Accueil", src: "/" },
    { name: "Historique", src: "/historique" },
    { name: "Carte et menus", src: "/carte-menus" },
    { name: "Galerie", src: "/gallerie" },
    { name: "Contacte", src: "contact" },
  ];
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="navbar-logo">Niamniamporky</h1>
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarTarget"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarTarget" className="navbar-menu">
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
