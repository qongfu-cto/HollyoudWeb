import { useEffect, useState } from 'react';

export const useLoadPage = () => {
  const [loadActive, setLoadActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadActive(false);
    }, 120);
  }, []);

  return { loadActive, setLoadActive };
};
