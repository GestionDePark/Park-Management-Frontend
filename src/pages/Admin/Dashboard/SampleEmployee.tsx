import pageRoutes from '@/pageRoutes.ts';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link as L } from 'react-router-dom';

const Link = styled(L)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const SampleEmployee = () => {
  return (
    <div>
      <div className="flex px-2 items-center justify-between">
        <h2 className="text-2xl font-bold">Your employees</h2>
        <Link to={pageRoutes.adminEmployee} className="hover:underline">
          See More
        </Link>
      </div>

      <Table stickyHeader>
        <TableHead>
          <TableCell>User</TableCell>
          <TableCell>Job</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Joined at</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
            <TableCell>hello</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SampleEmployee;
