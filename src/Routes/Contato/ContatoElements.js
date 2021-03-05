import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;

export const Banner = styled.div`
    width: 100%;
    height: 70vh;
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
        font-size: clamp(.9rem, 2.5vw, 2rem);
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

export const ContainerFormulario = styled.div`
    width: 100%;
    height: fit-content;

    h1{
        text-transform: uppercase;
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        margin-bottom: 10px;
        text-align: center;
    }

    @media (min-width: 1000px){
       padding: 20px 80px; 
    }
`

export const Form = styled.form`
    width: 100%;
    height: fit-content;
    border: 2px solid #F5C32E;
    border-radius: 5px;
    box-shadow: 5px 5px 15px #b3b3b3;
    padding: 20px;
    margin: 0 auto;
    margin-bottom: 40px;

    label{
        width: 100%;
        font-size: clamp(1rem, 2.5vw, 1.3rem);
        margin: 20px 0;
    }
    input,
    select{
        width: 100%;
        height: 35px;
        padding-left: 10px;
        outline: none;
    }
    textarea{
        width: 100%;
        outline: none;
        padding: 10px;
        margin-bottom: 20px;
    }
    button{
        display: block;
        padding: 10px 75px;
        margin: 10px auto;
        border-radius: 5px;
        border: none;
        background: ${props => props.theme.ternary_color};
        font-weight: bold;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        outline: none;
        &:hover{
            background: ${props => props.theme.primary_color};
            color: ${props => props.theme.ternary_color};
        }
    }
`

export const GridContato = styled.div`
    width: 100%;
    height: 250px;
    border: 2px solid #F5C32E;
    border-radius: 5px;
    box-shadow: 5px 5px 15px #b3b3b3;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px 10px;
    i{
        font-size: 4rem;
    }
    h1{
        text-transform: initial;
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    }
    a{
        margin: 0;
        padding: 0;
    }
`;