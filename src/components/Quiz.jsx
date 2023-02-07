
import QuizCard from "./QuizCard";
import SelectDifficulty from "./steps/SelectDifficulty";
import SelectCategory from "./steps/SelectCategory";
import SelectLimit from "./steps/SelectLimit";

const Quiz = ({state, dispatch, ACTIONS}) => {
        switch(state.step) {
            case 1:
                return <SelectDifficulty dispatch={dispatch} ACTIONS={ACTIONS}/>;
            case 2:
                return <SelectCategory dispatch={dispatch} ACTIONS={ACTIONS}/>;
            case 3:
                return <SelectLimit dispatch={dispatch} ACTIONS={ACTIONS}/>;
            case 4:
                return <QuizCard stateObj={state} dispatch={dispatch} ACTIONS={ACTIONS} />

            default: 
                return;
        }
}

export default Quiz;