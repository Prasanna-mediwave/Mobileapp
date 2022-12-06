import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../auth/SignUp';
import HomeScreen from '../pages/HomeScreen';
import SearchCource from '../pages/SearchCourse';
import MyCourse from '../pages/MyCourse';
import Account from '../pages/Account';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Results from '../pages/Results';
const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignUP" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={TabNavigation} />
        <Stack.Screen name="Result" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FCFCFF',
          paddingHorizontal: 20,
          paddingVertical: 12,
          height: 70,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        },
        tabBarInactiveTintColor: '#161719',
        tabBarActiveTintColor: '#FF8181',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchCource"
        component={SearchCource}
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCourse"
        component={MyCourse}
        options={{
          tabBarIcon: ({color, size}) => (
            <Octicons name="play" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarStyle: {
            backgroundColor: '#FCFCFF',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderTopStartRadius: 0,
            borderTopEndRadius: 0,
            borderTopWidth: 0,
            elevation: 0,
            height: 70,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunity
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
