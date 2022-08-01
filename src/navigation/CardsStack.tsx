import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Header from '../components/Header'
import CardsScreen from '../screens/CardsScreen'


const Stack = createNativeStackNavigator()

const CardsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CardsScreen"
    >
      <Stack.Screen
        name="CardsScreen"
        component={CardsScreen}
        options={{
            header: () => <Header />,
          }}
      />
    </Stack.Navigator>
  )
}

export default CardsStack