import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import ProductList from "./components/productlist/ProductList";

function App() {
  const products = [
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  return (
    <div className="App">
      <h1>Shopping Card GO MY CODE GF3</h1>
      <ProductList produits={products} />
      <Footer >
        <i className="fab fa-youtube-square"></i>
        <h6>Best group ever</h6>
        &copy;COPYRIGHTS 2021
      </Footer>
    </div>
  );
}

export default App;
