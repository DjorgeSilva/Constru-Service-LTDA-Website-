import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from "../../assets/slider-1.jpeg"
import Slider2 from "../../assets/slider-2.jpeg"
import Slider3 from "../../assets/slider-3.jpeg"

export const Slider = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={1000} style={{maxHeight: `100vh`}}>
                    <img
                        className="d-block w-100"
                        src={Slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} style={{maxHeight: `100vh`}}>
                    <img
                        className="d-block w-100"
                        src={Slider2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 >Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{maxHeight: `100vh`}}>
                    <img
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
