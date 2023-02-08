import styled from "styled-components";

const StyledQuizCard = styled.div`
  background: white;
  width: 65%;
  padding: 70px 30px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
    @media all and (max-width: 768px) {
      flex-direction: column !important;
    }

  .left {
    width: 50%;
    padding-right: 20px;

    @media all and (max-width: 768px) {
      padding-right: 0px;
      width: 100%;
    }
  }

  .right {
    width: 50%;

    @media all and (max-width: 768px) {
      width: 100%;
      margin-top: 25px;
    }
  }

  h1 {
    margin-bottom: 8px;
    span {
      font-size: 16px;
      font-weight: light;
    }
  }

  p {
    font-size: 18px;
  }

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;

export default StyledQuizCard;
