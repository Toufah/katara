import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';
import { useUser } from '@clerk/clerk-expo'
import { Image } from 'react-native'


export default function TabLayout() {

  const {user}=useUser();
  
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
        <Tabs.Screen name='home' 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen name='history' 
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color}) => <AntDesign name="linechart" size={24} color={color} />
          }}
        />
        <Tabs.Screen name='profile' 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Image source={{uri:user?.imageUrl}} style={{width: 24, height: 24, borderRadius: 99}} />
          }}
        />
    </Tabs>
  )
}