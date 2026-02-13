"use client";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import ResponsiveRender from "../ResponsiveRender";

const Header = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopHeader />}
      mobile={<MobileHeader />}
      breakpoint={760} // optional
    />
  );
};

export default Header;
