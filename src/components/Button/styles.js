import styled from "styled-components"

export const MyButton = styled.button`
border:none;
text-align:center;
background-color:black;
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
