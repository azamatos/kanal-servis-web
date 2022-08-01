import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { StatusBar } from 'react-native'
import { useAppSelector } from './hooks/redux'
import HomeStack from './navigation/HomeStack'
import CardsStack from './navigation/CardsStack'

export default function App() {
  const { loggedIn } = useAppSelector((state) => state.auth)

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <NavigationContainer>
          {loggedIn ? (
            <CardsStack />
          ) : (
            <HomeStack />
          )}
      </NavigationContainer>
    </Provider>
  )
}
