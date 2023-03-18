import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Suspense } from "react";
import { getSearchMoviesById } from 'components/Api/Api';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackButton/BackButton';
import {
  ContainerInfo,
  OverView,
  Container,
  Title,
  Text,
  List,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setError(null);
    const getMovie = async () => {
      await getSearchMoviesById(id)
        .then(movie => setMovie(movie))
        .catch(error => setError(error));
    };
    getMovie();
  }, [id, error]);

  const { title, poster_path, release_date, overview, genres } = movie;

  const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <main>
      <BackLink to={backLinkHref.current}>Back to products</BackLink>
      <Container>
        <ContainerInfo>
          <img src={IMAGE_BASE_URL} alt={title} width="350" height="380" />
        </ContainerInfo>
        <div>
          <Title>
            {title}({release_date ? release_date.slice(0, 4) : ''})
          </Title>
          <OverView>Overview: {overview}</OverView>
          <Text>
            Genres: {genres ? genres.map(item => `${item.name} `) : ''}
          </Text>
        </div>
      </Container>
      <Title>Aditional information</Title>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
    </main>
  );
};
export default MovieDetails;