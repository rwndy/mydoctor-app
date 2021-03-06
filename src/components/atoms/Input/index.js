import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

export default function InputComponent({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 12,
    color: colors.text.primary
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily:  fonts.primary.normal,
  }
})