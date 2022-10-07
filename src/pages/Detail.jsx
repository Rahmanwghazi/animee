import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icBack from '../assets/ic_back.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;

    @media (min-width: 768px) {
        text-align: left;
        align-items: flex-start;
    }
`;

const PosterImage = styled.div`
    width: 100%;
    height: 30vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.bg});
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
        font-size: 48px;
    }
`;

const SubTitle = styled.p`
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const Image = styled.img`
    width: 50%;
    position: relative;
    top: -120px;

    @media (min-width: 768px) {
        max-width: 300px;
        top: -100px;
        left: 20px;
    }
`;

const BackButton = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color:rgba(255, 255, 255, 0.5) ;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    padding: 10px;
`;

const Description = styled.div`
    position: relative;
    top: -100px;
    padding: 24px;
    font-size: 16px;
    font-weight: 400;
    text-align: justify;

    @media (min-width: 768px) {
        width: 70%;
        top: -50px;
        left: 24px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        background-color: #8D6346;
        justify-content: flex-start;
        height: 50vh;
        width: 100%;
        margin-top: 20px;
    }
`;

export const Detail = () => {
    const [anime, setAnime] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getAnime = async () => {
            const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
            const data = await response.json();
            setAnime(data);
        };
        getAnime();
    }, [id]);

    console.log("sdsd",anime.data?.attributes);


    return (
        <Container>
            {anime.data && (
                <>
                    <BackButton onClick={() => navigate(-1)} src={icBack} alt="" />
                    <PosterImage bg={anime.data.attributes.coverImage !== null ? anime.data.attributes.coverImage.original : anime.data.attributes.posterImage.original }></PosterImage>
                    <Wrapper>
                        <Image src={anime.data.attributes.posterImage.small} alt="" />
                        <Description >
                            <Title>{anime.data.attributes.titles.en ? anime.data.attributes.titles.en : anime.data.attributes.titles.en_jp}</Title>
                            <SubTitle>
                                <p>({anime.data.attributes.titles.ja_jp})</p>
                                <p>Rating: {anime.data.attributes.averageRating}</p>
                            </SubTitle>
                            <p>{anime.data?.attributes.synopsis}</p>
                        </Description>
                    </Wrapper>
                </>
            )}

        </Container>
    );
};