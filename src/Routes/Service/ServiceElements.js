import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const Banner = styled.div`
    width: 100%;
    height: 50vh;
    overflow: hidden;
    margin-bottom: 50px;
    color: ${props => props.theme.secundary_color};
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }

    h1{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(2.5rem, 2.5vw, 3.5rem);
        background-color: ${props => props.theme.primary_color};
        padding: 5px 20px;
        border-radius: 5px;
    }
    p{
        width: fit-content;
        position: absolute;
        top: 38%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        color: ${props => props.theme.ternary_color};
        background-color: ${props => props.theme.primary_color};
        padding: 5px 20px;
        border-radius: 5px;
        text-transform: uppercase;

        @media (min-width: 1050px){
            top: 40%;
        }
    }
`

export const ItemGrid = styled.div`
    width: 100%;
    height: inherit;
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;

    }
    h3{
        width: 100%;
        height:fit-content;
        background: ${props => props.theme.ternary_color};
        text-align: center;
        padding: 10px 0;
        font-size: clamp(1rem, 2.5vw, 1.1rem);
        text-transform: uppercase;
        margin: 0;

    }
    p{
        background: #EBE9E9;
        padding: 10px;
    }

`