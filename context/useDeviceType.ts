import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  // Initialize with a default value (you can choose a default or use null)
  const [deviceType, setDeviceType] = useState<string>('mobile');

  useEffect(() => {
    // Function to handle device type detection
    const handleDeviceType = () => {
      const width = window.innerWidth;
      setDeviceType(getDeviceType(width));
    };

    // Initial detection
    handleDeviceType();

    // Add event listener for window resize
    window.addEventListener('resize', handleDeviceType);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleDeviceType);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return deviceType;
};
export const getDeviceType = (width: number): string => {
  if (width >= 1536) return "desktop";
  if (width >= 1280) return "desktop";
  if (width >= 1024) return "loptop";
  if (width >= 768) return 'tablet';
  if (width >= 480) return 'minitablet';
  return 'mobile';
};