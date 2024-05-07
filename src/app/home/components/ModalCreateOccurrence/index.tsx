import { FileField, TextField, Textarea } from '@/components/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';
import { createOccurrenceSchema } from './utils/schemas';
import { CreateOccurrenceType, ModalCreateOccurrenceProps } from './utils/types';

export default function ModalCreateOccurrence({ handleModal, isOpen }: ModalCreateOccurrenceProps) {
  const occurrenceForm = useForm<CreateOccurrenceType>({
    resolver: zodResolver(createOccurrenceSchema),
  });

  const { handleSubmit } = occurrenceForm;

  const createOccurrence = () => {
    console.log('Reclamação criada com sucesso!');
  };

  return (
    <Modal open={isOpen}>
      <S.ModalBox>
        <h2>Nova reclamação</h2>
        <Button onClick={handleModal} variant="contained" color="warning">
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
