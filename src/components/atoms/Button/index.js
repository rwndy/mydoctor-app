import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({type, title}) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.textButton(type)}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#fff' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  textButton: type => ({
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 25,
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : '#fff',
  })
})