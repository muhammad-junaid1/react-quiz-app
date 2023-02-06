import StyledChoice from "../styles/StyledChoice";

const Choice = ({text}) => {
    return (
        <>
            <StyledChoice>
                {text}
            </StyledChoice>
        </>
    );
}

export default Choice;