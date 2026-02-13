"use client";
import { useEffect, useState, ReactNode } from "react";

type ResponsiveRenderProps = {
  desktop: ReactNode;
  mobile: ReactNode;
  breakpoint?: number; // optional, default 760
};

const ResponsiveRender = ({
  desktop,
  mobile,
  breakpoint = 760,
}: ResponsiveRenderProps) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkWindowSize(); // run once on mount
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, [breakpoint]);

  if (isDesktop === null) return null; // avoid hydration mismatch

  return <>{isDesktop ? desktop : mobile}</>;
};

export default ResponsiveRender;
