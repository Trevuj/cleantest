"use client"
import { useEffect, useState } from "react";

interface UseOnScreenProps {
  targetId: string;
}

export const useOnScreen = ({ targetId } : UseOnScreenProps ) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [targetId]);

  return isVisible;
};
