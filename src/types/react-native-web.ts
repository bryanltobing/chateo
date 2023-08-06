declare module 'react-native' {
  interface PressableStateCallbackType {
    hovered?: boolean;
    focused?: boolean;
  }

  interface TextStyle {
    outlineStyle?: 'none';
  }
}

export {};
