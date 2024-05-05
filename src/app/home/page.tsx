'use client';

import Table from '@/components/Table';
import { requestData } from '@/services/axios';
import { useEffect, useState } from 'react';
import { Button, Main } from './styles';
import { formatTableData } from './utils/functions';
import { TableDataType } from './utils/types';

export default function Home() {
  const [apiData, setApiData] = useState<TableDataType[]>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const data = await requestData('/occurrences');
      const formattedData = formatTableData(data);
      setApiData(formattedData);
    };
    fetchApiData();
  }, []);

  return (
    <Main>
      <h1>Home page</h1>
      <Button variant="contained" size="large" color="secondary">
        + Abrir Reclamação
      </Button>
      <Table data={apiData} />
    </Main>
  );
}
