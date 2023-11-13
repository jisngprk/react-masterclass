import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  background-color: tomato;
  border-radius: 15px;
  color: white;
  border: 1px solid white;
`

const Input = styled.input.attrs({required:true})`
  background-color: tomato;
`

function App() {
  return (
      <Father>
          <Btn>Login  </Btn>
          <Btn as="a">Login  </Btn>
          <Input />
          <Input />
          <Input />
      </Father>

  )


}

export default App;