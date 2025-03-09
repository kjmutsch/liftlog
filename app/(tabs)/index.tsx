import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import { increment, decrement } from '@/app/counterSlice';
import { useTheme } from '../../components/ThemeProvider';
import { useEffect } from 'react';
import { loadTheme } from '../themeSlice';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import ThemedText from '@/components/ThemedText';

export default function HomeScreen() {
  const colors = useTheme();
  const exampleState = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadTheme()); // Load theme from AsyncStorage on startup
  }, [dispatch]);

  return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ThemeSwitcher />
        <ThemedText style={{ color: colors.text}}>Welcome to React Native with Redux & Navigation!</ThemedText>
        <ThemedText>Redux state: {exampleState}</ThemedText>

        <Button title="Increase" onPress={() => dispatch(increment())} />
        <Button title="Decrease" onPress={() => dispatch(decrement())} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
