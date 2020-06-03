import React, {useEffect} from "react";
import Main from "./../components/Layout/Main";
import Accueil from "../components/Home/Accueil";
import Link from "next/link";
import Menus from "../components/Home/Menus";
export default function Home() {
    const [isVisible, setVisible] = React.useState(true);

  return (
    <Main>
      <div className="parallax-home">
        <h3 className="has-text-white-bis is-size-4 thin-text is-size-6-mobile animated animatedFadeInUp fadeInUp">
          124, Route Cocoterie, Roche Bois
        </h3>
        <h1 className="has-text-white thin-text title-text is-size-4-mobile animated animatedFadeInUp fadeInUp">
          EAT DRINK VISIT
        </h1>
      </div>
      <Accueil />
      <Menus />
    </Main>
  );
}
