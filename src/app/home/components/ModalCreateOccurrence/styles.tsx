import styled from 'styled-components';

export const ModalContainer = styled.section`
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  left: 50%;
  min-height: auto;
  padding: 1.4rem;
  position: absolute;
  row-gap: 2rem;
  transform: translate(-50%, -50%);
  top: 40%;
  width: 700px;
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
