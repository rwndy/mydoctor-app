import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { ILLogo, ILBg } from '../../assets'
import { Button } from '../../components'

export default function GetStartedPage() {
  return (
    <ImageBackground source={ILBg} resizeMode="cover" style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>

      <View style={styles.btnWrapper}>
        <Button title={'Get Started'} />
        <Button type={'secondary'} title={'Sign In'}/>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold'
  },
  btnWrapper: {
    flex: 0.3,
    justifyContent: 'space-between',
  }
})