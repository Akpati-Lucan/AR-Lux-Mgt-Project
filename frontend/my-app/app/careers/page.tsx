"use client";
import DesktopCareersPage from "./DesktopCareersPage";
import MobileCareersPage from "./MobileCareersPage";
import ResponsiveRender from "../components/ResponsiveRender";

const CareersPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopCareersPage />}
      mobile={<MobileCareersPage />}
      breakpoint={760} 
    />
  );
};

export default CareersPage;
