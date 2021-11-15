import "./App.scss";
import HeaderBottom from "./components/Header/HeaderBottom";
import HeaderMain from "./components/Header/HeaderMain";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";

import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ToTopButton from "./components/BackToTop/ToTopButton";
import Overlay from "./components/Overlay/Overlay";
import CartPage from "./pages/CartPage/CartPage";
import PostPage from "./pages/BlogPage/PostPage";

function App() {
  return (
    <div className="App">
      <Overlay />
      <HeaderMain />
      <div className="container">
        <HeaderBottom />
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/blog" component={PostPage} />
      </Switch>
      <div className="top-div" style={{ borderTop: "1px solid #000000" }}></div>
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
