import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import SettingsScreen from '../screens/SettingsScreen';

const tabBarOptions = {
  inactiveTintColor: 'gray',
  activeTintColor: 'black',
  style: {
    height: 60,
    paddingVertical: 5,
    elevation: 15,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: -0.5},
  },
  labelStyle: {
    fontSize: 14,
  },
};
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Sismics') {
            iconName = 'md-pulse';
          } else if (route.name === 'Test') {
            iconName = 'md-megaphone';
          } else if (route.name === 'Settings') {
            iconName = 'md-cog';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName as string}
              type="ionicon"
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Sismics" component={View} />
      <Tab.Screen name="Test" component={View} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
