import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function Slider() {
  return (
    <div>
    <Carousel controls={false} fade={true}>
        <Carousel.Item>
            <Image className="d-block w-100 round-ed-3" src='/bilder/essen/burger.jpg' alt="burger" width={750} height={250}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100 round-ed-3" src='/bilder/essen/pizza.jpg' alt="pizza" width={750} height={250}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100 round-ed-3" src='/bilder/essen/burrito.jpg' alt="burrito" width={750} height={250}/>
        </Carousel.Item>
    </Carousel>
    </div>
  );
}
