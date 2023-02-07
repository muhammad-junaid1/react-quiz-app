import styled from "styled-components";

const StyledNextBtn = styled.button`
    background: darkblue;
    color: white;
    padding: 10px 16px;
    font-family: inherit;
    border-radius: 4px;
    margin-right: 20px;
    align-self: flex-end;

    &:disabled {
        background: slategrey;
        color: #eee;
        cursor: no-drop;
    }
`;

export default StyledNextBtn;