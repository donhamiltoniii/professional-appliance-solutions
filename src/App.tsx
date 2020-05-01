import React from "react";

import Header from "./components/header/header.component";
import HeroImage from "./components/hero-image/hero-image.component";
import ServicesList from "./components/services-list/services-list.component";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroImage />
      <ServicesList />
    </div>
  );
}

export default App;
