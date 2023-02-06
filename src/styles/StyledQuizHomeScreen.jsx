import styled from "styled-components";

const StyledQuizHomeScreen = styled.div`
    text-align: center;
    h1 {
        font-size: 60px;
        color: white;
        font-weight: bold;     
    }

    button {
        margin-top: 25px;
        padding: 12px 20px;
        border-radius: 3px;
        font-weight: bold;

        &#yes {
            background: white;
        }

        &#no {
            background: red;
            color: white;
            margin-right: 15px;
        }
    }
`;

export default StyledQuizHomeScreen;