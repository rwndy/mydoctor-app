import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

export default function LinkComponent({title, size, align}) {
  return (
    <View>
      <Text style={styles.textLink(size, align)}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textLink: (size, align) => (
    {
      fontSize: size,
      color: colors.text.primary,
      fontFamily: fonts.primary.normal,
      textDecorationLine: 'underline',
      textAlign: align
    }
  )
})