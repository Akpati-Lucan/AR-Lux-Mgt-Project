"use client";
import DesktopSignInPage from "./DesktopSignInPage";
import MobileSignInPage from "./MobileSignInPage";
import ResponsiveRender from "../components/ResponsiveRender";

const SignInPage = () => {
   return (
    <ResponsiveRender
      desktop={<DesktopSignInPage />}
      mobile={<MobileSignInPage />}
      breakpoint={760} 
    />
  );
};

export default SignInPage;
