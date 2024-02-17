import { useEffect, useState } from 'react';
import { Dashy } from '@/pages/Admin/Dashy';
import { JobData } from '@/api/types';
import JobProvider from '@/api/providers/JobProvider';
import useErrorPopup from '@/hooks/useErrorPopup';
import StyledCard from '@/pages/Admin/Jobs/StyledCard';
import { Button, Divider, Typography } from '@mui/material';
import StyleSheet from '@/utils/StyleSheet';

const Jobs = () => {
  const [errorNode, setErrorNode] = useErrorPopup();
  const [firstRender, setFirstRender] = useState(true);
  const [jobList, setJobList] = useState<JobData[]>([]);

  useEffect(() => {
    if (firstRender || jobList.length === 0) {
      setFirstRender(false);
      JobProvider.findAll().then(setJobList).catch(setErrorNode);
    }
  });

  return (
    <Dashy>
      <div className="flex items-center justify-between p-4 mt-5">
        <Typography variant="h5" fontWeight="bold">
          All jobs
        </Typography>
        <Button variant="contained" sx={styles.buttonJob}>
          New Job
        </Button>
      </div>
      <Divider />
      <div className="center-flex gap-5 p-5 flex-wrap mb-8">
        {jobList.map((v) => (
          <StyledCard key={v.id}>{v.name}</StyledCard>
        ))}
      </div>
      {errorNode}
    </Dashy>
  );
};

const styles = StyleSheet({
  buttonJob: {
    fontWeight: 'bold',
  },
});

export default Jobs;
