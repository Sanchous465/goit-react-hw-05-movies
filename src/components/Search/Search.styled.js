import styled from '@emotion/styled';

export const FormEl = styled.form`
    width: 300px;
`;

export const Input = styled.input`
    padding: 5px 10px;
    margin-right: 10px;
    &:focus {
        outline-color: red;
    }
`;
export const Button = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    border-color: transparent;
    
    &:hover {
        color: red;
        transform: scale(1.1);
    }
    &:focus {
        color: red;
        transform: scale(1.1);
    }
`