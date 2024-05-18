import { StatusType } from '@/app/home/utils/types';
import { FileField, Textarea } from '@/components';
import { requestOccurrenceStatusUpdate, requestReplyCreation } from '@/services/axios';
import { CustomAxiosError } from '@/utils/types';
import { zodResolver } from '@hookform/resolvers/zod';
import * as I from '@mui/icons-material';
import { Button, Modal, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import StatusChip from '../../../StatusChip';
import { generateReplyFormData } from '../../utils/functions';
import { createReplySchema } from '../../utils/schemas';
import { CreateReplyFormType, ModalOccurrenceReplyProps } from '../../utils/types';
import IconChip from '../IconChip';
import { Form, ModalContainer } from './styles';

export default function ModalOccurrenceReply({
  handleModal,
  handleNotification,
  handleUpdateModalData,
  isOpen,
  loggedUserId,
  occurrenceData,
}: ModalOccurrenceReplyProps) {
  const replyForm = useForm<CreateReplyFormType>({
    resolver: zodResolver(createReplySchema),
  });

  const { handleSubmit, reset, watch } = replyForm;

  const handleCloseModal = () => {
    handleModal(0);
    reset();
  };

  const createReply = async () => {
    const replyData = watch();
    const { id, status } = occurrenceData;
    const newStatus: Exclude<StatusType, 'Aberto'> =
      status === 'Aberto' ? 'Andamento' : 'Finalizado';

    const creationData = {
      ...replyData,
      userId: loggedUserId,
      occurrenceId: id,
      occurrenceStatus: newStatus,
    };
    const formData = generateReplyFormData(creationData);

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
          <IconChip
            label={occurrenceData.status}
            icon={
              occurrenceData.status === 'Aberto' ? <I.ErrorOutlineSharp /> : <I.AutorenewSharp />
            }
          />
          <I.ArrowForwardIosSharp fontSize="small" />
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
              startIcon={<I.CheckSharp />}
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
