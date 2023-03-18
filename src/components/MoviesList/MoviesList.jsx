import { useLocation } from "react-router-dom";
import { StyledLink, Item } from "./MoviesList.styled"; 
import PropTypes from 'prop-types';

export const MoviesList = ({movies}) => {
    const location = useLocation();
    return (
        <ul>
       {movies.map(({id, title}) => {
        return (
        <StyledLink key={id} to={`/movies/${id}`} state={{ from: location }}><Item>{title}</Item>
        </StyledLink>
        )} 
       )}
       </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}