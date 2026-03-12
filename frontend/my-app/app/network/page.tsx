"use client";
import DesktopExpertisePage from "./DesktopNetworkPage";
import MobileExpertisePage from "./MobileNetworkPage";
import ResponsiveRender from "../components/ResponsiveRender";

const NetworkPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopExpertisePage />}
      mobile={<MobileExpertisePage />}
      breakpoint={760} 
    />
  );
};

export default NetworkPage;
