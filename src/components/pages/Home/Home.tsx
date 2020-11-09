import React from "react";
import Header from "../../../components/_partials/Header/Header";
import Banner from "../../../components/_partials/Banner/Banner";
import Model from "../../../components/_partials/Model/Model";
import Shop from "../../../components/_partials/Shop/Shop";
import Footer from "../../../components/_partials/Footer/Footer";
import List from "../../../components/_partials/List/List";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Model />
      <Shop />
      <List />
      <Footer />
    </div>
  );
}

export default Home;
