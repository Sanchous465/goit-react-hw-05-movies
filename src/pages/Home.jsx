import { useState, useEffect } from 'react';
import { getPopularFilms } from "components/Api/Api";
import { MoviesList } from 'components/MoviesList/MoviesList';
import styled from '@emotion/styled';
const Title = styled.h1`
    margin-bottom: 20px;
`;

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setError(null)
       const getFetch = async () => {
        await getPopularFilms()
        .then(movie => {
            setMovies(movie.results)
        })
        .catch(error => setError(error))
       }
        getFetch()
    }, [error])
    
    return (
        <div> 
            <Title>Trending Today:</Title>
            <MoviesList movies={movies}/>
        </div>
    )
};

export default Home