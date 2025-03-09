import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { Slot } from 'expo-router';
import {ThemeProvider} from '@/components/ThemeProvider'

export default function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </Provider>
  );
}
