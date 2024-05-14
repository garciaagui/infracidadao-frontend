'use client';

import { Header, Notification } from '@/components';
import { requestData } from '@/services/axios';
import theme from '@/styles/theme';
import { NOTIFICATION_INITIAL_STATE } from '@/utils/constants';
import { NotificationType, SeverityType } from '@/utils/types';
import { Add } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ModalCreateOccurrence, ModalOccurrenceDetails, Table } from './components';
import { Button, Main } from './styles';
import { formatTableData, sortApiDataByCreationDate } from './utils/functions';
import { TableDataType } from './utils/types';

export default function Home() {
  const [apiData, setApiData] = useState<TableDataType[]>([]);
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(0);
  const [notification, setNotification] = useState<NotificationType>(NOTIFICATION_INITIAL_STATE);

  const { data: session } = useSession();
  const userId = session?.token.user.id as string;
  const role = session?.token.user.role as string;

  const fetchApiData = async () => {
    const data = await requestData('/occurrences');
    const sortedData = sortApiDataByCreationDate(data);
    const formattedData = formatTableData(sortedData);
    setApiData(formattedData);
  };

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isOpen: false }));
  };

  const handleCreationModal = () => setOpenCreationModal(!openCreationModal);
  const handleDetailsModal = (id: number) => setOpenDetailsModal(id);

  const handleNotification = (message: string, severity: SeverityType) => {
    setNotification({ isOpen: true, message, severity });
  };

  const handleUpdateTableData = () => {
    fetchApiData();
  };

  useEffect(() => {
    if (session) {
      handleNotification('Usuário logado', 'success');
    } else {
      handleNotification('Faça o login para abrir reclamações', 'warning');
    }
    fetchApiData();
  }, [session?.token.user.id]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Main>
          <h1>Início</h1>
          {role === 'user' && (
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleCreationModal}
              sx={{ fontWeight: 'bold' }}
              startIcon={<Add />}
            >
              Abrir Reclamação
            </Button>
          )}
          <Table data={apiData} handleModal={handleDetailsModal} />
        </Main>
        <ModalCreateOccurrence
          isOpen={openCreationModal}
          handleModal={handleCreationModal}
          handleNotification={handleNotification}
          handleUpdateTableData={handleUpdateTableData}
          userId={userId}
        />
        <ModalOccurrenceDetails
          isOpen={openDetailsModal > 0 ? true : false}
          handleModal={handleDetailsModal}
        />
        <Notification closeNotification={closeNotification} {...notification} />
      </>
    </ThemeProvider>
  );
}
