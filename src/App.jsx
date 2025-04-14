import { useState } from "react";
import { CTA, Brands, Navbar, Feature } from "./Components";
import { Footer, Blog, Possibility, Header, WhatGPT } from "./Containers";

function App() {
  return (
    <div className="bg-[#214D76]">
      <Navbar />
      <Header />

      <Brands />
      <WhatGPT />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
