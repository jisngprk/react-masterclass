import styled from "styled-components"
import {useState} from "react";


interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.borderColor};
  margin: 20px;
`;


function Circle({bgColor, borderColor="yellow", text="default text"} : CircleProps) {
    const [counter, setCounter] = useState<number | string>(0)
    setCounter("hello")
    return <Container bgColor={bgColor} borderColor={borderColor} >
        {text}
    </Container>;
}


export default Circle;