import { GITHUB_URL, LINKEDIN_URL } from "@/constants/links";

import { Container, Icon } from "..";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Container customClass="header__wrapper">
        <>
          <a href="/" rel="noreferrer">
            <img
              alt="Ana Luiz logo"
              src="/icons/logo.svg"
              className="header__logo"
            />
          </a>
          <div className="header__links">
            <nav className="header__navigation">
              <a href="#" rel="noreferrer" className="header__anchor">
                About me
              </a>
              <a href="#" rel="noreferrer" className="header__anchor">
                Projects
              </a>
            </nav>

            <div className="header__socialMedia">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <Icon size="medium" color="blue" name="github" />
              </a>

              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Icon size="medium" color="blue" name="linkedin" />
              </a>
            </div>
          </div>
        </>
      </Container>
    </header>
  );
};
