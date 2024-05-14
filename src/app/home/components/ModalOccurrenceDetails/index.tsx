import { Button, Modal } from '@mui/material';
import { ModalContainer } from './styles';
import { ModalOccurrenceDetailsProps } from './utils/types';

export default function ModalOccurrenceDetails({
  handleModal,
  isOpen,
}: ModalOccurrenceDetailsProps) {
  return (
    <Modal open={isOpen}>
      <ModalContainer>
        <Button onClick={handleModal} variant="contained" color="warning" sx={{ color: 'white' }}>
          Cancelar
        </Button>
      </ModalContainer>
    </Modal>
  );
}
