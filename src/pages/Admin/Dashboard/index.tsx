import { Dashy } from '../Dashy';
import { Paper } from '@mui/material';
import SampleEmployee from '@/pages/Admin/Dashboard/SampleEmployee.tsx';
import { useEffect, useRef, useState } from 'react';
import { EmployeeData } from '@/api/types.ts';
import EmployeeApi from '@/api/employee.ts';
import useErrorPopup from '@/hooks/useErrorPopup.tsx';

const Dashboard = () => {
  const renderIncr = useRef(0);
  const [data, setData] = useState<EmployeeData[]>([]);
  const [errorNode, setErrorNode] = useErrorPopup();

  const fetchData = async () => {
    try {
      setData(await EmployeeApi.findAll());
    } catch (e) {
      setErrorNode(e as Error);
    }
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
      {errorNode}
    </Dashy>
  );
};

export default Dashboard;
