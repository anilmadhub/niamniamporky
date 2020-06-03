import Link from "next/link";
export default function Header() {
  return (
    <nav
      class="navbar is-danger"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <Link href="/">
              <a class="navbar-item">Accueil</a>
            </Link>
            <Link href="/historique">
              <a class="navbar-item">Historique</a>
            </Link>
            <Link href="/carte-menus">
              <a class="navbar-item">Carte et menus</a>
            </Link>
            <Link href="/galerie">
              <a class="navbar-item">Galerie</a>
            </Link>
            <Link href="/contact">
              <a class="navbar-item">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
