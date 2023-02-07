import styled from "styled-components";

const StyledProgress = styled.div`
    width: 100%;
    background: grey;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;

    div {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        transition: width .2s ease-in-out;
        width: ${({width}) => width};
        background: #ff00e0;
    }
`;

export default StyledProgress;