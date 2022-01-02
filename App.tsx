import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackScreen from './src/navigation/Main';
import {
  MainScreen,
  AboutMeScreen,
  ContactScreen,
  SkillsScreen,
  WorkScreen,
  BlogScreen,
} from './src/screens';
import { COLOR } from './globalStyles';

export default function App() {
  const linking = {
    prefixes: ['https://localhost:19006'],
    config: {
      screens: {
        Root: {
          path: '/',
          initialRouteName: '/',
          screens: {
            MainScreen: '/',
            AboutMeScreen: '/About',
            SkillsScreen: '/Skills',
            BlogScreen: '/Blog',
          },
        },
      },
    },
  };
  const { height, width, scale } = useWindowDimensions();

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <MainStackScreen />
    </NavigationContainer>
  );
}
