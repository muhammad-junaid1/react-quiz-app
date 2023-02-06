import StyledContainer from "./styles/StyledContainer";
import StyledQuizCard from "./styles/StyledQuizCard";
import StyledQuizHomeScreen from "./styles/StyledQuizHomeScreen";

function App() {
  return (
    <>
      <StyledContainer>
        {/* <StyledQuizCard>
            <h1>Quiz</h1>
        </StyledQuizCard> */}

        <StyledQuizHomeScreen>
            <h1>Ready For The Quiz?</h1>
            <button id="no">Nah, Never<div>
              <span>&#8599;</span> 
              <p>Don't click this</p>
            </div></button>
            <button id="yes">Yes I'm in </button>
        </StyledQuizHomeScreen>
      </StyledContainer>
    </>
  );
}

export default App;
