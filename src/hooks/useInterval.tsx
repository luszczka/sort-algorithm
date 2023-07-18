import { useEffect, useRef, useState } from "react";

type UseIntervalProps = {
  callback: any;
  delay: number;
  limit: number;
};

export const useInterval = ({ callback, delay, limit }: UseIntervalProps) => {
  const [count, setCount] = useState(1);
  const intervalRef = useRef<number>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (
      (typeof delay === "number" && count <= limit) ||
      (typeof delay === "number" && !limit)
    ) {
      intervalRef.current = window.setInterval(() => {
        setCount((c) => c + 1);
        callbackRef.current(count, setCount);
      }, delay);
      return () => {
        window.clearInterval(intervalRef.current);
      };
    }
  }, [delay, count, limit]);

  return { intervalRef };
};
