import { Button } from "@mui/material";

export default function Home() {
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
    </main>
  );
}
