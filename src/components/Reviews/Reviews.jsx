import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "components/Api/Api";

import { Container, Info, Title, Text } from "./Reviews.styled";

const Reviews = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        setError(null)
        const getMovie = async () => {
        await getMovieReviews(id)
            .then(movie => setMovie(movie))
            .catch(error => setError(error));
        }
        getMovie()
    }, [id, error])
    
    return (
        <Container>
            {movie.results ? movie.results.map(item => 
            <Info key={item.id}>
            <Title>{item.author}</Title> 
            <Text>{item.content}</Text>
            </Info>    
            ) : <h3>Sorry, there is no content</h3>}
        </Container>
    )  
}
export default Reviews