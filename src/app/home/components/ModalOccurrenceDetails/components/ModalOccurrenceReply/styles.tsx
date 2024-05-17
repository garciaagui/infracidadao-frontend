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
  row-gap: 1rem;
  transform: translate(-50%, -50%);
  top: 40%;
  width: 800px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
