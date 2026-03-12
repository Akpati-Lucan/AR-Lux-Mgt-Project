import React, { useState, useEffect } from "react";
import styles from "./BackgroundCollage.module.css"

const images = [
  "/home/home-slideshow-1.jpg",
  "/home/home-slideshow-2.jpg",
  "/home/home-slideshow-3.jpg",
];


const BackgroundCollage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
        className={styles["background-collage"]}
        style={{ backgroundImage: `url(${images[current]})` }}
    />
  );
};

export default BackgroundCollage;
