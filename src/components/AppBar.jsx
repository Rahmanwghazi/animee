import styled from "styled-components";

export const AppBar = () => {
    const Title = styled.h1`
        text-align: center;
        margin: 32px auto;
        padding: 8px;
        border-top: 1px solid #595959;
        border-bottom: 1px solid #595959;
    `;
    const Bar = styled.div`
        width: 100%;
        align-items: center;
        text-align: center;
        color: #595959;
        margin-bottom: 24px;
    `;
    return (
        <Bar>
            <Title>Animee</Title>
            <p>- Discovering anime for your taste 🎥 -</p>
        </Bar>
    );
};
