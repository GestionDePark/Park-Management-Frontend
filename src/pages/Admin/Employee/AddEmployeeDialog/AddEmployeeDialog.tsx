import { Dialog, DialogProps, Step, StepLabel, Stepper } from '@mui/material';
import { EmployeeData, JobData } from '@/api/types';
import { useForm } from 'react-hook-form';
import StyleSheet from '@/utils/StyleSheet';
import DialogContent from '@mui/material/DialogContent';
import EmployeeProvider from '@/api/providers/EmployeeProvider';
import UserProvider from '@/api/providers/UserProvider';
import { SignupData } from '@/services/auth/types';
import FirstForm from '@/pages/Admin/Employee/AddEmployeeDialog/FirstForm';
import { useState } from 'react';
import SecondForm from '@/pages/Admin/Employee/AddEmployeeDialog/SecondForm';
import useErrorPopup from '@/hooks/useErrorPopup';
import DialogTitle from '@mui/material/DialogTitle';

interface Forms {
  user: SignupData;
  job: JobData;
  salary: number;
}

interface Props {
  onAddedData(data: EmployeeData): void;
  onCloseClick: () => void;
}

const AddEmployeeDialog = ({
  onAddedData,
  onCloseClick,
  ...props
}: DialogProps & Props) => {
  const [errorNode, setErrorNode] = useErrorPopup();
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<Forms>();

  const handleEndForm = async ({ user, job, salary }: Forms) => {
    try {
      const userCreated = await UserProvider.createUser(user);
      const response = await EmployeeProvider.create({
        jobId: job.id,
        salary: +salary,
        userId: userCreated.id,
      } as EmployeeData);
      onAddedData(response);
      onCloseClick();
    } catch (e) {
      setErrorNode(e as Error);
    }
  };

  const handleDataToSend = async (data: Forms) => {
    switch (currentStep) {
      case 0:
        return setCurrentStep(1);

      case 1:
        return handleEndForm(data);

      default:
        return setCurrentStep(0);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((p) => p - 1);
  };

  const SwitchForm = () => {
    switch (currentStep) {
      case 0:
        return <FirstForm form={form} />;

      case 1:
        return <SecondForm form={form} onPreviousClick={handlePrevious} />;

      default:
        return null;
    }
  };

  const handleClose = () => {
    if (onCloseClick) {
      onCloseClick();
    }
    setCurrentStep(0);
    form.reset();
  };

  return (
    <Dialog
      {...props}
      fullWidth
      onSubmit={form.handleSubmit(handleDataToSend)}
      PaperProps={{
        component: 'form',
        sx: styles.dialog,
      }}
      onClose={handleClose}
    >
      <DialogTitle>Add Employee</DialogTitle>
      <DialogContent sx={styles.content}>
        <Stepper tabIndex={currentStep}>
          <Step>
            <StepLabel>Create user</StepLabel>
          </Step>
          <Step>
            <StepLabel>Job details</StepLabel>
          </Step>
        </Stepper>

        <SwitchForm />
      </DialogContent>
      {errorNode}
    </Dialog>
  );
};

const styles = StyleSheet({
  dialog: {
    borderRadius: '1.2rem',
    minWidth: '420px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
});

export { AddEmployeeDialog, type Forms };
