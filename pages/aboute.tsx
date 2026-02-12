
import { useEffect, useState } from 'react';

export default function Page() {
  const [a, seta] = useState(0);
  useEffect(() => {
    console.log(`Component mounted with ID: `);
    // Perform any side effects here
    return () => {
      console.log(`Component unmounted with ID: `);
      // Cleanup code if needed
    };
  }, []);

  return <div>Page for ID:</div>;
}