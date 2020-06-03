import Header from "./Header";
import Footer from "./Footer";

export default function Main(props) {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
}
