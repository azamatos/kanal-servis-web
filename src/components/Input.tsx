import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from '../lib/style'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = (props: any) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props
  const hasError = errors[name] && touched[name]
  return (
    <View style={[styles.flexColumn, { alignItems: 'flex-start' }]}>
      <Text style={[styles.textStyle, { padding: 3 }]}>{name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        autoCapitalize='none'
        autoCorrect={false}
        value={value}
        {...inputProps}
      />
      {hasError && <Text style={{ color: 'red' }}>{errors[name]}</Text>}
    </View>
  )
}
export default Input
