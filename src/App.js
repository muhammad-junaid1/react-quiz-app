import StyledContainer from "./styles/StyledContainer";
import Home from "./components/Home";
import QuizStateProvider from "./contexts/QuizStateProvider";

const App = () => {
  return <QuizStateProvider>
    <StyledContainer>
          <Home/>
    </StyledContainer>
  </QuizStateProvider>;
}

export default App;