import { useEffect, useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => setVisibility(!visible);
  const onClose = () => setVisibility(!visible);

  useEffect(() => {
    setTimeout(() => {
      var sectionId = window.location.href.split("#")[1];
      if (sectionId) scrollTo(sectionId);
    }, 500);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLElement;
    console.log("element", element);
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("services")}>
          <Span>{t("Services")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("portfolio")}>
          <Span>{t("Portfolio")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("clients")}>
          <Span>{t("Clients")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img
              src={`/img/icons/app-logo.png`}
              alt="AppHook Solutions"
              width="200px"
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        {/* <Drawer closable={false} visible={visible} onClose={onClose}> */}
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
