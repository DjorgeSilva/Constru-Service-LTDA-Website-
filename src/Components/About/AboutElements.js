import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.primary_color};
    color: ${props => props.theme.secundary_color};
    padding: 80px 10px;
    overflow: hidden;

    @media (min-width: 950px){
        display: flex;
        flex-direction:row;
    }
`;

export const AboutItemTxt = styled.div`
    width: 100%;
    margin-top: 20px;
    h1, p{
        text-align: right;
        margin-bottom: 10px;
        @media (min-width: 950px){
            text-align: center;
        }
    }
    p{
        font-size: clamp(1rem, 2.5vw, 1.8rem);
        color: ${props => props.theme.ternary_color};

    }
        button{
            padding: 12px 40px;
            border-radius: 5px;
            border: none;
            font-size: 1.3rem;
            font-weight: 500;
            float: right;
            outline:none;
            &:hover{
                background: ${props => props.theme.ternary_color};
            }
            @media (min-width: 950px){
               width: 100%;
            }
        
    }

    @media (min-width: 950px){
        width: 50%;
        height: 100%;
        float: left;
        padding-right:15px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        
    }

`
export const AboutItemImg = styled.div`
    width: 90%;
    height: fit-content;
    margin: 0 auto;
    border-radius: 100%;
    img{
        width: 100%;
        height: 70%;
        border-radius: 100%;
        padding-top: 70px;
        object-fit: cover;
        object-position: 0% 20%;
        
    }
        @media (min-width: 950px){
        width: 50%;
        height:100%;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
`
