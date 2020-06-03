import React from "react";
import Link from "next/link";
import AnimateOnScroll from "../../functions/AnimateOnScroll";

const Menus = () => {
  const [isElementVisible, setElementVisible] = React.useState(true);
  const domRef = React.useRef();
  AnimateOnScroll(domRef, setElementVisible);
  return (
    <section className="section menu-section">
      <div className="container">
        <>
          <h1 className={`title has-text-centered `}>Menus</h1>
          <div
            className={`image-gallery ${
              isElementVisible && "animated animatedFadeInUp fadeInUp"
            }`}
            ref={domRef}
          >
            <div className="tile is-ancestor">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification  bg-4" />
                </div>
                <div className="tile is-parent columns is-hidden-desktop ">
                  <div className="column is-full">
                    <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                      Poulet Grillé
                    </p>
                    <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                      Aux herbes de provence et à l'huile d'olive
                    </p>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification  bg-5" />
                </div>
                <div className="tile is-parent columns is-hidden-desktop">
                  <div className="column is-full">
                    <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                      Poulet Panée
                    </p>
                    <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                      Morceaux de poulet avec sa panure maison
                    </p>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification  bg-6 " />
                </div>
                <div className="tile is-parent columns is-hidden-desktop ">
                  <div className="column is-full">
                    <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                      Mine Frite
                    </p>
                    <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                      Mine Frite
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-ancestor is-hidden-mobile">
              <div className="tile">
                <div className="tile is-parent columns">
                  <div className="column is-full">
                    <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                      Poulet Grillé
                    </p>
                    <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                      Aux herbes de provence et à l'huile d'olive
                    </p>
                  </div>
                </div>
                <div className="tile is-parent columns">
                  <div className="column is-full">
                    <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                      Poulet Panée
                    </p>
                    <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                      Morceaux de poulet avec sa panure maison
                    </p>
                  </div>
                </div>
                <div className="tile is-parent columns">
                  <div className="column is-full">
                    <p className="is-size-5 has-text-centered has-text-weight-bold has-text-black">
                      Mine Frite
                    </p>
                    <p className="is-size-6 has-text-centered has-text-weight-light has-text-black-bis">
                      Mine Frite
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-flex align-center justify-center">
              <Link href="/carte-menus">
                <button className="button is-danger">Voir plus de plats</button>
              </Link>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Menus;
