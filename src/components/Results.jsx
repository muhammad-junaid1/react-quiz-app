import StyledResults from "../styles/StyledResults";

const Results = ({score, totalQuestions, dispatch, ACTIONS}) => {
    return (
        <>
            <StyledResults>
                <h1>Scoreboard</h1>
                <p>Total Questions<span>{totalQuestions}</span></p>
                <p>Correct Answers<span>{score}</span></p>

                <button onClick={() => dispatch({type: ACTIONS.RESTART_QUIZ})}>Restart</button>
            </StyledResults>
        </>
    );
}

export default Results;