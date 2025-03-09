import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { RootState } from '@/app/store';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const theme = useSelector((state: RootState) => state.theme.theme) || 'light'; // Get theme from Redux

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,  // Ensure it updates dynamically
        tabBarInactiveTintColor: Colors[theme].tabBarInactive, // Add an inactive color
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: Colors[theme].tabBarBackground, // Set background dynamically
          position: Platform.OS === 'ios' ? 'absolute' : 'relative',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
