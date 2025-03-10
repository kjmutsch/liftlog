import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ChartModal() {
  const router = useRouter();
  const { chartType } = useLocalSearchParams(); // Get chart type (e.g., "PR", "Body Weight", etc.)

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{chartType} Chart</Text>

      <View style={{ height: 300, backgroundColor: '#eee', marginVertical: 20 }} />
      
      {/* Filter Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="All Time" onPress={() => {}} />
        <Button title="1 Year" onPress={() => {}} />
        <Button title="1 Month" onPress={() => {}} />
        <Button title="1 Week" onPress={() => {}} />
      </View>

      {/* Metrics Display (Example for PR) */}
      <Text>Current PR: 200 lbs</Text>
      <Text>Difference: +25 lbs</Text>
      <Text>Date Range: Jan 2024 - Now</Text>

      {/* Close Button */}
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}
