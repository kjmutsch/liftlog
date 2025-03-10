import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import { useTheme } from '../../components/ThemeProvider';
import { useEffect } from 'react';
import { loadTheme } from '../themeSlice';
import ThemedText from '@/components/ThemedText';
import { useRouter } from 'expo-router';

//** Homescreen contains date at the top, then a dashboard of current PRs,
// what day it should be for your routine (PLL, upper/lower, etc)
// and a "go to today's workout" button.
// Underneath that it will be square blocks of different metrics.
// 1. Overall Progress chart (how much weight they lift on avg)
// 2. Body metrics/weight
// 3. Workout suggestions Page
// 4. Workout streak
// 5. Top lift trends (bench, squat, deadlift as defaults)
// 6. Customizable widgets/ Edit homepage button allowing users to pin different metrics
// customizable widgets will allow user to track any lift they want
//  */

export default function HomeScreen() {
  const colors = useTheme();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ThemedText style={{ color: colors.text}}>Homescreen</ThemedText>
        <Button title="View PR Chart" onPress={() => router.push('/(modals)/chart-modal?chartType=PR')} />
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
