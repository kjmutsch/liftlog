import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { useTheme } from '../../components/ThemeProvider';
import { useEffect } from 'react';
import { loadTheme } from '../themeSlice';
import ThemedText from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const colors = useTheme();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const workoutDay = "Leg"

  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <ThemedText style={styles.leftText}>Welcome, User</ThemedText>
      <ThemedText style={styles.todayText}>Today is {workoutDay} Day!</ThemedText>
      
      {/* Begin Workout Button */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => router.push('/workouts')}
      >
        <Text style={[styles.buttonText, { color: colors.card }]}>Begin Workout &gt;</Text>
      </TouchableOpacity>
      
      {/* PR Boxes */}
      <ThemedText style={[styles.leftText, styles.paddingBottom]}>Previous {workoutDay} Day PRs:</ThemedText>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={[styles.box, { backgroundColor: colors.card }]} onPress={() => router.push('/(modals)/chart-modal?chartType=PR')}>
          <Text style={[styles.boxText, { color: colors.text }]}>Squat PR: 225 lbs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, { backgroundColor: colors.card }]} onPress={() => router.push('/(modals)/chart-modal?chartType=PR')}>
          <Text style={[styles.boxText, { color: colors.text }]}>Deadlift PR: 315 lbs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={[styles.box, { backgroundColor: colors.card }]}>
          <Text style={[styles.boxText, { color: colors.text }]}>Bench PR: 185 lbs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, { backgroundColor: colors.card }]}>
          <Text style={[styles.boxText, { color: colors.text }]}>OHP PR: 135 lbs</Text>
        </TouchableOpacity>
      </View>
      
      {/* Pinned Stats */}
      <ThemedText style={styles.sectionTitle}>Pinned Stats</ThemedText>
      <View style={styles.gridContainer}>
        <View style={[styles.box, { backgroundColor: colors.card }]}>
          <Text style={[styles.boxText, { color: colors.text }]}>Weekly Volume: 12,500 lbs</Text>
        </View>
        <View style={[styles.box, { backgroundColor: colors.card }]}>
          <Text style={[styles.boxText, { color: colors.text }]}>Workout Streak: 30 Days</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  leftText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  todayText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  paddingBottom: {
    paddingBottom: 5
  }
});