import Main from "./../components/Layout/Main";
import Contact from "./../components/Contact/Contact";

export default function Success() {
  return (
    <Main>
      <section className="section" id="accueil">
        <div className="container">
          <h1 className="title has-text-centered">Contact & Réservation</h1>
          <div class="notification is-success">
            Merci, nous avons bien reçu votre demande de réservation.
          </div>
          <Contact />
        </div>
      </section>
    </Main>
  );
}
