import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './Screens/DashboardScreen'
import LoginScreen from './Screens/LoginScreen'
import PrayerScreen from './Screens/PrayerScreen'
import BibleScreen from './Screens/BibleScreen'
import TestimoniesScreen from './Screens/TestimoniesScreen'
import ServiceScreen from './Screens/ServiceScreen'
import CellScreen from './Screens/CellScreen'
import TitheScreen from './Screens/TitheScreen'
import DonateScreen from './Screens/DonateScreen'
import MoneyScreen from './Screens/MoneyScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Dashboard' 
        component={DashboardScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen 
        name='Prayer' 
        component={PrayerScreen}
        options={{
          title:'Make a prayer request'
        }}
        />
        <Stack.Screen 
        name='Bible' 
        component={BibleScreen}
        options={{
          title:'Bible lessons'
        }}
        />
        <Stack.Screen 
        name='Login' 
        component={LoginScreen}
        />
        <Stack.Screen 
        name='Testimonies' 
        component={TestimoniesScreen}
        />
        <Stack.Screen 
        name='Service' 
        component={ServiceScreen}
        />
        <Stack.Screen 
        name='Cell' 
        component={CellScreen}
        />
        <Stack.Screen 
        name='Tithe' 
        component={TitheScreen}
        />
        <Stack.Screen 
        name='Donate' 
        component={DonateScreen}
        />
        <Stack.Screen 
        name='Money' 
        component={MoneyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


