import StyledDifficultyBtns from "../../styles/StyledDifficultyBtns";

const SelectDifficulty = ({ dispatch, ACTIONS }) => {
  const handleClick = (level) => {
    dispatch({
      type: ACTIONS.SET_DIFFICULTY_LEVEL,
      payload: level,
    });
    dispatch({
      type: ACTIONS.SET_NEXT_STEP,
    });
  };
  return (
    <>
      <h2>Difficulty Mode</h2>
      <StyledDifficultyBtns>
        <button onClick={() => handleClick("easy")}>Easy</button>
        <button onClick={() => handleClick("medium")}>Medium</button>
        <button onClick={() => handleClick("hard")}>Hard</button>
      </StyledDifficultyBtns>
    </>
  );
};

export default SelectDifficulty;
