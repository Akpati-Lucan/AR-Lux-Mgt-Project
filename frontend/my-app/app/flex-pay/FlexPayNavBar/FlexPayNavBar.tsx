"use client";
import DesktopFlexPayNavBar from "./DesktopFlexPayNavBar";
import MobileFlexPayNavBar from "./MobileFlexPayNavBar";
import ResponsiveRender from "@/app/components/ResponsiveRender";

const FlexPayNavBar = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopFlexPayNavBar />}
      mobile={<MobileFlexPayNavBar />}
      breakpoint={760} // optional
    />
  );
};

export default FlexPayNavBar;
