import React from "react";
import Main from "./../components/Layout/Main";
import AnimateOnScroll from "../functions/AnimateOnScroll";
import MenusImageItem from "../components/Menus/MenusImage";
import { v4 as uuidv4 } from 'uuid';

export default function CarteMenus() {
  const [isElementVisible, setElementVisible] = React.useState(true);
  const domRef = React.useRef();
  AnimateOnScroll(domRef, setElementVisible);
  const menus = [
    [
      {
        name: "Poulet Grillé",
        description: "Aux herbes de provence et à l'huile d'olive",
        imageClass: "bg-4",
        id:1
      },
      {
        name: " Poulet Panée",
        description: "Morceaux de poulet avec sa panure maison",
        imageClass: "bg-5",
        id:2
      },
      {
        name: "Mine Frite",
        description: "Mine Frite",
        imageClass: "bg-6",
        id:3
      },
    ],  [
      {
        name: "Poulet Grillé",
        description: "Aux herbes de provence et à l'huile d'olive",
        imageClass: "bg-4",
        id:1
      },
      {
        name: " Poulet Panée",
        description: "Morceaux de poulet avec sa panure maison",
        imageClass: "bg-5",
        id:2
      },
      {
        name: "Mine Frite",
        description: "Mine Frite",
        imageClass: "bg-6",
        id:3
      },
    ],

  ];
  return (
    <Main>
      <section className="section" id="accueil">
        <div className="container">
          <>
            <h1 className="title has-text-centered">Carte & Menus</h1>
            <div
              className={`image-gallery ${
                isElementVisible && "animated animatedFadeInUp fadeInUp"
              }`}
              ref={domRef}
            >
              {menus.map((menu) => (
                <MenusImageItem
                  menuItem={ menu}
                  key={uuidv4()}
                />
              ))}
            </div>
          </>
        </div>
      </section>
    </Main>
  );
}
