import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'

import Search from '../../../scenes/search/Search'
import Sneakers from '../../../scenes/sneakers/Sneakers'
import Information from '../../../scenes/information/Information'
import Map from '../../../scenes/map/Map'
import Users from '../../../scenes/users/Users'
import Web from '../../../scenes/web/Web'
import Date from '../../../scenes/date/Date'
import Video from '../../../scenes/video/Video'

const Stack = createStackNavigator()

export const SearchStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          title: 'Search',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Sneakers"
        component={Sneakers}
        options={({ navigation }) => ({
          title: 'Sneakers',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={({ navigation }) => ({
          title: 'Information',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={({ navigation }) => ({
          title: 'Map',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={({ navigation }) => ({
          title: 'Users',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Web"
        component={Web}
        options={({ navigation }) => ({
          title: 'Web',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Date"
        component={Date}
        options={({ navigation }) => ({
          title: 'Date',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={({ navigation }) => ({
          title: 'Video',
          headerShown: true,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  )
}