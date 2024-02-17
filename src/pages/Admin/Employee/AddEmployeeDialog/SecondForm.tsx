import { SyntheticEvent, useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Autocomplete, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import StyleSheet from '@/utils/StyleSheet';
import { Forms } from './AddEmployeeDialog';
import JobProvider from '@/api/providers/JobProvider';
import { JobData } from '@/api/types';
import useErrorPopup from '@/hooks/useErrorPopup';

interface Props {
  form: UseFormReturn<Forms>;
  onPreviousClick(): void;
}

const SecondForm = ({ onPreviousClick, form }: Props) => {
  const [firstRender, setFirstRender] = useState(true);
  const [jobList, setJobList] = useState<JobData[]>([]);
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (firstRender || jobList.length === 0) {
      setFirstRender(false);
      JobProvider.findAll().then(setJobList).catch(setErrorNode);
    }
  });

  const handleChange = (_: SyntheticEvent, value: JobData | null) => {
    if (value) {
      form.setValue('job.id', value?.id);
      form.setValue('job.name', value?.name);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <Autocomplete
        aria-required
        options={jobList}
        getOptionLabel={(option) => option.name}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField label="Job" {...params} fullWidth />
        )}
      />
      <TextField label="Salary" type="number" {...form.register('salary')} />

      <DialogActions sx={styles.actions}>
        <Button variant="outlined" onClick={onPreviousClick}>
          Previous
        </Button>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </DialogActions>
      {errorNode}
    </div>
  );
};

const styles = StyleSheet({
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SecondForm;
