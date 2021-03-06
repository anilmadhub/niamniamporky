import Main from "./../components/Layout/Main";
import Contact from "./../components/Contact/Contact";

export default function ContactPage() {
  return (
    <Main>
      <section className="section" id="accueil">
        <div className="container">
          <h1 className="title has-text-centered">Contact & Réservation</h1>
          <Contact />
        </div>
      </section>
    </Main>
  );
}
