import { Box, Divider, Skeleton } from '@mui/material';
import StyleSheet from '@/utils/StyleSheet';
import { MoneySharp } from '@mui/icons-material';

const AsideRight = () => {
  return (
    <aside className="h-full p-4 sticky top-0 flex shadow-2xl">
      <Box sx={styles.paper}>
        <div className="flex flex-col gap-3">
          <div className="center-flex gap-2">
            <div className="center-flex gap-2">
              <MoneySharp />
              <b className="text-nowrap">Your Salary:</b>
            </div>
            <div>
              <Skeleton sx={styles.moneySkeleton} />
            </div>
          </div>
          <Divider />
        </div>
      </Box>
    </aside>
  );
};

const styles = StyleSheet({
  paper: {
    height: '100%',
    display: 'flex',
    padding: '.5rem',
    borderRadius: '1rem',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  moneySkeleton: {
    width: '4rem',
  },
});

export default AsideRight;
