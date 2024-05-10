import { FileField, TextField, Textarea } from '@/components/Form';
import { requestOccurrenceCreation } from '@/services/axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useSession } from 'next-auth/react';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';
import { generateFormData } from './utils/functions';
import { createOccurrenceSchema } from './utils/schemas';
import { CreateOccurrenceType, ModalCreateOccurrenceProps } from './utils/types';

export default function ModalCreateOccurrence({ handleModal, isOpen }: ModalCreateOccurrenceProps) {
  const { data: session } = useSession()
  const userId = session?.token.user.id as string
  const occurrenceForm = useForm<CreateOccurrenceType>({
    resolver: zodResolver(createOccurrenceSchema),
  });

  const { handleSubmit, reset, watch } = occurrenceForm;

  const createOccurrence = async () => {
    const occurrence = watch();
    const formData = generateFormData(occurrence, userId);

    await requestOccurrenceCreation(formData)
  };

  const handleCloseModal = () => {
    handleModal();
    reset();
  };

  return (
    <Modal open={isOpen}>
      <S.ModalBox>
        <h2>Nova reclamação</h2>
        <Button onClick={handleCloseModal} variant="contained" color="warning">
          Fechar
        </Button>

        <FormProvider {...occurrenceForm}>
          <S.Form onSubmit={handleSubmit(createOccurrence)}>
            <TextField label="Título" name="title" type="text" />
            <Textarea label="Descrição" name="description" type="text" />
            <TextField label="Bairro" name="neighborhood" type="text" />
            <TextField label="Rua" name="street" type="text" />
            <TextField label="Referência (opcional)" name="reference" type="text" />
            <FileField name="image" />
            <Button type="submit" variant="contained" color="success">
              Finalizar
            </Button>
          </S.Form>
        </FormProvider>
      </S.ModalBox>
    </Modal>
  );
}
