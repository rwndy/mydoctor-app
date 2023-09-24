import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'
import { Doct6 } from '../../../assets'

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
     <Button type="icon" icon={"light"} />
      <View style={styles.contents}>
        <Text style={styles.name}>HeaderProfile</Text>
        <Text style={styles.desc}>HeaderProfile</Text>
      </View>
      <Image source={Doct6} style={styles.avatar}/>
    </View>
  )
}

export default HeaderProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contents: {
    flex: 1
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.subTitle,
    textAlign: 'center',
    marginTop: 6
  }
})