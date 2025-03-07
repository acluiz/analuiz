import { Button, Container, Icon, Subtitle } from "@/components";

import "./About.scss";

export const About = ({ reference }) => {
  return (
    <section ref={reference} className="about">
      <Container customClass="about__wrapper">
        <>
          <Subtitle text="About me" />

          <p className="about__text">
            I began my journey as a software developer in 2019, specializing in
            front-end development. My passion for crafting impactful digital
            experiences drives me to focus on JavaScript technologies, while
            also exploring Python and Golang.
          </p>

          <p className="about__text">
            Throughout my career, I have gained experience with frameworks like
            Angular, ReactJS, Gatsby, and NextJS, as well as tools such as
            Cypress, Sass and Styled Components.
          </p>

          <Button customClass="about__button" onClick={() => {}}>
            <>
              <Icon name="file" size="small" color="secondary" />
              See resume
            </>
          </Button>
        </>
      </Container>
    </section>
  );
};
