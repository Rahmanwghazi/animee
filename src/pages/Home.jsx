import styled from "styled-components";
import { AnimeList } from "../components/AnimeList";
import { AppBar } from "../components/AppBar";


const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #595959;
    margin-top: 32px;
`;

export const Home = () => {

    return (
        <>
            <AppBar />
            <Container>
                <AnimeList />
            </Container></>
    );
}