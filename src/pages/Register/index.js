import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, InputComponent, Button, Gap } from '../../components'
import { colors } from '../../utils'


export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Header title={'Daftar Akun'} onPress={() => navigation.goBack()}/>
     <View style={styles.content}>
     <Text>Register</Text>
      <InputComponent label="Full Name"/>
      <Gap height={24}/>
      <InputComponent label="Pekerjaan"/>
      <Gap height={24}/>
      <InputComponent label="Email"/>
      <Gap height={24}/>
      <InputComponent label="Password"/>
      <Gap height={40}/>
      <Button title="Continue"/>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  }
})