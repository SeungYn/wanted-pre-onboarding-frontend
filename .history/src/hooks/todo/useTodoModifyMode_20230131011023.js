import { useCallback, useState } from 'react';

export default function useTodoModifyMode() {
  const [isModifyMode, setIsModifyMode] = useState(false);

  const toggleModifyMode = useCallback(() => {
    console.log(123);
    setIsModifyMode((f) => !f);
  }, []);
  return { isModifyMode, toggleModifyMode };
}
