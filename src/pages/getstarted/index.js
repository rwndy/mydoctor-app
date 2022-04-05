import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { ILLogo, ILBg } from '../../assets'
import { Button, Gap } from '../../components'

export default function GetStartedPage({navigation}) {
  return (
    <ImageBackground source={ILBg} resizeMode="cover" style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>

      <View>
        <Button title={'Get Started'} onPress={() => navigation.navigate('Register')} />
        <Gap height={16}/>
        <Button type={'secondary'} title={'Sign In'} onPress={() => navigation.replace('Login')}/>
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
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
    lineHeight: 33,
  },
})