import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useState } from 'react';
import { SnackbarOrigin } from '@mui/material/Snackbar/Snackbar';

interface Props {
  error: Partial<Error>;
  onClose?(): void;
}

const anchor: SnackbarOrigin = { horizontal: 'right', vertical: 'bottom' };

const ErrorPopup = ({ error, onClose }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={anchor}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert
        elevation={5}
        severity="error"
        variant="outlined"
        sx={{ minWidth: '15rem' }}
      >
        <AlertTitle sx={{ fontWeight: 'bold' }}>Error</AlertTitle>
        {error.message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorPopup;
