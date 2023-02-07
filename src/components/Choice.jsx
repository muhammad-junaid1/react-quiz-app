import StyledChoice from "../styles/StyledChoice";

const Choice = ({text, onClick, disabled}) => {
    return (
        <>
            <StyledChoice {...(!disabled && {onClick: onClick})}>
                {text}
            </StyledChoice>
        </>
    );
}

export default Choice;