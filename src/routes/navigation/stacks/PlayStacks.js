import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'

import Play from '../../../scenes/play/Play'
import History from '../../../scenes/history/History'
import Lyrics from '../../../scenes/lyrics/Lyrics'

const Stack = createStackNavigator()

export const PlayStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Play"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Play"
        component={Play}
        options={({ navigation }) => ({
          title: 'Play',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={({ navigation }) => ({
          title: 'History',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Lyrics"
        component={Lyrics}
        options={({ navigation }) => ({
          title: 'Lyrics',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  )
}