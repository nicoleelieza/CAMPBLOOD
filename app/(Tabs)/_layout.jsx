import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }} 
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.home} 
          color={color} />,
        }}
      />
      <Tabs.Screen
    name="discover"
    options={{
      title: 'Discover',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.discover}
          color={color}
          name="discover"
          focused={focused}
        />
      ),
    }}
  />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.chat} 
          color={color} />,
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Upload',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.upload} 
          color={color} />,
        }}
      />
    </Tabs>
    
  );
  
};

<Tabs.Screen
name="notif"
options={{
  title: 'Notification',
  headerShown: false,
  tabBarIcon: ({ color, focused }) => (
    <TabIcon
      icon={icons.notif}
      color={color}
      name="notif"
      focused={focused}
    />
  ),
}}
/>
 
  export default TabsLayout;
