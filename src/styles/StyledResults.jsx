import styled from "styled-components";

const StyledResults = styled.div`
    background: hotpink;
    color: white;
    width: 30%;
    height: 60vh;
    border-radius: 8px;
    padding: 20px;
    overflowY: scroll;

    h1 {
        text-align: center;
        text-decoration: underline;
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;

        span {
            background: white;
            color: black;
            border-radius: 3px;
            padding: 3px 18px;
            font-weight: bold;
        }
    }
`;

export default StyledResults;