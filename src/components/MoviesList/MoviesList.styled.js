import { Link } from "react-router-dom";
import styled from '@emotion/styled';


export const StyledLink = styled(Link)`
    text-decoration: none;
    color: grey;
    font-size: 18px;
    padding: 5px 0;
    &:hover {
        color: red;
    }
    &:focus {
        color: red;
    }
`
export const Item = styled.li`
    margin-bottom: 10px;
`