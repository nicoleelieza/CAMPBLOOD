import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="signin"
          options={{ title: 'Sign In', headerShown: false }} // You can adjust the title as needed
        />
        <Stack.Screen
          name="signup"
          options={{ title: 'Sign Up', headerShown: false }} // You can adjust the title as needed
        />
      </Stack>
      <StatusBar backgroundColor="blue" style="light" />
    </>
  );
};

export default AuthLayout;