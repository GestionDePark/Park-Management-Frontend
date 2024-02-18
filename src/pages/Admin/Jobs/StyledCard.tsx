import { ChangeEvent, PropsWithChildren, useState } from 'react';
import { Button, Card, CardContent, colors } from '@mui/material';
import StyleSheet from '@/utils/StyleSheet';
import {
  Cancel,
  CardTravelRounded,
  Check,
  Delete,
  Edit,
  EmojiFoodBeverage,
  Forest,
  PanTool,
  Pets,
  SportsFootball,
} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { JobData } from '@/api/types';
import JobProvider from '@/api/providers/JobProvider';
import useErrorPopup from '@/hooks/useErrorPopup';

const randomColors = [
  colors.brown['500'],
  colors.green['500'],
  colors.yellow['500'],
  colors.lime['500'],
  colors.indigo['500'],
  colors.teal['500'],
  colors.amber['500'],
  colors.deepOrange['500'],
];

const styles = StyleSheet({
  card: {
    height: '15rem',
    width: '15rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
    ':hover > .card-options': {
      display: 'flex',
    },
  },
  text: {
    fontSize: '1.4rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fontInherit: {
    fontSize: '5rem',
  },
  button: {
    minWidth: 0,
  },
});

const randomIcons = [
  <Forest sx={styles.fontInherit} />,
  <EmojiFoodBeverage sx={styles.fontInherit} />,
  <PanTool sx={styles.fontInherit} />,
  <Pets sx={styles.fontInherit} />,
  <SportsFootball sx={styles.fontInherit} />,
  <CardTravelRounded sx={styles.fontInherit} />,
];

const getRandomColor = () => {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
};

const RandomIcon = () => {
  return randomIcons[Math.floor(Math.random() * randomIcons.length)];
};

interface Props {
  id: string;
  onClickDelete(): void;
  onUpdated(data: JobData): void;
}

interface DynamicButtonProps {
  updating: boolean;
  onClickDelete(): void;
  onClickEdit(): void;
  onClickCancelEdit(): void;
  onClickSubmitEdit(): void;
}

const DynamicButton = ({
  updating,
  onClickDelete,
  onClickEdit,
  onClickSubmitEdit,
  onClickCancelEdit,
}: DynamicButtonProps) => {
  if (!updating) {
    return (
      <>
        <Button sx={styles.button} color="info" onClick={onClickDelete}>
          <Delete />
        </Button>
        <Button sx={styles.button} color="info" onClick={onClickEdit}>
          <Edit />
        </Button>
      </>
    );
  }

  return (
    <>
      <Button sx={styles.button} color="info" onClick={onClickCancelEdit}>
        <Cancel />
      </Button>
      <Button sx={styles.button} color="info" onClick={onClickSubmitEdit}>
        <Check />
      </Button>
    </>
  );
};

const Content = ({
  onClickDelete,
  onUpdated,
  children,
  id,
}: PropsWithChildren<Props>) => {
  const [newValue, setNewValue] = useState<string>(children as string);
  const [canUpdate, setCanUpdate] = useState(false);
  const [errorNode, setErrorNode] = useErrorPopup();

  const handleClickUpdate = () => {
    setCanUpdate(true);
  };

  const handleCancelEdit = () => {
    setCanUpdate(false);
  };

  const handleSubmit = async () => {
    try {
      const res = await JobProvider.update(id, { name: newValue });
      onUpdated(res);
      setCanUpdate(false);
    } catch (e) {
      setErrorNode(e as Error);
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value: string = ev.target.value;
    setNewValue(value);
  };

  return (
    <>
      <div className="card-options hidden items-center gap-2 absolute top-0 right-0 p-2">
        <DynamicButton
          updating={canUpdate}
          onClickDelete={onClickDelete}
          onClickCancelEdit={handleCancelEdit}
          onClickSubmitEdit={handleSubmit}
          onClickEdit={handleClickUpdate}
        />
      </div>

      <CardContent sx={styles.text}>
        {canUpdate ? (
          <TextField fullWidth value={newValue} onChange={handleChange} />
        ) : (
          children
        )}
      </CardContent>
      {errorNode}
    </>
  );
};

const StyledCard = (props: PropsWithChildren<Props>) => {
  return (
    <Card
      elevation={5}
      sx={Object.assign(styles.card, { background: getRandomColor() })}
    >
      <Content {...props} />
      <div className="absolute bottom-[-0.6rem] left-[-0.6rem] rotate-[45deg]">
        <RandomIcon />
      </div>
    </Card>
  );
};

export default StyledCard;
