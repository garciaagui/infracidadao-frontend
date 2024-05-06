// 'use client';

import Modal from '@mui/material/Modal';
import * as S from './styles';

type ModalCreateOccurrenceProps = {
  handleModal: () => void;
  isOpen: boolean;
};

export default function ModalCreateOccurrence({ handleModal, isOpen }: ModalCreateOccurrenceProps) {
  return (
    <Modal open={isOpen}>
      <S.ModalBox>
        <h2>Nova reclamação</h2>
        <button onClick={handleModal}>Fechar</button>
        <form></form>
      </S.ModalBox>
    </Modal>
  );
}
