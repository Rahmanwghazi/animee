import styled from "styled-components";
import { AnimeList } from "../components/AnimeList";
import { AppBar } from "../components/AppBar";

export const Home = () => {

    const Container = styled.div`
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #fff;
    `;

    return (
        <>
        <AppBar />
        <Container>
            <AnimeList />
        </Container></>
    );
}