import { requestData } from '@/services/axios';
import { AccountCircleSharp, CalendarMonthSharp, CloseSharp, TagSharp } from '@mui/icons-material';
import { Button, Grid, IconButton, List, Modal, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { OccurrenceType, UserType } from '../../utils/types';
import StatusChip from '../StatusChip';
import { IconChip, ListItem, ModalOccurrenceReply } from './components';
import { ModalContainer } from './styles';
import { formatOccurrenceData } from './utils/functions';
import { ModalOccurrenceDetailsProps } from './utils/types';

export default function ModalOccurrenceDetails({
  handleModal,
  handleNotification,
  handleUpdateTableData,
  occurrenceId,
  isOpen,
  loggedUser,
}: ModalOccurrenceDetailsProps) {
  const [occurrence, setOccurrence] = useState<OccurrenceType>();
  const [user, setUser] = useState<UserType>();
  const [openReplyModal, setOpenReplyModal] = useState(0);

  const fetchApiData = async (id: number) => {
    try {
      const occurrenceData = await requestData<OccurrenceType>(`/occurrences/${id}`);
      const userData = await requestData<UserType>(`/users/${occurrenceData.userId}`);
      const formattedOccurrenceData = formatOccurrenceData(occurrenceData);
      setOccurrence(formattedOccurrenceData);
      setUser(userData);
    } catch (error) {
      handleNotification('Erro ao encontrar informações, tente novamente', 'error');
    }
  };

  const handleCloseModal = () => {
    handleModal(0);
    setOccurrence(undefined);
  };

  const handleReplyModal = (id: number) => setOpenReplyModal(id);

  const handleUpdateModalData = () => {
    fetchApiData(occurrenceId);
    handleUpdateTableData();
  };

  useEffect(() => {
    if (occurrenceId && occurrenceId > 0) {
      fetchApiData(occurrenceId);
    }
  }, [occurrenceId]);

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <ModalContainer>
        {occurrence && user && (
          <>
            <Grid container justifyContent="space-between">
              <Stack direction="column" spacing={1}>
                <h2>{occurrence.title}</h2>
                <Stack direction="row" spacing={1}>
                  <IconChip
                    icon={<CalendarMonthSharp fontSize="small" />}
                    label={occurrence.createdAt}
                  />
                  <StatusChip status={occurrence.status} size="medium" />
                  <IconChip icon={<TagSharp fontSize="small" />} label={occurrence.id} />
                  <IconChip icon={<AccountCircleSharp fontSize="small" />} label={user.name} />
                </Stack>
              </Stack>

              <IconButton onClick={handleCloseModal} size="small" sx={{ alignSelf: 'start' }}>
                <CloseSharp />
              </IconButton>
            </Grid>

            <Image src={occurrence.image} alt="image" width={700} height={500} />

            <Stack spacing={1}>
              <h3>Descrição</h3>
              <Typography>{occurrence.description}</Typography>
            </Stack>

            <Stack>
              <h3>Localização</h3>
              <List dense={true} sx={{ padding: 0 }}>
                <ListItem primary="Bairro" secondary={occurrence.neighborhood} />
                <ListItem primary="Logradouro" secondary={occurrence.street} />
                <ListItem primary="CEP" secondary={occurrence.zipCode} />
                <ListItem
                  primary="Referência"
                  secondary={occurrence.reference || 'Sem referência'}
                />
              </List>
            </Stack>

            {loggedUser?.role === 'employee' && occurrence.status !== 'Finalizado' && (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleReplyModal(occurrenceId)}
                >
                  Atualizar Status
                </Button>
                <ModalOccurrenceReply
                  isOpen={openReplyModal > 0 ? true : false}
                  loggedUserId={loggedUser?.id}
                  handleModal={handleReplyModal}
                  handleNotification={handleNotification}
                  handleUpdateModalData={handleUpdateModalData}
                  occurrenceData={occurrence}
                />
              </>
            )}
          </>
        )}
      </ModalContainer>
    </Modal>
  );
}
