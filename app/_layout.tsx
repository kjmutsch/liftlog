import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
