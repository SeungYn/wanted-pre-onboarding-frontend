import { useCallback, useState } from 'react';

export default function useTodoModifyMode() {
  const [isModifyMode, setIsModifyMode] = useState(false);

  const toggleModifyMode = useCallback(() => {
    setIsModifyMode((f) => !f);
  }, []);
  return <div></div>;
}
