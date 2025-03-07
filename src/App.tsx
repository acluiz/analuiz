import { Header } from "@/components";

import { About, Contact, Hero } from "@/sections";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
