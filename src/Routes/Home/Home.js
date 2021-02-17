import React, { useEffect, useState } from 'react'
import { Slider } from "../../Components/Slider/Slider.js"
import { About } from "../../Components/About/About.js"
import { Servicos } from "../../Components/Servicos/Servicos.js"
import { Portfolios } from "../../Components/Portfolio/Portfolio.js"

export const Home = ({sizeWindow}) => {

    return (
        <div>
            <Slider />
            <About />
            <Servicos sizeWindow={sizeWindow}/>
            <Portfolios sizeWindow={sizeWindow}/>
        </div>
    )
}
