import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import styles from '../lib/style'

const Header = () => {
  const { loggedIn } = useAppSelector((state) => state.auth)
  const { authorize } = useActions()

  const logout = () => {
    authorize(false)
  }

  return (
    <View style={[styles.flexRow, styles.header]}>
      <View style={[styles.flexRow, {width:'30%'}]}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      {loggedIn && (
        <View style={[styles.flexRow, {width:'30%'}]}>
          <Pressable onPress={logout}>
            <Image source={require('../../assets/logout.png')} />
          </Pressable>
        </View>
      )} 
    </View>
  )
}

export default Header
