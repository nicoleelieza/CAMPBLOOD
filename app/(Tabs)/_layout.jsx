import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
export const icons = {
  home: require('../assets/icons/home.png'),
  discover: require('../assets/icons/discover.png'),
  chat: require('../assets/icons/chat.png'),
  upload: require('../assets/icons/upload.png'),
  notif: require('../assets/icons/notif.png'),
  group: require('../assets/icons/group.png'),
  profile: require('../assets/icons/profile.png'),
};


const TabIcon = ({ icon, color }) => {
  return (
    <View style={{ alignItems: 'center' }}>
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
    <Tabs
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 60,
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          color: 'white',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'HOME',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'HOME',
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: 'DISCOVER',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.discover} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'DISCOVER',
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: 'CHAT',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.chat} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'CHAT',
        }}
      />

      <Tabs.Screen
        name="upload"
        options={{
          title: 'UPLOAD',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.upload} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'UPLOAD',
        }}
      />

      <Tabs.Screen
        name="notif"
        options={{
          title: 'NOTIFICATIONS',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.notif} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'NOTIF',
        }}
      />

      <Tabs.Screen
        name="group"
        options={{
          title: 'GROUP',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.group} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'GROUP',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.profile} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'PROFILE',
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
