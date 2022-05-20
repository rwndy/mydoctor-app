import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconDoctor, IconMessage, IconMap, IconDoctorActive, IconMessageActive, IconMapActive } from '../../../assets'
import { colors, fonts } from '../../../utils'


export default function TabItems({type, active, onPress, onLongPress}) {

  const Icons = () => {
    if (type === 'Doctor') return active ? <IconDoctorActive /> : <IconDoctor />
    
    if (type === 'Messages') return active ? <IconMessageActive /> :<IconMessage />

    if (type === 'Hospitals') return active ? <IconMapActive />  : <IconMap />

    return <IconDoctor />
  }


  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icons />
      <Text style={styles.label(active)}>{type}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center'
 },
 label: active => ({
  color: active ? colors.main : colors.text.secondary,
  fontSize: 10,
  fontFamily: fonts.primary[600],
  marginTop: 4
 })
})