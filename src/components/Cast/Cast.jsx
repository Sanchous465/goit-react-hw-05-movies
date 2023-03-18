import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCast } from "components/Api/Api";
import { Container, Title, Item } from "./Cast.styled";

const Cast = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        setError(null)
        const getMovie = async () => {
        await getMovieCast(id)
            .then(movie => setMovie(movie))
            .catch(error => setError(error));
        }
        getMovie()
    }, [id, error])
    const {cast} = movie
    return (
        <Container> 
            {cast ? cast.map(({id, profile_path, name, character}) => 
            <ul key={id}>
                <Item>
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} 
                    alt={name} 
                    width="250" 
                    />
                </Item>
                <Item>
                <Title>{name}</Title>
                </Item>
                <Item>
                    <p>Character: {character}</p>
                </Item>
            </ul>) : ''}
        </Container>
    )  
}
export default Cast