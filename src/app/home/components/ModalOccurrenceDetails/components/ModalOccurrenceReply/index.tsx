import { FileField, Textarea } from '@/components';
import { requestOccurrenceStatusUpdate, requestReplyCreation } from '@/services/axios';
import { CustomAxiosError } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowForwardIosSharp, CheckSharp } from '@mui/icons-material';
import { Button, Modal, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import StatusChip from '../../../StatusChip';
import { generateReplyFormData } from '../../utils/functions';
import { createReplySchema } from '../../utils/schemas';
import { CreateReplyType, ModalOccurrenceReplyProps } from '../../utils/types';
import { Form, ModalContainer } from './styles';

export default function ModalOccurrenceReply({
  handleModal,
  handleNotification,
  handleUpdateModalData,
  isOpen,
  loggedUserId,
  occurrenceData,
}: ModalOccurrenceReplyProps) {
  const replyForm = useForm<CreateReplyType>({
    resolver: zodResolver(createReplySchema),
  });

  const { handleSubmit, reset, watch } = replyForm;

  const handleCloseModal = () => {
    handleModal(0);
    reset();
  };

  const createReply = async () => {
    const reply = watch();
    const { id, status } = occurrenceData;
    const formData = generateReplyFormData(reply, id, loggedUserId);
    const newStatus = status === 'Aberto' ? 'Andamento' : 'Finalizado';

    try {
      await requestReplyCreation(formData);
      await requestOccurrenceStatusUpdate(id, newStatus);
      handleUpdateModalData();
      handleNotification('Status atualizado!', 'success');
      handleCloseModal();
    } catch (err) {
      const { response } = err as CustomAxiosError;
      const message = response?.data.message;
      handleNotification(message, 'error');
    }
  };

  return (
    <Modal open={isOpen}>
      <ModalContainer>
        <Stack direction="row" justifyContent={'space-between'}>
          <h2>Atualizar Status</h2>
          <Button
            color="warning"
            onClick={handleCloseModal}
            sx={{ color: 'white' }}
            variant="contained"
          >
            Cancelar
          </Button>
        </Stack>

        <Stack direction="row" spacing={1} alignItems={'center'}>
          <StatusChip status={occurrenceData.status} size="medium" />
          <ArrowForwardIosSharp fontSize="small" />
          <StatusChip
            status={occurrenceData.status === 'Aberto' ? 'Andamento' : 'Finalizado'}
            size="medium"
          />
        </Stack>

        <FormProvider {...replyForm}>
          <Form onSubmit={handleSubmit(createReply)}>
            <Textarea
              label="Descrição"
              name="description"
              placeholder="Descreva como está o processo para a solução do problema"
              type="text"
            />
            <FileField name="imageUrl" />
            <Button
              color="success"
              startIcon={<CheckSharp />}
              sx={{ marginTop: '1rem' }}
              type="submit"
              variant="contained"
            >
              Finalizar
            </Button>
          </Form>
        </FormProvider>
      </ModalContainer>
    </Modal>
  );
}
