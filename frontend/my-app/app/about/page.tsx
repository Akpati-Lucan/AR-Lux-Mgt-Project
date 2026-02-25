"use client";
import DesktopAboutPage from "./DesktopAboutPage";
import MobileAboutPage from "./MobileAboutPage";
import ResponsiveRender from "../components/ResponsiveRender";

const AboutPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopAboutPage />}
      mobile={<MobileAboutPage />}
      breakpoint={760} 
    />
  );
};

export default AboutPage;
