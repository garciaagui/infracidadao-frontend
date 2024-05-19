import styled from 'styled-components';

export const ModalContainer = styled.section`
  align-content: start;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  display: grid;
  height: auto;
  left: 50%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
  position: absolute;
  row-gap: 1.5rem;
  top: 50%;
  transform: translate(-50%, -50%);
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
