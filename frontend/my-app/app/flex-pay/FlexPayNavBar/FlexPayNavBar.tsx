"use client";
import Image from "next/image";
import Link from "next/link";
import DesktopFlexPayNavBar from "./DesktopFlexPayNavBar";
import MobileFlexPayNavBar from "./MobileFlexPayNavBar";
import { useState, useEffect } from "react";


const FlexPayNavBar = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const checkWindowSize = () => {
    let windowWidth;
    if ( typeof window !== 'undefined'){
      windowWidth = window.innerWidth;
    }

    if ( windowWidth >= 760){
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }

  {/* When User firsts loads the page */}
  useEffect( () => {
    checkWindowSize()
  }, [isDesktop])

  {/* When User resises the window */}
  if ( typeof window !== 'undefined'){
      window.addEventListener('resize', checkWindowSize);
  }
  return (

    <div>
      {isDesktop ? <DesktopFlexPayNavBar /> : <MobileFlexPayNavBar />}
    </div>
  );
};

export default FlexPayNavBar;
