import { useTheme } from '../../components/ThemeProvider';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WorkoutsScreen() {
  const colors = useTheme();
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Text>My Workouts</Text>
      <View style={styles.padding} >
        <Button title="Create New Workout" onPress={() => {}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 30
  }
});