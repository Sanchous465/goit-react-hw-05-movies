import { Search } from "components/Search/Search";
import styled from '@emotion/styled';
const Title = styled.h1`
    margin-bottom: 20px;
`;
const Movies = () => {
    return (
        <main>
            <Title>Search Movies: </Title>
            <Search /> 
        </main>
    )
};
export default Movies