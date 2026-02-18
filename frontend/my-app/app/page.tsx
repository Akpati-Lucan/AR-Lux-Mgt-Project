"use client";
import DesktopHomePage from "./home/DesktopHomePage";
import MobileHomePage from "./home/MobileHomePage";
import ResponsiveRender from "./components/ResponsiveRender";

const HomePage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopHomePage />}
      mobile={<MobileHomePage />}
      breakpoint={760} 
    />
  );
};

export default HomePage;
