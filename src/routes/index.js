import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  Home,
  Login,
  Dashboard,
  Signup,
  Profile,
  Search,
  Message,
  Notification,
  SearchResult
} from '../screens';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components/molecules';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
