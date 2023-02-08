import { useContext } from "react";
import QuizCard from "./QuizCard";
import SelectDifficulty from "./steps/SelectDifficulty";
import SelectCategory from "./steps/SelectCategory";
import SelectTotalQuestions from "./steps/SelectTotalQuestions";
import { QuizStateContext } from "../contexts/QuizStateProvider";

const Quiz = () => {
  const {state, dispatch, ACTIONS} = useContext(QuizStateContext);
  switch (state.step) {
    case 1:
      return <SelectDifficulty dispatch={dispatch} ACTIONS={ACTIONS} />;
    case 2:
      return <SelectCategory dispatch={dispatch} ACTIONS={ACTIONS} />;
    case 3:
      return <SelectTotalQuestions dispatch={dispatch} ACTIONS={ACTIONS} />;
    case 4:
      return (
        <QuizCard/>
      );

    default:
      return;
  }
};

export default Quiz;
