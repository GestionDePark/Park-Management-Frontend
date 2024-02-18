import { styled, Typography, colors } from '@mui/material';
import pageRoutes from '@/pageRoutes';
import { Link as L } from 'react-router-dom';
import { JobData } from '@/api/types';

const Link = styled(L)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const Card = styled('div')(({ theme }) => ({
  width: '100%',
  color: '#fff',
  display: 'flex',
  fontSize: '1.1rem',
  userSelect: 'none',
  textAlign: 'center',
  alignItems: 'center',
  padding: '1rem 2rem',
  borderRadius: '.8rem',
  justifyContent: 'center',
  boxShadow: theme.shadows[5],
  background: colors.brown['500'],
}));

interface Props {
  data: JobData[];
}

const SampleJob = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex px-2 items-center justify-between">
        <Typography variant="h5" fontWeight="bold">
          Last jobs
        </Typography>
        <Link to={pageRoutes.adminJobs} className="text-lg hover:underline">
          See More
        </Link>
      </div>

      <div className="center-flex gap-3">
        {data.slice(0, 4).map((v) => (
          <Card key={v.id} className="px-8 py-4">
            {v.name}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SampleJob;
