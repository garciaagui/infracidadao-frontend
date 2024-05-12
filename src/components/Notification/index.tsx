import { Alert, Snackbar } from '@mui/material';

type NotificationProps = {
  closeNotification: () => void;
  isOpen: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning';
};

export default function Notification({
  closeNotification,
  isOpen,
  message,
  severity,
}: NotificationProps) {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={closeNotification}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
        onClose={closeNotification}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
