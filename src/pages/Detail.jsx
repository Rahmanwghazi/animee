import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icBack from '../assets/ic_back.png';
import icYoutube from '../assets/ic_youtube.png';
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
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.bg});

    @media (min-width: 768px) {
       height: 30vh;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin: 0;

    @media (min-width: 768px) {
        margin: 32px 0 0 0;
        text-align: left;
        font-size: 48px;
    }
`;

const SubTitle = styled.p`
    text-align: center;
    margin-bottom: 48px;

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
    background-color: #7F7F7F;
    margin-top: 20px;
    align-items: center;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        align-items: flex-start;
    }
`;

const YoutubeLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #fff;
    margin: 24px;
    cursor: pointer;

    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row;
        margin: 24px 24px 24px 0;
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

    console.log(anime);


    return (
        <Container>
            {anime.data && (
                <>
                    <BackButton onClick={() => navigate(-1)} src={icBack} alt="" />
                    <PosterImage bg={anime.data.attributes.coverImage !== null ? anime.data.attributes.coverImage.original : anime.data.attributes.posterImage.original}></PosterImage>
                    <Wrapper>
                        <Image src={anime.data.attributes.posterImage.small} alt="" />
                        <Description >
                            <Title>{anime.data.attributes.titles.en ? anime.data.attributes.titles.en
                                : (anime.data.attributes.titles.en_us ? anime.data.attributes.titles.en_us
                                    : (anime.data.attributes.titles.en_jp ? anime.data.attributes.titles.en_jp
                                        : anime.data.attributes.titles.en_cn))}</Title>
                            <SubTitle>
                                <p>({anime.data.attributes.titles.ja_jp})</p>
                                <p>Rating: {anime.data.attributes.averageRating}</p>
                            </SubTitle>
                            <p>{anime.data.attributes.synopsis}</p>
                            {
                                anime.data.attributes.youtubeVideoId ? (
                                    <YoutubeLink href={`https://youtu.be/${anime.data.attributes.youtubeVideoId}`} target="_blank" rel="noreferrer">
                                        <img src={icYoutube} width="32" alt="" />
                                        <p>&nbsp;Watch trailer</p>
                                    </YoutubeLink>
                                ) : null
                            }

                        </Description>

                    </Wrapper>



                </>
            )}

        </Container>
    );
};