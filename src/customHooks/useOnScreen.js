import { useState, useEffect } from "react";

export const useOnScreen = (ref) => {
  //const threeBreakpointThreshold = [0.25, 0.5, 0.75] // less sensitive
  const tenBreakpointThreshold = [
    0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
  ];

  const [isOnScreen, setOnScreen] = useState(false);
  //IntersectionObserver Web API used to create observer
  //observer "notifies" if target intersects with field of view

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    // observer's callback tracks each ContainerRef when entering viewport
    {
      threshold: tenBreakpointThreshold,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return isOnScreen;
};
