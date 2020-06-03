import React from "react";
import "bulma";
import "../styles/compiled/_all.css"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
