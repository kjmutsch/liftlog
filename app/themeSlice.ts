import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

type ThemeType = 'light' | 'dark';

interface ThemeState {
  theme: ThemeType;
}

const getStoredTheme = async (): Promise<ThemeType> => {
  const storedTheme = await AsyncStorage.getItem('theme');
  return storedTheme === 'dark' ? 'dark' : 'light';
};

const initialState: ThemeState = {
  theme: (Appearance.getColorScheme() as ThemeType) || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      AsyncStorage.setItem('theme', action.payload); // Save to AsyncStorage
    },
  },
});

// Action to load theme from AsyncStorage when app starts
export const loadTheme = () => async (dispatch: any) => {
  const storedTheme = await getStoredTheme();
  dispatch(setTheme(storedTheme));
};

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
