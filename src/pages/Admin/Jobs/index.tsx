import { useEffect, useState } from 'react';
import { Dashy } from '@/pages/Admin/Dashy';
import { JobData } from '@/api/types';
import JobProvider from '@/api/providers/JobProvider';
import useErrorPopup from '@/hooks/useErrorPopup';
import StyledCard from '@/pages/Admin/Jobs/StyledCard';
import { Button, Divider, Typography } from '@mui/material';
import StyleSheet from '@/utils/StyleSheet';
import NoContent from '@/pages/Admin/components/NoContent';
import AddJobDialog from '@/pages/Admin/Jobs/AddJobDialog';

const Jobs = () => {
  const [errorNode, setErrorNode] = useErrorPopup();
  const [firstRender, setFirstRender] = useState(true);
  const [jobList, setJobList] = useState<JobData[]>([]);
  const [openDial, setOpenDial] = useState(false);

  useEffect(() => {
    if (firstRender || jobList.length === 0) {
      setFirstRender(false);
      JobProvider.findAll().then(setJobList).catch(setErrorNode);
    }
  });

  const handleOpenDial = () => {
    setOpenDial(true);
  };

  const handleCloseClick = () => {
    setOpenDial(false);
  };

  const handleAddedData = (data: JobData) => {
    setJobList((p) => p.concat(data));
  };

  const handleUpdateIndex = (i: number) => {
    return (data: JobData) => {
      setJobList((p) => {
        const d = [...p];
        d[i] = data;
        return d;
      });
    };
  };

  const handleDeleteIndex = (i: number) => {
    return () => {
      JobProvider.delete(jobList[i].id)
        .then((v) => {
          setJobList((p) => {
            return p.filter((c) => c.id !== v.id);
          });
        })
        .catch(setErrorNode);
    };
  };

  return (
    <Dashy>
      <div className="flex items-center justify-between p-4 mt-5">
        <Typography variant="h5" fontWeight="bold">
          All jobs
        </Typography>
        <Button
          onClick={handleOpenDial}
          variant="contained"
          sx={styles.buttonJob}
        >
          New Job
        </Button>
      </div>
      <Divider />
      <div className="center-flex gap-5 p-5 flex-wrap mb-8">
        {jobList.length === 0 ? <NoContent message="No Job yet" /> : null}
        {jobList.map((v, i) => (
          <StyledCard
            key={v.id}
            id={v.id}
            onClickDelete={handleDeleteIndex(i)}
            onUpdated={handleUpdateIndex(i)}
          >
            {v.name}
          </StyledCard>
        ))}
      </div>

      <AddJobDialog
        onCloseClick={handleCloseClick}
        onAddedData={handleAddedData}
        open={openDial}
      />
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
