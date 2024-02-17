import { UseFormReturn } from 'react-hook-form';
import { Forms } from './AddEmployeeDialog';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, InputLabel, Typography } from '@mui/material';
import StyleSheet from '@/utils/StyleSheet';
import DialogActions from '@mui/material/DialogActions';

interface Props {
  form: UseFormReturn<Forms>;
}

const FirstForm = ({ form }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="center-flex gap-2">
        <TextField
          fullWidth
          error={!!form.formState.errors.user?.firstName}
          label={form.formState.errors.user?.firstName?.message || 'Firstname'}
          {...form.register('user.firstName', { required: 'required value' })}
        />
        <TextField
          fullWidth
          error={!!form.formState.errors.user?.lastName}
          label={form.formState.errors.user?.lastName?.message || 'Lastname'}
          {...form.register('user.lastName', { required: 'required value' })}
        />
      </div>
      <TextField
        fullWidth
        error={!!form.formState.errors.user?.email}
        label={form.formState.errors.user?.email?.message || 'Email'}
        {...form.register('user.email', { required: 'required value' })}
      />
      <TextField
        fullWidth
        type="password"
        error={!!form.formState.errors.user?.password}
        label={form.formState.errors.user?.password?.message || 'Password'}
        {...form.register('user.password', { required: 'required value' })}
      />
      <DialogActions sx={styles.actions}>
        <InputLabel sx={styles.checkBoxLabel}>
          <Checkbox {...form.register('user.isAdmin')} />
          <Typography width="fit-content">Admin privilege</Typography>
        </InputLabel>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </DialogActions>
    </div>
  );
};

const styles = StyleSheet({
  checkBoxLabel: {
    display: 'flex',
    gap: '.2rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FirstForm;
