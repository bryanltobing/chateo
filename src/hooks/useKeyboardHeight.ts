import { useCallback, useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleKeyboardWillShow = useCallback((e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  }, []);

  const handleKeyboardWillHide = useCallback(() => {
    setKeyboardHeight(0);
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow);
    const hideSubscription = Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [handleKeyboardWillHide, handleKeyboardWillShow]);

  return keyboardHeight;
};
