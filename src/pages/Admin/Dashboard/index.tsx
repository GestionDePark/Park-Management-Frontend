import { Dashy } from '../Dashy';
import { Paper } from '@mui/material';
import SampleEmployee from '@/pages/Admin/Dashboard/SampleEmployee';
import { useEffect, useState } from 'react';
import { EmployeeData } from '@/api/types/Employee.type';
import EmployeeApi from '@/api/providers/EmployeeProvider';
import useErrorPopup from '@/hooks/useErrorPopup';
import AppUsesContext from '@/components/AppUsesContext';
import SampleJob from '@/pages/Admin/Dashboard/SampleJob';
import { JobData } from '@/api/types';
import JobProvider from '@/api/providers/JobProvider';

const Dashboard = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [errorNode, setErrorNode] = useErrorPopup();

  const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);
  const [jobList, setJobList] = useState<JobData[]>([]);

  const fetchData = async () => {
    if (jobList.length === 0) {
      setJobList(await JobProvider.findAll());
    }
    if (employeeData.length === 0) {
      setEmployeeData(await EmployeeApi.findAll());
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
        <SampleJob data={jobList} />
      </Paper>

      <Paper elevation={3} sx={{ padding: '1.2rem', marginTop: '2rem' }}>
        <SampleEmployee data={employeeData} />
      </Paper>

      <div className="mt-8 py-5 px-4">
        <AppUsesContext />
      </div>
      {errorNode}
    </Dashy>
  );
};

export default Dashboard;
