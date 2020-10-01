import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#B4D0E2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#B4D0E2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#B4D0E2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#B4D0E2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{ // styling applied to all screens
      headerStyle: {
        backgroundColor: '#B4D0E2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Quicksand_700Bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name ="ios-menu" size={25}
          backgroundColor="#B4D0E2" onPress={() => {navigation.openDrawer
          ()}}></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
  )
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{ // styling applied to all screens
      headerStyle: {
        backgroundColor: '#B4D0E2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Quicksand_700Bold'
      }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name ="ios-menu" size={25}
          backgroundColor="#B4D0E2" onPress={() => {navigation.openDrawer
          ()}}></Icon.Button>
        )
      }} />
    </DetailsStack.Navigator>
  )