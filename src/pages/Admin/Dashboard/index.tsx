import { Dashy } from '../Dashy';
import { Paper } from '@mui/material';
import SampleEmployee from '@/pages/Admin/Dashboard/SampleEmployee.tsx';
import { useEffect, useRef, useState } from 'react';
import { EmployeeData } from '@/api/types.ts';
import EmployeeApi from '@/api/employee.ts';

const Dashboard = () => {
  const renderIncr = useRef(0);
  const [data, setData] = useState<EmployeeData[]>([]);
  const fetchData = async () => {
    setData(await EmployeeApi.findAll());
  };

  useEffect(() => {
    if (renderIncr.current === 1) {
      fetchData();
    }
    if (renderIncr.current < 2) {
      renderIncr.current++;
    }
  }, []);

  return (
    <Dashy>
      <Paper elevation={3} sx={{ padding: '1.2rem' }}>
        <SampleEmployee data={data} />
      </Paper>
    </Dashy>
  );
};

export default Dashboard;
