import StyledNextBtn from "../../styles/StyledNextBtn";
import StyledTotalQuestionsRange from "../../styles/StyledTotalQuestionsRange";
import { useState } from "react";

const SelectTotalQuestions = ({ dispatch, ACTIONS }) => {
  const [value, setValue] = useState(5);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickNext = () => {
    dispatch({
      type: ACTIONS.SET_TOTAL_QUESTIONS,
      payload: value,
    });

    dispatch({
      type: ACTIONS.SET_NEXT_STEP,
    });
  };
  return (
    <>
      <h2>Select Total Questions</h2>
      <StyledTotalQuestionsRange
        value={value}
        onChange={handleChange}
        type="range"
        step="5"
        min="0"
        max="30"
      ></StyledTotalQuestionsRange>
      <p>
        <strong>{value}</strong> Questions
      </p>
      <StyledNextBtn
        style={{ marginTop: 10 }}
        disabled={!parseInt(value)}
        onClick={handleClickNext}
      >
        Next
      </StyledNextBtn>
    </>
  );
};

export default SelectTotalQuestions;
