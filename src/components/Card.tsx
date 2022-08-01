import * as React from 'react'
import { Image, Text, View } from 'react-native'
import styles, { dimension } from '../lib/style'
import { ICard } from '../types'

function Card({ title, author, company, body, photo }: ICard) {
  const hasImage = Math.floor(dimension.width / 300) > 1
  return (
    <View style={styles.cardStyle}>
      <View style={{ display: 'flex', height: 280, justifyContent: 'space-around', padding: 5 }}>
        {hasImage && <Image style={{ width: 150, height: 150 }} source={{ uri: photo }} />}
        <Text style={styles.textStyle}>Author:  {author}</Text>
        <Text style={styles.textStyle}>Company:  {company}</Text>
        <Text style={styles.textStyle}>Title:  {title}</Text>
        <Text style={[styles.textStyle, { fontSize: 15, textAlign: 'justify' }]}>{body}</Text>
      </View>
    </View>
  )
}

export default Card
