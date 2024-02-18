import { Dashy } from '../Dashy';
import { Paper } from '@mui/material';
import SampleEmployee from '@/pages/Admin/Dashboard/SampleEmployee';
import { useEffect, useState } from 'react';
import { EmployeeData } from '@/api/types/Employee.type';
import EmployeeApi from '@/api/providers/EmployeeProvider';
import useErrorPopup from '@/hooks/useErrorPopup';
import AppUsesContext from '@/components/AppUsesContext';

const Dashboard = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [data, setData] = useState<EmployeeData[]>([]);
  const [errorNode, setErrorNode] = useErrorPopup();

  const fetchData = async () => {
    if (data.length === 0) {
      setData(await EmployeeApi.findAll());
    }
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      fetchData().catch(setErrorNode);
    }
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
