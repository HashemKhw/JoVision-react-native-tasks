import { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return {
      time: now.toLocaleTimeString(),
      date: now.toLocaleDateString(),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate({
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentDate;
};

export default useCurrentTime;
