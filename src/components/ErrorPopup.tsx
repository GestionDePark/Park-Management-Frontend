import { Snackbar, Typography } from '@mui/material';
import { useState } from 'react';
import { SnackbarOrigin } from '@mui/material/Snackbar/Snackbar';
import { MdErrorOutline } from 'react-icons/md';

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
      message={<Typography>{error.message}</Typography>}
      action={
        <Typography color="error">
          <MdErrorOutline />
        </Typography>
      }
    />
  );
};

export default ErrorPopup;
