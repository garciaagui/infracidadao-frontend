import { requestData } from '@/services/axios';
import { AccountCircleSharp, CalendarMonthSharp, CloseSharp, TagSharp } from '@mui/icons-material';
import { Grid, IconButton, List, Modal, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { OccurrenceType } from '../../utils/types';
import StatusChip from '../StatusChip';
import { IconChip, ListItem } from './components';
import { ModalContainer } from './styles';
import { formatModalData } from './utils/functions';
import { ModalOccurrenceDetailsProps } from './utils/types';

export default function ModalOccurrenceDetails({
  handleModal,
  handleNotification,
  occurrenceId,
  isOpen,
}: ModalOccurrenceDetailsProps) {
  const [apiData, setApiData] = useState<OccurrenceType>();

  const fetchApiData = async (id: number) => {
    try {
      const data = await requestData(`/occurrences/${id}`);
      const formattedData = formatModalData(data);
      setApiData(formattedData);
    } catch (error) {
      handleNotification('Erro ao encontrar informações, tente novamente', 'error');
    }
  };

  const handleCloseModal = () => {
    handleModal(0);
    setApiData(undefined);
  };

  useEffect(() => {
    if (occurrenceId && occurrenceId > 0) {
      fetchApiData(occurrenceId);
    }
  }, [occurrenceId]);

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <ModalContainer>
        {apiData && (
          <>
            <Grid container justifyContent="space-between">
              <Stack direction="column" spacing={1}>
                <h2>{apiData.title}</h2>
                <Stack direction="row" spacing={1}>
                  <IconChip
                    icon={<CalendarMonthSharp fontSize="small" />}
                    label={apiData.createdAt}
                  />
                  <StatusChip status={apiData.status} size="medium" />
                  <IconChip icon={<TagSharp fontSize="small" />} label={apiData.id} />
                  <IconChip icon={<AccountCircleSharp fontSize="small" />} label={'Usuário'} />
                </Stack>
              </Stack>

              <IconButton onClick={handleCloseModal} size="small" sx={{ alignSelf: 'start' }}>
                <CloseSharp />
              </IconButton>
            </Grid>

            <Image src={apiData.image} alt="image" width={700} height={500} />

            <Stack spacing={1}>
              <h3>Descrição</h3>
              <Typography>{apiData.description}</Typography>
            </Stack>

            <Stack>
              <h3>Localização</h3>
              <List dense={true} sx={{ padding: 0 }}>
                <ListItem primary="Bairro" secondary={apiData.neighborhood} />
                <ListItem primary="Logradouro" secondary={apiData.street} />
                <ListItem primary="CEP" secondary={apiData.zipCode} />
                <ListItem primary="Referência" secondary={apiData.reference || 'Sem referência'} />
              </List>
            </Stack>
          </>
        )}
      </ModalContainer>
    </Modal>
  );
}
