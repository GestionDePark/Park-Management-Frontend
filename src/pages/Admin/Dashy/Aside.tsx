import { List, Paper } from '@mui/material';
import { MdDashboard, MdWork } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import ButtonLogout from '@/components/ButtonLogout';
import pageRoutes from '@/pageRoutes';
import ListItem from '@/pages/Admin/Dashy/ListItem';
import StyleSheet from '@/utils/StyleSheet';

const Aside = () => {
  return (
    <aside className="h-full p-2 sticky top-0">
      <Paper
        className="h-full flex flex-col justify-between px-5 py-3"
        elevation={4}
        sx={styles.paper}
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

const styles = StyleSheet({
  paper: {
    borderRadius: '.8rem',
  },
});

export default Aside;
