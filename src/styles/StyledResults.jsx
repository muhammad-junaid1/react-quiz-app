import styled from "styled-components";

const StyledResults = styled.div`
  background: #ff00e0;
  color: white;
  width: 30%;
  height: 60vh;
  border-radius: 8px;
  padding: 20px;
  overflowy: scroll;
  position: relative;

  h1 {
    text-align: center;
    text-decoration: underline;
    margin-bottom: 30px;
  }

  button {
    background: white;
    color: black;
    padding: 14px 18px;
    width: 90%;
    margin: 0 auto;
    border-radius: 4px;
    position: absolute;
    bottom: 15px;
    left: 0;
    font-weight: bold;
    right: 0;
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
      width: 50px;
      text-align: right;
    }
  }
`;

export default StyledResults;
