import Main from "./../components/Layout/Main";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import HistoriqueItem from "../components/Historique/HistoriqueItem";
import {historiqueObject} from "../components/Historique/historiqueObject";

export default function Historique() {

  return (
    <Main>
      <section className="section" id="accueil">
        <div className="container">
          <>
            <h1 className="title has-text-centered">Historique</h1>
            {historiqueObject.map((item) => (
              <HistoriqueItem image={item.image} paragraphs={item.paragraphs} inversed={item.inversed || null} />
            ))}
          </>
        </div>
      </section>
    </Main>
  );
}
