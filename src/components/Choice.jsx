import StyledChoice from "../styles/StyledChoice";

const Choice = ({text, onClick}) => {
    return (
        <>
            <StyledChoice onClick={onClick}>
                {text}
            </StyledChoice>
        </>
    );
}

export default Choice;