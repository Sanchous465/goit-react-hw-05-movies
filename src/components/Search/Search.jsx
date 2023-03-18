import { getSearchMovies } from 'components/Api/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { FormEl, Input, Button } from 'components/Search/Search.styled';

export const Search = () => {
    const [name, setName] = useState('');
    const [movies, setMovies] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setName(e.currentTarget.elements.name.value)
    
    }
   
    useEffect(() => {
       const getFetch = async () => {
        if(name.trim() === '') {
            return
        }
        await getSearchMovies(name)
        .then(movie => {
            setMovies(movie.results)
        })
        .catch(error => console.log(error))
       }
        getFetch()
    }, [name])

    return (
        <FormEl onSubmit={handleSubmit}> 
            <Input type="text" name="name" />
            <Button type="submit">Search</Button>
            <MoviesList movies={movies} />
        </FormEl>
    )
}