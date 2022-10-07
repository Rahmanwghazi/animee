import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        @media (min-width: 768px) {
            justify-content: center;
        }
`;

export const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const getAnime = async () => {
            const response = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&&page[offset]=${offset}`);
            const data = await response.json();
            setAnimeList(data);
        };
        getAnime();
    }, [offset]);

    let lastPage = animeList.meta ? animeList.meta.count - 10 : 0;

    const onNextPage = () => {
        setOffset(offset + 10);
    };

    const onPrevPage = () => {
        setOffset(offset - 10);
    };

    const onFirstPage = () => {
        setOffset(0);
    };

    const onLastPage = () => {
        setOffset(lastPage);
    };

    console.log("ini", animeList);
    return (
        <><Wrapper>
            {animeList.data && animeList.data.map((anime) => (
                <Card
                    key={anime.id}
                    id={anime.id}
                    enTitle={anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp}
                    jpTitle={anime.attributes.titles.ja_jp}
                    img={anime.attributes.posterImage.small} />
            ))}

        </Wrapper><Pagination
                onNextPage={onNextPage}
                onPrevPage={onPrevPage}
                onFirstPage={onFirstPage}
                onLastPage={onLastPage}
                offset={offset}
                lastPage={lastPage} /></>
    );
};