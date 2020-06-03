import React from 'react';

const Accueil = () => {
    return (
        <section className="section">
            <div className="container">
                <>
                    <h1 className="title has-text-centered">Accueil</h1>
                    <p className="is-size-4 accueil-text">
                        Situé sur la Route de Cocoterie, à Roche Bois, Niam Niam Porky-
                        est un des restaurants des plus « cozy » au alentour de Port
                        Louis. Pour ceux qui veulent s’évader pour un moment de la
                        frénésie de la capitale, Niam Niam Porky est le lieu idéal pour
                        déguster un bon petit plat mauricien savoureux avec des portions
                        généreuses à un prix abordable.
                    </p>
                    <br />
                    <p className="is-size-4 accueil-text">
                        De 09H00 à 21H00, Niam Niam Porky propose une véritable cuisine
                        Mauricienne. Les amateurs de mines bouilles, de bols renversé et
                        de viande de porc viennent y mettre leur palais en joie. Il y a
                        une grande spécialité chez Niam Niam Porky, celle qui rallie les
                        fidèles, c'est le saucisse de porc aux fines herbes et son fameux
                        Char Siu. Viandes, fruits et légumes, à Niam Niam Porky, on a la
                        religion du produit et du frais.
                    </p>
                    <div className="image-gallery">
                        <div className="tile is-ancestor">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child notification bg-1" />
                                    <article className="tile is-child notification bg-2"/>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification bg-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </section>
    );
};

export default Accueil;
