import styled from 'styled-components';

export const ModalContainer = styled.section`
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  height: auto;
  left: 50%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.4rem;
  position: absolute;
  row-gap: 2rem;
  transform: translate(-50%, -50%);
  top: 45%;
  width: 700px;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: grey;
  }
`;

export const TitleCancelButtonContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LocationFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem 1rem 2rem;

  & > legend {
    color: grey;
    font-weight: bold;
  }
`;
