import { requestData } from '@/services/axios';
import { Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { OccurrenceType } from '../../utils/types';
import { ModalContainer } from './styles';
import { ModalOccurrenceDetailsProps } from './utils/types';

export default function ModalOccurrenceDetails({
  handleModal,
  occurrenceId,
  isOpen,
}: ModalOccurrenceDetailsProps) {
  const [apiData, setApiData] = useState<OccurrenceType>();

  const fetchApiData = async (id: number) => {
    const data = await requestData(`/occurrences/${id}`);
    setApiData(data);
  };

  useEffect(() => {
    if (occurrenceId && occurrenceId > 0) {
      fetchApiData(occurrenceId);
    }
  }, [occurrenceId]);

  return (
    <Modal open={isOpen}>
      {apiData ? (
        <ModalContainer>
          <h2>{apiData.title}</h2>
          <Button
            onClick={() => handleModal(0)}
            variant="contained"
            color="warning"
            sx={{ color: 'white' }}
          >
            Cancelar
          </Button>
        </ModalContainer>
      ) : (
        <p>Erro</p>
      )}
    </Modal>
  );
}
