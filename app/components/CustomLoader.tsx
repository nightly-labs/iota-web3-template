import { Loader, useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export function CustomLoader() {
  const { progress } = useProgress();
  const [finished, setFinished] = useState<boolean>(false);
  let timeoutId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (progress === 100 && !timeoutId.current) {
      timeoutId.current = setTimeout(() => {
        setFinished(true);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [progress]);

  if (finished) return null;
  return <Loader />;
}
