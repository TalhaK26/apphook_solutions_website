import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Language>{"Contact"}</Language>
              <Large to="/">{"Tell us everything"}</Large>
              <Para>{`Do you have any question? Feel free to reach out.`}</Para>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Language>{"Address"}</Language>
              <Para>2500 Broadway Building F</Para>
              <Para>Suite F-125, Santa Monica</Para>
              <Para>CA 90404, United States</Para>
            </Col>
          </Row>
          <Row justify="space-between">
          {/* <Col lg={12} md={12} sm={12} xs={12}>
              <Title>{"Policy"}</Title>
              <Large
                target="_blank"
                href=""
                left="true"
              >
                Terms & Conditions
              </Large>
            </Col> */}  
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Press")}
              </Large>
              <Large left="true" to="/">
                {t("Careers & Culture")}
              </Large>
            </Col> 
            <Col lg={12} md={12} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col> */}
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img
                  src={`/img/icons/app-logo.png`}
                  alt="AppHook Solutions"
                  width="200px"
                />
              </LogoContainer>
            </NavLink>
            {/* <FooterContainer>
              <SocialLink
                href=""
                src="linkedin.svg"
              />
              <SocialLink
                href=""
                src="facebook.svg"
              />
              <SocialLink href="" src="github.svg" />
              <SocialLink href="" src="medium.svg" />
              <a href="">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=adrinlol&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                  alt="Buy me a pizza"
                />
              </a>
            </FooterContainer> */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
