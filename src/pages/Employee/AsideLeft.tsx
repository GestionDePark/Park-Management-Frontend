import { Avatar, Badge, Box, Divider, Skeleton } from '@mui/material';
import { UserData } from '@/services/auth/types';
import ButtonLogout from '@/components/ButtonLogout';
import StyleSheet from '@/utils/StyleSheet';
import { Mail } from '@mui/icons-material';

interface Props {
  user: UserData | null;
}

const AsideLeft = ({ user }: Props) => {
  return (
    <aside className="h-full p-4 sticky top-0 flex shadow-2xl">
      <Box sx={styles.paper}>
        <div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Badge
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                badgeContent={
                  <span className="px-2 py-1 font-bold rounded-lg bg-blue-500">
                    {user?.isAdmin ? 'A' : 'E'}
                  </span>
                }
              >
                <Avatar>{user?.lastName?.charAt(0).toUpperCase()}</Avatar>
              </Badge>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  {user?.firstName}
                </span>
                <span className="text-sm leading-tight font-semibold">
                  {user?.lastName}
                </span>
              </div>
            </div>
            <Divider />
            <div>
              <div className="center-flex gap-2">
                <Mail />
                {user?.email || <Skeleton />}
              </div>
            </div>
          </div>
        </div>

        <div className="center-flex">
          <ButtonLogout />
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
});

export default AsideLeft;
