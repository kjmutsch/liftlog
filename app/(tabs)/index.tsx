import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import { increment, decrement } from '@/app/slices';

export default function HomeScreen() {
  const exampleState = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text>Welcome to React Native with Redux & Navigation!</Text>
      <Text>Redux state: {exampleState}</Text>
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
