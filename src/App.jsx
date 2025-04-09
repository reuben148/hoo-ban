import { useState } from "react";
import { CTA, Brands, Navbar, Feature } from "./components";
import { Footer, Blog, Possibility, Header, WhatGPT } from "./containers";

function App() {
  return (
    <div className="bg-slate-400">
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
