import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    max-width: 150px;
    max-height: 300px;
    background-color: black;
    border-radius: 5px;
    font-size: 1rem;
    padding: 8px;

    @media (min-width: 768px) {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin: 10px 32px;
        max-width: 230px;
        max-height: 450px;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

const CardImage = styled.img`
    width: 95%;
    object-fit: cover;
`;

const Title = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin: 8px 0;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const Subtitle = styled.p`
    font-size: 14px;
    margin: 0;
    @media (min-width: 768px) {
        font-size: 14px;
    }
`;


export const Card = (props) => {
    const navigate = useNavigate();
    return (
        <CardItem onClick={() => navigate(`/detail/${props.id}`)}>
            <CardImage src={props.img} alt="" />
            <Title>{props.enTitle}</Title>
            <Subtitle>{props.jpTitle}</Subtitle>
        </CardItem>
    );
}