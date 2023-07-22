import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DummyNews1, DummyNews2, DummyNews3 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const NewsItem = ({item}) => {
  const getImageNews = () => {
    switch(item.type) {
      case 'health':
        return DummyNews2
      case 'food':
        return DummyNews1
      default:
        return DummyNews3
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Image source={getImageNews()} style={styles.image}/>
    </View>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border.primary,
    paddingBottom: 12,
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  titleWrapper: {
    flex: 1
  }
})