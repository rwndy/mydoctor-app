import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, Button } from '../../atoms'
import { colors, fonts } from '../../../utils'

export default function Header({title, onPress, type}) {
  return (
    <View style={styles.container(type)}>
      <Button type="icon" icon={type === "dark" ? "light" : "dark"} onPress={onPress}/>
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24}/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: type => (
    {
      color: type === 'dark' ? colors.white : colors.text.primary,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: fonts.primary[600],
      flex: 1,
    }
  ),
  container: type => (
    {
      paddingVertical: 30,
      paddingHorizontal: 16,
      backgroundColor: type === 'dark' ? colors.secondary : colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomRightRadius: type === 'dark' ? 20 : 0,
      borderBottomLeftRadius: type === 'dark' ? 20 : 0
    }
  )
})