import { List, ListItem, ListItemText } from '@mui/material';
import { Circle } from '@mui/icons-material';

const ListPuce = () => {
  return (
    <div className="pr-3">
      <Circle sx={{ fontSize: '.9rem' }} />
    </div>
  );
};

const VisitSection = () => {
  return (
    <section id="visit" className="flex bg-zinc-100 max-h-[60vh]">
      <div className="w-full flex flex-col py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Visit us</h2>
          <p className="text-xl">Come to visit the park</p>
        </div>
        <div className="flex 6 p-5">
          <div className="px-5 py-4">
            <List
              subheader={
                <p className="text-3xl font-semibold">Fees per ages</p>
              }
            >
              <ListItem>
                <ListPuce />
                <ListItemText>
                  <b>Adult</b>:&nbsp;
                  <span>30 000Ar</span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListPuce />
                <ListItemText>
                  <b>Kids</b>:&nbsp;
                  <span>15 000Ar</span>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListPuce />
                <ListItemText>
                  <b>Babies</b>:&nbsp;
                  <span>Free</span>
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/green-landscape.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default VisitSection;
