import { FileField, TextField, Textarea } from '@/components/Form';
import { requestOccurrenceCreation } from '@/services/axios';
import { CustomAxiosError } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';
import { generateFormData, handleZipCodeValue } from './utils/functions';
import { createOccurrenceSchema } from './utils/schemas';
import { CreateOccurrenceType, ModalCreateOccurrenceProps } from './utils/types';

export default function ModalCreateOccurrence({
  handleModal,
  handleNotification,
  handleUpdateTableData,
  isOpen,
  userId,
}: ModalCreateOccurrenceProps) {
  const occurrenceForm = useForm<CreateOccurrenceType>({
    resolver: zodResolver(createOccurrenceSchema),
  });

  const { handleSubmit, reset, watch } = occurrenceForm;

  const handleCloseModal = () => {
    handleModal();
    reset();
  };

  const createOccurrence = async () => {
    const occurrence = watch();
    const formData = generateFormData(occurrence, userId);

    try {
      await requestOccurrenceCreation(formData);
      handleUpdateTableData();
      handleNotification('Reclamação registrada!', 'success');
      handleCloseModal();
    } catch (err) {
      const { response } = err as CustomAxiosError;
      const message = response?.data.message;
      handleNotification(message, 'error');
    }
  };

  return (
    <Modal open={isOpen}>
      <S.ModalContainer>
        <S.TitleCancelButtonContainer>
          <h2>Nova reclamação</h2>
          <Button onClick={handleCloseModal} variant="contained" color="warning">
            Cancelar
          </Button>
        </S.TitleCancelButtonContainer>

        <FormProvider {...occurrenceForm}>
          <S.Form onSubmit={handleSubmit(createOccurrence)}>
            <TextField label="Título" name="title" type="text" />
            <Textarea label="Descrição" name="description" type="text" />

            <S.LocationFieldset>
              <legend>Localização</legend>
              <TextField label="Rua" name="street" type="text" />
              <TextField label="Bairro" name="neighborhood" type="text" />
              <TextField
                label="CEP"
                name="zipCode"
                type="text"
                onChange={(e) => handleZipCodeValue(e)}
                maxLength={10}
              />
              <TextField label="Referência (opcional)" name="reference" type="text" />
            </S.LocationFieldset>

            <FileField name="image" />
            <Button type="submit" variant="contained" color="success" sx={{ marginTop: '1rem' }}>
              Finalizar
            </Button>
          </S.Form>
        </FormProvider>
      </S.ModalContainer>
    </Modal>
  );
}
