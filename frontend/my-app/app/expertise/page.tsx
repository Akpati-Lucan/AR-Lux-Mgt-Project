"use client";
import DesktopExpertisePage from "./DesktopExpertisePage";
import MobileExpertisePage from "./MobileExpertisePage";
import ResponsiveRender from "../components/ResponsiveRender";

const ExpertisePage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopExpertisePage />}
      mobile={<MobileExpertisePage />}
      breakpoint={760} 
    />
  );
};

export default ExpertisePage;
