import { useEffect, useRef, useState } from "react";

import { About, Hero } from "@/sections";

import { Header } from "@/components";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
