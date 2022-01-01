import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MainScreen,
  BlogScreen,
  SkillsScreen,
  AboutMeScreen,
} from '../screens';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName='MainScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name='Home' component={MainScreen} />
      <MainStack.Screen name='About' component={AboutMeScreen} />
      <MainStack.Screen name='Skills' component={SkillsScreen} />
      <MainStack.Screen name='Blog' component={BlogScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
