import StyledResults from "../styles/StyledResults";

const Results = ({state, dispatch, ACTIONS}) => {
    return (
        <>
            <StyledResults>
                <h1>Scoreboard</h1>
                <p>Total Questions<span>{state.totalQuestions}</span></p>
                <p>Correct Answers<span>{state.score}</span></p>

                <button onClick={() => dispatch({type: ACTIONS.RESTART_QUIZ})}>Restart</button>
            </StyledResults>
        </>
    );
}

export default Results;