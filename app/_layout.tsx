import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"])
  return (
    <Stack 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='exercises/index' options={{
        presentation: 'fullScreenModal'
      }} />
      <Stack.Screen name='exercises/detail/index' options={{
        presentation: 'modal'
      }} />
    </Stack>
  )
}