import { useState } from "react";
import { CTA, Brands, Navbar, Feature } from "./Components";
import { Footer, Blog, Possibility, Header, Whatgpt3 } from "./Containers";

function App() {
  return (
    <div className="bg-[#00040F]">
      <Navbar />
      <Header />
      <Brands />
      <Whatgpt3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
