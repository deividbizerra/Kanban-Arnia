import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  width: 245px;
  && input {
    padding: 6px;
    border-radius: 5px;
    border: none;
    width: 100%;
  }

  .formInputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }
`;

export const Container = styled.div`
  border-radius: 20px;
  background: #3a72f8;
  width: 330px;
  display: flex;
  justify-content: center;
  margin: 60px auto;
  min-height: 510px;
`;
