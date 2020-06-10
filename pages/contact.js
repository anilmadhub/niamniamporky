import Main from "./../components/Layout/Main";

export default function Contact() {
  return (
    <Main>
      <section className="section" id="accueil">
        <div className="container">
          <h1 className="title has-text-centered">Contact & Réservation</h1>

          <form name="contact_reservation" method="POST" data-netlify="true">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input
                  name="phone"
                  className="input"
                  type="text"
                  placeholder=" +230 50000000"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="input"
                  type="email"
                  placeholder="hello@email.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">No. of persons</label>
              <div className="control">
                <input
                  name="persons"
                  className="input"
                  type="text"
                  placeholder="2"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Date and time</label>
              <div className="control">
                <input
                  name="date_time"
                  className="input"
                  type="text"
                  placeholder="Friday 25/07/2020 at 19:00"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">
                  Submit
                </button>
              </div>
              <div className="control">
                <button type="reset" className="button is-link is-light">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Main>
  );
}
