import StyledQuizCard from "../styles/StyledQuizCard";
import Choice from "./Choice";

const QuizCard = ({currQuestionIdx, totalQuestions, questionData}) => {
    const randIdx = Math.floor(Math.random() * questionData.incorrectAnswers.length);
    questionData.incorrectAnswers.splice(randIdx, null, questionData.correctAnswer);
    return (
        <>
            <StyledQuizCard>
                <div className="left">
                    <h1>Question No {currQuestionIdx + 1}<span>/{totalQuestions}</span></h1>
                    <p>{questionData.question}</p>
                </div>
                <div className="right">
                    {questionData.incorrectAnswers.map((choice, idx) => {
                        return <Choice key={idx} text={choice}/>;
                    })}
                </div>
            </StyledQuizCard>
        </>
    );
}

export default QuizCard;