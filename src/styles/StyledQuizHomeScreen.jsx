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
      position: relative;

      div {
        position: absolute;
        bottom: -55px;
        left: -30px;
        z-index: -5;

        span {
          font-size: 40px;
        }

        p {
          margin-top: -8px;
        }
      }
    }
  }
`;

export default StyledQuizHomeScreen;
