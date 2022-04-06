import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBack, IconLightBack } from '../../../assets'

export default function BtnIcon({onPress, icon}) {
  const changeIcons = () => {
    switch (icon) {
      case icon === 'dark':
       return <IconBack />
      case icon === 'light':
      return <IconLightBack />
    
      default:
        return <IconBack />
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
     {
       changeIcons()
     }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})