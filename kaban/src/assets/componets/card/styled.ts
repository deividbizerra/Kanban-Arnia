import  {styled}  from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 32px;
  padding: 30px;
  text-align: center;
}
`

export const Column = styled.div`
  border: 1px solid #676767;
  padding: 0.5rem;
  min-height: 100vh;
  background-color: #f2f2f2;
`

export const Box = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`

export const TextArea = styled.textarea `
    border-radius: 4px;
    margin-bottom: 10px;
    border-radius: 15px;
    margin-top: 15px;
    width: 100%;
    height: 110px;
  `

  export const Input = styled.input`
  width: 80%;
    padding: 4px;
    border-radius: 5px;
    margin-top: 30px;
  `