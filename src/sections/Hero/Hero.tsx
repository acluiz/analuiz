import { Button, Container, Icon } from "@/components";

import "./Hero.scss";
import { GITHUB_URL, LINKEDIN_URL } from "@/constants/links";

export const Hero = () => {
  return (
    <section className="hero">
      <Container customClass="hero__wrapper">
        <>
          <h1 className="hero__title">Hello!</h1>
          <p className="hero__subtitle">— I'm Ana, a software developer</p>

          <div className="hero__buttons">
            <Button
              tagName="a"
              target="_blank"
              rel="noreferrer"
              href={GITHUB_URL}
            >
              <>
                <Icon name="github" color="secondary" size="small" />
                Github
              </>
            </Button>

            <Button
              tagName="a"
              target="_blank"
              rel="noreferrer"
              href={LINKEDIN_URL}
            >
              <>
                <Icon name="linkedin" color="secondary" size="small" />
                Linkedin
              </>
            </Button>
          </div>
        </>
      </Container>
    </section>
  );
};
