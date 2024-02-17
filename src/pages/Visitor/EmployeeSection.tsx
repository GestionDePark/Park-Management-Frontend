import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';

const EmployeeSection = () => {
  return (
    <section id="employee" className="flex">
      <div className="w-full">
        <img
          src="/Tsingy-de-Bemaraha-5.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="w-full center-flex flex-col">
        <Typography variant="h4">Are you an employee here ?</Typography>
        <Typography>
          To be an employee here, you need to contact an administrator
        </Typography>
        <div className="py-3">
          <Button
            component={Link}
            variant="outlined"
            to={pageRoutes.employeePage}
          >
            Start job now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSection;
