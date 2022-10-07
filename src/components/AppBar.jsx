import styled from "styled-components";

export const AppBar = () => {
    const Title = styled.h1`
        text-align: center;
    `;
    const Bar = styled.div`
        width: 100%;
        align-items: center;
        text-align: center;
        color: #fff;
        background-color: #000;
        margin-bottom: 24px;
    `;
    return (
        <Bar>
            <Title>Animee</Title>
        </Bar>
    );
};
