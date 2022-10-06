import { useEffect, useState } from "react";
import { Card } from "./Card";


export const AnimeList = () => {
    const [animeList, setAnimeList] = useState([]);

    const getAnime = async () => {
        const response = await fetch("https://kitsu.io/api/edge/anime");
        const data = await response.json();
        setAnimeList(data);
    };

    useEffect(() => {
        getAnime();
    }, []);

    console.log("ini", animeList.data);
    return (
        <div>
            <h1>Anime List</h1>
            {animeList.data && animeList.data.map((anime) => (
                <Card
                    key={anime.id}
                    id={anime.id}
                    enTitle={anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp}
                    jpTitle={anime.attributes.titles.ja_jp}
                    img={anime.attributes.posterImage.small}
                />
            ))}
        </div>
    );
};