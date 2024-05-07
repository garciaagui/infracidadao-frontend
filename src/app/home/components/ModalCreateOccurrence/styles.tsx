import styled from 'styled-components';

export const ModalBox = styled.section`
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  left: 50%;
  padding: 16px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  width: 600px;
  min-height: 600px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
