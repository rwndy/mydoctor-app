import { TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBack, IconLightBack } from '../../../assets'

export default function BtnIcon({onPress, icon}) {
  const changeIcons = () => {
   if (icon === "dark") {
    return <IconBack />
   }

   if (icon === "light") {
    return <IconLightBack />
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