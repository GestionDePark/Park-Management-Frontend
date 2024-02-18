import { Dashy } from '../Dashy';
import { Paper } from '@mui/material';
import SampleEmployee from '@/pages/Admin/Dashboard/SampleEmployee';
import { useEffect, useRef, useState } from 'react';
import { EmployeeData } from '@/api/types/Employee.type';
import EmployeeApi from '@/api/providers/EmployeeProvider';
import useErrorPopup from '@/hooks/useErrorPopup';
import AppUsesContext from '@/components/AppUsesContext';

const Dashboard = () => {
  const countFetch = useRef(0);
  const [data, setData] = useState<EmployeeData[]>([]);
  const [errorNode, setErrorNode] = useErrorPopup();

  const fetchData = async () => {
    try {
      if (data.length === 0 && countFetch.current < 4) {
        setData(await EmployeeApi.findAll());
      }
    } catch (e) {
      setErrorNode(e as Error);
    }
    if (countFetch.current <= 4) {
      countFetch.current++;
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Dashy>
      <Paper elevation={3} sx={{ padding: '1.2rem', marginTop: '2rem' }}>
        <SampleEmployee data={data} />
      </Paper>
      <div className="mt-8 py-5 px-4">
        <AppUsesContext />
      </div>
      {errorNode}
    </Dashy>
  );
};

export default Dashboard;
