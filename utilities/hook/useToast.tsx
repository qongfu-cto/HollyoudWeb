import Toast from 'components/Atoms/toast';
import { useEffect, useMemo, useState } from 'react';

export const useToast = () => {
  const [show, setShow] = useState(false);
  const error =
    typeof window !== 'undefined' ? localStorage?.getItem('placeError') : null;

  useEffect(() => {
    setShow(true);
  }, [error]);

  const ErrorToast = useMemo(() => {
    if (error) return <Toast text={JSON.parse(error)} />;
  }, [error, show]);

  setTimeout(() => {
    if (error) {
      localStorage?.removeItem('placeError');
      setShow(false);
    }
  }, 2000);

  return ErrorToast;
};
