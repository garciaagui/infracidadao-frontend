'use client';

import Table from '@/components/Table';
import { requestData } from '@/services/axios';
import { useEffect, useState } from 'react';
import ModalCreateOccurrence from './components/ModalCreateOccurrence';
import { Button, Main } from './styles';
import { formatTableData } from './utils/functions';
import { TableDataType } from './utils/types';

export default function Home() {
  const [apiData, setApiData] = useState<TableDataType[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      const data = await requestData('/occurrences');
      const formattedData = formatTableData(data);
      setApiData(formattedData);
    };
    fetchApiData();
  }, []);

  const handleModal = () => setOpenModal(!openModal);

  return (
    <Main>
      <h1>Home page</h1>
      <Button variant="contained" size="large" color="secondary" onClick={handleModal}>
        + Abrir Reclamação
      </Button>
      <Table data={apiData} />
      <ModalCreateOccurrence isOpen={openModal} handleModal={handleModal} />
    </Main>
  );
}
