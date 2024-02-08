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
    <Item>
      <NavLink to={to} className="flex items-center text-start gap-[1rem]">
        {({ isActive }) => (
          <>
            <ListItemIcon
              sx={{
                minWidth: 0,
                fontSize: '1.4rem',
                color: isActive ? main : null,
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText sx={{ color: isActive ? main : null }}>
              <span className="font-bold">{name}</span>
            </ListItemText>
          </>
        )}
      </NavLink>
    </Item>
  );
};

export default ListItem;
