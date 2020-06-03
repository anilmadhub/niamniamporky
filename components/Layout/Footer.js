import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className=" is-flex align-center justify-center flex-column">
        <strong className="font-niam is-size-4 has-text-danger">
          NiamNiam Porky
        </strong>
        <p className="is-size-6 has-text-weight-light footer-text">124, Route Cocoterie,</p>
        <p className="is-size-6 has-text-weight-light footer-text"> Roche Bois</p>
        <p className="is-size-6 has-text-weight-light footer-text"> + 230 57658574</p>
        <p className="is-size-6 has-text-weight-light footer-text">
          niamniamporky@gmail.com
        </p>
        <p className="is-size-6 has-text-weight-light">Copyright &copy; 2020</p>
      </div>
    </footer>
  );
}
