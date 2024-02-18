import { Work } from '@mui/icons-material';

interface Props {
  message: string;
}

const NoContent = ({ message }: Props) => {
  return (
    <div className="center-flex w-full py-8">
      <div className="center-flex flex-col gap-4">
        <Work sx={{ fontSize: '4rem' }} />
        <span className="text-2xl">{message}</span>
      </div>
    </div>
  );
};

export default NoContent;
