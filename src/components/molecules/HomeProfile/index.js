import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>Riwandi</Text>
        <Text>Senior Frontend Developer</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46/2,
    marginRight: 12
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary
  }
})