import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Autocomplete, Button, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import User from '@/api/User.ts';
import { UserData } from '@/services/auth/types.ts';
import { EmployeeData, JobData } from '@/api/types.ts';
import Job from '@/api/job.ts';
import DialogContentText from '@mui/material/DialogContentText';
import { useForm } from 'react-hook-form';

export const AddEmployeeDialog = (
  props: DialogProps & {
    onCloseClick: () => void;
  },
) => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [jobs, setJobs] = useState<JobData[]>([]);
  const [firstRender, setFirstRender] = useState(true);
  const { handleSubmit, register } = useForm<EmployeeData>();

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      User.findAll().then((users) => setUsers(users));
      Job.findAll().then((jobs) => setJobs(jobs));
    }
  }, []);

  return (
    <Dialog {...props}>
      <DialogTitle>Add new Employee</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <DialogContentText>
          Please fill out these required information to add a new Employee
        </DialogContentText>
        <Autocomplete
          fullWidth
          getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
          id="user-list"
          options={users}
          aria-required
          renderInput={(params) => (
            <TextField
              {...params}
              label="User"
              required
              {...register('userId')}
            />
          )}
        />
        <Autocomplete
          fullWidth
          getOptionLabel={(option) => `${option.name}`}
          id="jobs-list"
          options={jobs}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Job"
              required
              {...register('jobId')}
            />
          )}
        />
        <TextField
          type={'number'}
          label={'Salary'}
          required
          {...register('salary')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCloseClick}>Cancel</Button>
        <Button type="submit" variant={'contained'}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
