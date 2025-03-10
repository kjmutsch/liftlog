import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack screenOptions={{ presentation: 'modal' }}>
          {/* Ensure the proper screen name is used for the (tabs) */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* The modal screen */}
          <Stack.Screen name="(modals)/chart-modal" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
