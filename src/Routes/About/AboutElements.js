import styled from "styled-components"

export const ContainerAbout = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const Banner = styled.div`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    margin-bottom: 50px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`
export const Main = styled.div`
    width: 100%;
    height: fit-content;

`

export const ContainerItem = styled.div`
    width: 100%;
    height: inherit;
    margin-bottom: 120px;
    @media (min-width: 1000px){
        display: flex;
        
    }
`

export const InnerItem = styled.div`
    width: 100%;
    height: inherit;

    img{
        width: 100%;
        object-fit: cover;
        height: 450px;
    }
    h1{
        margin: 30px 0;
        font-size: clamp(2em, 2.5vw, 2.5rem)
    }
    span{
        width: fit-content;
        height: fit-content;
        background-color: ${props=> props.theme.ternary_color};
        padding: 0 5px;
    }
    p{
        font-size: 1.1rem;
    }
    @media (min-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 40px;
    }


`
export const ItemGrid = styled.div`
    width: 100%;
    height: inherit;
    background:${props=> props.theme.ternary_color};
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 10px;
    i{
        font-size: 2rem;
        margin-bottom: 10px;
    }
    p{
        font-size: 1.1rem;
    }
    `