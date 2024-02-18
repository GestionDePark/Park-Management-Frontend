import { ReactNode } from 'react';
import {
  ListItem as Item,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

interface ItemProps {
  name: string;
  icon: ReactNode;
  to: string;
}

const ListItem = ({ name, icon, to }: ItemProps) => {
  const {
    palette: {
      primary: { main },
    },
  } = useTheme();
  return (
    <Item sx={{ padding: 0 }}>
      <NavLink
        to={to}
        className="flex w-full px-4 py-2 items-center text-start gap-[1rem]"
      >
        {({ isActive }) => (
          <>
            <ListItemIcon
              sx={{
                minWidth: 0,
                fontSize: '1.7rem',
                color: isActive ? main : null,
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText sx={{ color: isActive ? main : null }}>
              <b className="text-lg">{name}</b>
            </ListItemText>
          </>
        )}
      </NavLink>
    </Item>
  );
};

export default ListItem;
