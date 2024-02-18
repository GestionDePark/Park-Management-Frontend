import { Button, Dialog, DialogProps } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import StyleSheet from '@/utils/StyleSheet';
import { useForm } from 'react-hook-form';
import { JobData, JobInput } from '@/api/types';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import JobProvider from '@/api/providers/JobProvider';

interface Props extends DialogProps {
  onCloseClick(): void;
  onAddedData(data: JobData): void;
}

const AddJobDialog = ({ onCloseClick, onAddedData, ...props }: Props) => {
  const form = useForm<JobInput>();

  const handleDataToSend = async (data: JobInput) => {
    const response = await JobProvider.create(data);
    onAddedData(response);
    onCloseClick();
  };

  const handleClose = () => {
    if (onCloseClick) {
      onCloseClick();
    }
    form.reset();
  };

  return (
    <Dialog
      {...props}
      fullWidth
      open={props.open}
      PaperProps={{
        component: 'form',
        sx: styles.dialog,
      }}
      onClose={handleClose}
      sx={styles.dialogBackdrop}
      onSubmit={form.handleSubmit(handleDataToSend)}
    >
      <DialogTitle>Add new job</DialogTitle>
      <DialogContent>
        <div className="py-4">
          <TextField
            fullWidth
            label={form.formState.errors.name?.message || 'Name'}
            error={!!form.formState.errors.name?.message}
            {...form.register('name', { required: 'required value' })}
          />
        </div>
      </DialogContent>
      <DialogActions sx={styles.actions}>
        <Button variant="outlined" onClick={onCloseClick}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const styles = StyleSheet({
  dialogBackdrop: {
    backdropFilter: 'blur(3px)',
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1.2rem',
  },
  actions: {
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default AddJobDialog;
