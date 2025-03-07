import { Button, Container, Footer, Icon, Subtitle } from "@/components";

import { GITHUB_URL, LINKEDIN_URL } from "@/constants/links";

import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <Container customClass="contact__wrapper">
        <>
          <Subtitle text="Get in touch" />

          <div className="contact__info">
            <Icon name="mail" color="secondary" size="small" />
            <p>anacarolinaluizr@gmail.com</p>
          </div>

          <div className="contact__info">
            <Icon name="map-pin" color="secondary" size="small" />
            <p>Rio de Janeiro, Brazil</p>
          </div>

          <div className="contact__buttons">
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

      <Footer />
    </section>
  );
};
