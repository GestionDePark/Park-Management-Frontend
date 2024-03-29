import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { EmployeeData, JobData } from '@/api/types';
import { Checkbox, Skeleton, TableCell, TableRow } from '@mui/material';
import Job from '@/api/providers/JobProvider';
import StyledDate from '@/utils/StyledDate';
import User from '@/api/providers/UserProvider';
import { UserData } from '@/services/auth/types';

interface Props {
  rowIndex: number;
  checkbox?: boolean;
  data: EmployeeData;
  selected: number[];
  handleOn(i: number): ChangeEventHandler<HTMLInputElement>;
}

const RowEmployee = ({
  data,
  handleOn,
  selected,
  rowIndex,
  checkbox,
}: Props) => {
  const countFetch = useRef(0);
  const [job, setJob] = useState<JobData | null>(null);
  const [user, setUser] = useState<UserData | null>(null);

  const fetchData = async () => {
    setJob(await Job.findById(data?.jobId));
    setUser(await User.findById(data?.userId));
  };

  useEffect(() => {
    if (countFetch.current < 4) {
      fetchData();
    }
    if (countFetch.current <= 4) {
      countFetch.current++;
    }
  });

  return (
    <TableRow>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        {checkbox ? (
          <Checkbox
            checked={selected.includes(rowIndex)}
            value={selected.includes(rowIndex)}
            onChange={handleOn(rowIndex)}
          />
        ) : null}
        <span className="flex flex-shrink">
          {user?.firstName || <Skeleton />}
        </span>
      </TableCell>
      <TableCell>{user?.lastName || <Skeleton />}</TableCell>
      <TableCell>{user?.email || <Skeleton />}</TableCell>
      <TableCell>{job?.name || <Skeleton />}</TableCell>
      <TableCell>{data?.salary || <Skeleton />} Ar</TableCell>
      <TableCell>{StyledDate(data?.joinedAt) || <Skeleton />}</TableCell>
    </TableRow>
  );
};

export default RowEmployee;
