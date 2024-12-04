import styled from "styled-components"

export const MyButton = styled.button`
border: ${props => props.theme === 'primary' ? 'none' : '1px solid aqua'};
text-align:center;
background: ${(props) => props.theme === 'primary' ? 'blue' : 'transparent'};
font-size:25px;
color:aqua;
width: fit-content;
cursor: pointer;
border-radius:30px;
&:hover{
    opacity: 0.8;
}

&:active {
    opacity:0.5;
}
`
