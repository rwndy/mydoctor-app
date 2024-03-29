import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const Self = () => {
  return (
  <View style={styles.container}>
    <View style={styles.chatContent}>
      <Text style={styles.text}>Bu ini jojo bu...</Text>
    </View>
    <Text style={styles.date}>4.20 AM</Text>
  </View>
  )
}

export default Self


const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: 'flex-end', paddingRight: 16},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.background.main,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomEndRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8
  }
})