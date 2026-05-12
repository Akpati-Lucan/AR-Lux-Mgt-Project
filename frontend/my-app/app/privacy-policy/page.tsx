"use client";
import DesktopPrivacyPolicyPage from "./DesktopPrivacyPolicyPage";
import MobilePrivacyPolicyPage from "./MobilePrivacyPolicyPage";
import ResponsiveRender from "../components/ResponsiveRender";

const PrivacyPolicyPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopPrivacyPolicyPage />}
      mobile={<MobilePrivacyPolicyPage />}
      breakpoint={760} 
    />
  );
};

export default PrivacyPolicyPage;
