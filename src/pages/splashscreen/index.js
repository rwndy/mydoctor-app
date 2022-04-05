import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'


export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    lineHeight: 27,
    color: '#112340',
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold'
  }
})