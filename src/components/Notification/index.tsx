import { Alert, Snackbar } from '@mui/material';

type NotificationProps = {
  closeNotification: () => void;
  isOpen: boolean;
  message: string;
  result: string;
};

export default function Notification({
  closeNotification,
  isOpen,
  message,
  result,
}: NotificationProps) {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={closeNotification}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        severity={result === 'success' ? 'success' : 'error'}
        variant="filled"
        sx={{ width: '100%' }}
        onClose={closeNotification}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
