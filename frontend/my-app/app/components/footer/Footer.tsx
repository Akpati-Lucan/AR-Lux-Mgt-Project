"use client";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import ResponsiveRender from "../ResponsiveRender";


const Footer = () => {
  return (
    <ResponsiveRender
      desktop={<DesktopFooter />}
      mobile={<MobileFooter />}
      breakpoint={760} // optional
    />
  );
};

export default Footer;
