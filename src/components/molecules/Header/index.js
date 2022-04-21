import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, Button } from '../../atoms'
import { colors, fonts } from '../../../utils'

export default function Header({title, onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon" icon="dark" onPress={onPress}/>
      <Text style={styles.title}>{title}</Text>
      <Gap width={24}/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.text.primary,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    flex: 1,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center'
  }
})