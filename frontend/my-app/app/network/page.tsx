"use client";
import DesktopNetworkPage from "./DesktopNetworkPage";
import MobileNetworkPage from "./MobileNetworkPage";
import ResponsiveRender from "../components/ResponsiveRender";

const NetworkPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopNetworkPage />}
      mobile={<MobileNetworkPage />}
      breakpoint={760} 
    />
  );
};

export default NetworkPage;
