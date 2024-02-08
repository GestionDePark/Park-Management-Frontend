import pageRoutes from '@/pageRoutes.ts';
import { styled } from '@mui/material';
import { Link as L } from 'react-router-dom';
import TableEmployee from '@/pages/Admin/components/TableEmployee.tsx';
import { EmployeeData } from '@/api/types.ts';

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
        <h2 className="text-2xl font-bold">Your employees</h2>
        <Link to={pageRoutes.adminEmployee} className="hover:underline">
          See More
        </Link>
      </div>

      <TableEmployee data={data} limitData={10} />
    </div>
  );
};

export default SampleEmployee;
