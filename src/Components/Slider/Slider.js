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
                        <h3 style={{fontSize: "3rem"}}>Primeiro Slide</h3>
                        <p style={{fontSize: "2rem"}}>Informações sobre o primeiro Slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} style={{maxHeight: `100vh`}}>
                    <img
                        className="d-block w-100"
                        src={Slider2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize: "3rem"}}>Segundo Slide</h3>
                        <p style={{fontSize: "2rem"}}>Informações sobre o primeiro Slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{maxHeight: `100vh`}}>
                    <img
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize: "3rem"}}>terçeiro Slide</h3>
                        <p style={{fontSize: "2rem"}}>Informações sobre o primeiro Slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
