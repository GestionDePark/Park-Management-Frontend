import { List, Paper } from '@mui/material';
import { MdDashboard, MdWork } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import ButtonLogout from '@/components/ButtonLogout';
import pageRoutes from '@/pageRoutes';
import ListItem from '@/pages/Admin/Dashy/ListItem';

const Aside = () => {
  return (
    <aside className="h-full p-2 sticky top-0">
      <Paper
        className="h-full flex flex-col justify-between px-2"
        elevation={4}
      >
        <List>
          <ListItem
            name="Dashboard"
            to={pageRoutes.adminDashboard}
            icon={<MdDashboard />}
          />
          <ListItem
            name="Employee"
            to={pageRoutes.adminEmployee}
            icon={<GrUserWorker />}
          />
          <ListItem name="Jobs" to={pageRoutes.adminJobs} icon={<MdWork />} />
        </List>

        <div className="p-2 center-flex w-full">
          <ButtonLogout />
        </div>
      </Paper>
    </aside>
  );
};

export default Aside;
