"use client";

import Table from "@/components/Table";
import { requestData } from "@/services/axios";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { OccurrenceType } from "./_utils/types";

export default function Home() {
  const [apiData, setApiData] = useState<OccurrenceType[]>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const occurrences = await requestData("/occurrences");
      setApiData(occurrences);
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
