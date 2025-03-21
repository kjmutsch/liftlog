import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '@/components/ThemeProvider';

const ThemedText = ({ style, ...props }: TextProps) => {
  const colors = useTheme();
  return <Text {...props} style={[{ color: colors.text }, style]} />;
};

export default ThemedText;
