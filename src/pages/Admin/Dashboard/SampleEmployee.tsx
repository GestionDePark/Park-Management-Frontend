import pageRoutes from '@/pageRoutes';
import { styled, Typography } from '@mui/material';
import { Link as L } from 'react-router-dom';
import TableEmployee from '@/pages/Admin/components/TableEmployee';
import { EmployeeData } from '@/api/types';

const Link = styled(L)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

interface Props {
  data: EmployeeData[];
}

const SampleEmployee = ({ data }: Props) => {
  return (
    <div>
      <div className="flex px-2 items-center justify-between">
        <Typography variant="h5" fontWeight="bold">
          Your employees
        </Typography>
        <Link to={pageRoutes.adminEmployee} className="text-lg hover:underline">
          See More
        </Link>
      </div>

      <TableEmployee data={data} limitData={10} />
    </div>
  );
};

export default SampleEmployee;
