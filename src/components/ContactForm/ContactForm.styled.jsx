import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 12px;
  background-color: transparent;
  border: 2px solid blueviolet;
  border-radius: 5px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: blueviolet;
  font-size: 18px;
`;

export const Input = styled.input`
  color: blank;
  padding: 5px 10px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 5px solid blueviolet;
  color: blueviolet;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: blueviolet;
    color: white
  }
`;
