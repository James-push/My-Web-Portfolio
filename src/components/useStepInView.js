import { useEffect, useRef, useState } from "react";

export function useStepInView(count) {
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let found = 0;
      for (let i = 0; i < count; i++) {
        const ref = stepRefs.current[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.5) {
            found = i;
          }
        }
      }
      setActiveStep(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  return [stepRefs, activeStep];
}
