"use client";
import DesktopTermsAndConditionsPage from "./DesktopTermsAndConditionsPage";
import MobileTermsAndConditionsPage from "./MobileTermsAndConditionPage";
import ResponsiveRender from "../components/ResponsiveRender";

const TermsAndConditionsPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopTermsAndConditionsPage />}
      mobile={<MobileTermsAndConditionsPage />}
      breakpoint={760} 
    />
  );
};

export default TermsAndConditionsPage;
