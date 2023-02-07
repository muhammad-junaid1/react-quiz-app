import styled from "styled-components";

const StyledChoice = styled.div`
    border: 1.5px solid violet;
    border-radius: 4px;
    background: #eee;
    padding: 15px 10px;
    margin-bottom: 8px;
    cursor: pointer;
    width: 100%;
    user-select: none;

    &:hover {
        background: violet;
        color: white;
    }
`;

export default StyledChoice;