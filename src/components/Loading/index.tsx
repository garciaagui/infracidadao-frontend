import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
}
