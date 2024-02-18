import { SyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Autocomplete, Button, DialogProps } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import StyleSheet from '@/utils/StyleSheet';
import { EmployeeData, EmployeeInput, JobData } from '@/api/types';
import EmployeeProvider from '@/api/providers/EmployeeProvider';
import TextField from '@mui/material/TextField';
import useErrorPopup from '@/hooks/useErrorPopup';
import JobProvider from '@/api/providers/JobProvider';

interface Props {
  updateIndex: number;
  employeeData: EmployeeData | undefined | null;
  onCloseClick: () => void;
  onModified(index: number, newData: EmployeeData): void;
}

const UpdateEmployeeDialog = ({
  updateIndex,
  employeeData,
  onCloseClick,
  onModified,
  ...props
}: DialogProps & Props) => {
  const [firstRender, setFirstRender] = useState(true);
  const [jobList, setJobList] = useState<JobData[]>([]);
  const form = useForm<EmployeeInput>();
  const [errorNode, setErrorNode] = useErrorPopup();

  useEffect(() => {
    if (firstRender || jobList.length === 0) {
      setFirstRender(false);
      JobProvider.findAll().then(setJobList).catch(setErrorNode);
    }
  });

  const handleDataToSend = async (data: Partial<EmployeeInput>) => {
    try {
      if (employeeData) {
        const template: Partial<EmployeeInput> = {};
        if (data.salary && String(data.salary).trim().length > 0) {
          template['salary'] = +data.salary;
        }
        template['jobId'] = data.jobId;
        const { id, salary, userId, jobId, joinedAt } = employeeData;
        const requestData = Object.assign(
          { id, salary, userId, jobId, joinedAt },
          template,
        );
        const responseData = await EmployeeProvider.update(
          employeeData?.id,
          requestData,
        );
        onModified(updateIndex, responseData);
        onCloseClick();
      }
    } catch (e) {
      setErrorNode(e as Error);
    }
  };

  const handleChangeCompletion = (_: SyntheticEvent, value: JobData | null) => {
    if (value) {
      form.setValue('jobId', value.id);
    }
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
      sx={styles.dialogbackdrop}
      onSubmit={form.handleSubmit(handleDataToSend)}
    >
      <DialogTitle>Modify employee data</DialogTitle>
      <DialogContent sx={styles.content}>
        <div className="flex flex-col gap-5 py-8">
          <Autocomplete
            aria-required
            options={jobList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeCompletion}
            defaultValue={jobList.find((v) => v.id === employeeData?.jobId)}
            renderInput={(params) => (
              <TextField label="Job" {...params} fullWidth />
            )}
          />

          <TextField
            label="Salary"
            type="number"
            {...form.register('salary')}
          />
        </div>
        <DialogActions sx={styles.actions}>
          <Button onClick={onCloseClick}>Cancel</Button>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
      {errorNode}
    </Dialog>
  );
};

const styles = StyleSheet({
  dialogbackdrop: {
    backdropFilter: 'blur(3px)',
  },
  dialog: {
    borderRadius: '1.2rem',
  },
  content: {
    paddingY: '2rem',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export { UpdateEmployeeDialog };
