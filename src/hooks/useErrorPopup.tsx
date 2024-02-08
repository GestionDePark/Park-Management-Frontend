import { ReactNode, useState } from 'react';
import ErrorPopup from '../components/ErrorPopup.tsx';

const useErrorPopup = (): [ReactNode, (error: Error) => void] => {
  const [node, setNode] = useState<ReactNode | null>(null);

  const handleClose = () => setNode(null);

  const setError = (error: Error): void => {
    setNode(
      <ErrorPopup error={{ message: error.message }} onClose={handleClose} />,
    );
  };

  return [node, setError];
};

export default useErrorPopup;
