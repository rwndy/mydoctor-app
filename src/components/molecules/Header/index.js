import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets'
import { Gap } from '../../atoms'
import { colors } from '../../../utils'

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <IconBack />
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
    fontFamily: 'Nunito-SemiBold',
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