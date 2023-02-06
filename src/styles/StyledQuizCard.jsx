import styled from "styled-components";

const StyledQuizCard = styled.div`
    background: white;
    width: 60%;
    height: 50%;
    border-radius: 8px;
    padding: 20px;

    @media all and (max-width: 768px) {
        width: 100%;
    }
`;

export default StyledQuizCard;