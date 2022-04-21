import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILLogo } from '../../assets';
import { InputComponent, LinkComponent, Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <InputComponent label="Email Address"/>
      <Gap height={24}/>
      <InputComponent label="Password"/>
      <Gap height={10}/>
      <LinkComponent title="Forget My Password" size={12}/>
      <Gap height={40}/>
      <Button title="Sign In" onPress={() => navigation.navigate('MainApp')}/>
      <Gap height={30}/>
      <LinkComponent title="Create New Account" size={16} align="center"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontSize:20,
    lineHeight: 24,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153
  },
});