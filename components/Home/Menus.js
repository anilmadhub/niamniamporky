import React from 'react';
import Link from "next/link";

const Menus = () => {
    return (
        <section className="section">
            <div className="container">
                <>
                    <h1 className="title has-text-centered">Menus</h1>
                    <div className="image-gallery">
                        <div className="tile is-ancestor">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification  bg-4" />
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification  bg-5" />
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification  bg-6" />
                                </div>
                            </div>
                        </div>
                        <div className="tile is-ancestor">
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

                        <div className="columns is-centered">
                            <div className="column is-2">
                                <Link href="/carte-menus">
                                    <button className="button is-danger">
                                        Voir plus de plats
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </section>
    );
};

export default Menus;
