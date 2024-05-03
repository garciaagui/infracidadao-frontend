"use client";

import Table from "@/components/Table";
import { requestData } from "@/services/axios";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { formatTableData } from "./_utils/functions";
import { TableDataType } from "./_utils/types";

export default function Home() {
  const [apiData, setApiData] = useState<TableDataType[]>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const data = await requestData("/occurrences");
      const formattedData = formatTableData(data);
      setApiData(formattedData);
    };
    fetchApiData();
  }, []);

  return (
    <main>
      <h1>Home page</h1>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        sx={{ fontWeight: "bold" }}
      >
        + Abrir Reclamação
      </Button>
      <Table data={apiData} />
    </main>
  );
}
