import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import Card from '../components/Card'
import { fetchData } from '../components/CardData'
import { ICard } from '../types'
import styles, { dimension } from '../lib/style'
import { useActions } from '../hooks/actions'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Item {
  item: ICard
}

function CardsScreen() {
  const [cards, setCards] = useState<ICard[] | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const { authorize } = useActions()
  const columnNumber = Math.floor(dimension.width / 300) 

	const getData = async () => {
		try {
			setLoading(true)
			setCards(await Promise.all(fetchData()))
		} catch (err) {
			console.log(err)
			setCards(null)
		} finally {
			setLoading(false)
		}
	}

  useEffect(() => {
    authorize(true)
    
    getData()
  }, [])

  const renderItem = ({ item }: Item) => <Card {...item} />

  return (
    <SafeAreaView style={[styles.flexColumn, styles.cardsScreen]}>
      <FlatList
        style={styles.cards}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.index)}
        numColumns={columnNumber}
				onRefresh={getData}
				refreshing={loading}
      />
    </SafeAreaView>
  )
}

export default CardsScreen
