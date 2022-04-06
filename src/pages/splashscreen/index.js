import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ILLogo } from '../../assets'
import { colors } from '../../utils'


export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 2500);
  }, [])

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
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    lineHeight: 27,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
  },
})