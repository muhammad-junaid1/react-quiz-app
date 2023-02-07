import StyledResults from "../styles/StyledResults";

const Results = ({score, totalQuestions}) => {
    return (
        <>
            <StyledResults>
                <h1>Scoreboard</h1>
                <p>Total Questions<span>{totalQuestions}</span></p>
                <p>Correct Answers<span>{score}</span></p>
            </StyledResults>
        </>
    );
}

export default Results;