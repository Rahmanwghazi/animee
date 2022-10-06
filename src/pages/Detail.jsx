import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Detail = () => {
    const [anime, setAnime] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    //fetch detail anime
    const getAnime = async () => {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
        const data = await response.json();
        setAnime(data);
    };

    useEffect(() => {
        getAnime();
    });

    console.log(anime.data);


    return (
        <div>
            <h1>Detail {id}</h1>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
            {anime.data && (
                <div>
                    <img src={anime.data.attributes.posterImage.small} alt="" />
                    <p>{anime.data.attributes.titles.en ? anime.data.attributes.titles.en : anime.data.attributes.titles.en_jp}</p>
                    <p>{anime.data.attributes.titles.ja_jp}</p>

                    <p>{anime.data.attributes.synopsis}</p>

                    <p>{anime.data.attributes.averageRating}</p>

                    <p>{anime.data.attributes.ageRatingGuide}</p>

                    <p>{anime.data.attributes.popularityRank}</p>

                    </div>
            )}

        </div>
    );
};