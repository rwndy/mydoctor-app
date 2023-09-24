import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconSendActive, IconSendDisable } from '../../../assets'
import { colors } from '../../../utils'

const ButtonChat = ({ disable }) => {
  return (
    <View style={styles.container(disable)}>
     { disable ? <IconSendDisable /> : <IconSendActive />}
    </View>
  )
}

export default ButtonChat

const styles = StyleSheet.create({
  container: disable => (
    {
      backgroundColor: disable ? colors.disable : colors.tertiary,
      width: 45,
      height: 45,
      borderRadius: 10,
      paddingTop: 3,
      paddingRight: 3,
      paddingBottom: 8,
      paddingLeft: 8,
    }
  )
})