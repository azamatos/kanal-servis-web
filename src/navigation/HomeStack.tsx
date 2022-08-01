import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Header from '../components/Header'
import HomeScreen from '../screens/HomeScreen'


const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            header: () => <Header />,
          }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack