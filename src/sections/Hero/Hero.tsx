import { Container } from "@/components";

import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <Container customClass="hero__wrapper">
        <h1 className="hero__title">Ana Luiz</h1>
      </Container>
    </section>
  );
};
