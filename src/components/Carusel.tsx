"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel stili
import heroImg from "@/assets/images/products/1707125602-1600x491 UZ.png";
import Second from "@/assets/images/products/seconf.png";
import Three from "@/assets/images/products/three.png";
import Image from "next/image";
const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <Image src={heroImg} alt="1" />
      </div>
      <div>
        <Image src={Second} alt="2" />
      </div>
      <div>
        <Image src={Three} alt="3" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
