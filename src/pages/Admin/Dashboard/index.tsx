import { Dashy } from '../Dashy';
import { Paper } from '@mui/material';
import SampleEmployee from '@/pages/Admin/Dashboard/SampleEmployee.tsx';

const Dashboard = () => {
  return (
    <Dashy>
      <Paper elevation={3} sx={{ padding: '1.2rem' }}>
        <SampleEmployee />
      </Paper>
    </Dashy>
  );
};

export default Dashboard;
