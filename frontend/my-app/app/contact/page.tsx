"use client";
import DesktopContactPage from "./DesktopContactPage";
import MobileContactPage from "./MobileContactPage";
import ResponsiveRender from "../components/ResponsiveRender";

const ContactPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopContactPage />}
      mobile={<MobileContactPage />}
      breakpoint={760} 
    />
  );
};

export default ContactPage;
