import styled from "styled-components";
import Circle from "./Circle";

function App() {
    return (
        <div>
            <Circle bgColor={"teal"}/>
            <Circle bgColor={"tomato"} borderColor={"black"} text={"Hello"}/>
        </div>
    );


}

export default App;