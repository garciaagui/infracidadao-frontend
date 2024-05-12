'use client';

import Notification from '@/components/Notification';
import Table from '@/components/Table';
import { requestData } from '@/services/axios';
import { NOTIFICATION_INITIAL_STATE } from '@/utils/constants';
import { NotificationType, SeverityType } from '@/utils/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import ModalCreateOccurrence from './components/ModalCreateOccurrence';
import { Button, Main } from './styles';
import { formatTableData } from './utils/functions';
import { TableDataType } from './utils/types';

export default function Home() {
  const [apiData, setApiData] = useState<TableDataType[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(NOTIFICATION_INITIAL_STATE);

  const { data: session } = useSession();
  const userId = session?.token.user.id as string;
  const role = session?.token.user.role as string;

  const fetchApiData = async () => {
    const data = await requestData('/occurrences');
    const formattedData = formatTableData(data);
    setApiData(formattedData);
  };

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isOpen: false }));
  };

  const handleModal = () => setOpenModal(!openModal);

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
  }, [session]);

  return (
    <Main>
      <h1>Home page</h1>
      {role === 'user' && (
        <Button variant="contained" size="large" color="secondary" onClick={handleModal}>
          + Abrir Reclamação
        </Button>
      )}
      <Table data={apiData} />
      <ModalCreateOccurrence
        isOpen={openModal}
        handleModal={handleModal}
        handleNotification={handleNotification}
        handleUpdateTableData={handleUpdateTableData}
        userId={userId}
      />
      <Notification closeNotification={closeNotification} {...notification} />
    </Main>
  );
}
