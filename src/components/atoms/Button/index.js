import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import BtnIcon from './BtnIcon';

export default function Button({type, title, onPress, icon}) {

  return (
   <>
    {
      type === 'icon' ? <BtnIcon icon={icon} onPress={onPress}/> :  
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.textButton(type)}>{title}</Text>
      </TouchableOpacity>
    }
   </>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.main,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  textButton: type => ({
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    color: type === 'secondary' ? colors.text.primary : colors.white,
    
  })
});