import React from 'react';
import { Switch, StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../app/themeSlice';
import { RootState } from '../app/store';
import { useTheme } from './ThemeProvider';
import ThemedText from './ThemedText';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const colors = useTheme();
    const theme = useSelector((state: RootState) => state.theme.theme);
  
    const toggleSwitch = (value: boolean) => {
      const newTheme = value ? 'dark' : 'light';
      dispatch(setTheme(newTheme)); 
    };
  
    return (
        <View style={styles.container}>
          <ThemedText style={[styles.text, { color: colors.text }]}>Dark Mode</ThemedText>
          <Switch value={theme === 'dark'} onValueChange={toggleSwitch} />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20, // Ensure spacing
    },
    text: {
        marginRight: 10,
        fontSize: 16,
        color: '#000', // Change dynamically if needed
    },
});

export default ThemeSwitcher;
