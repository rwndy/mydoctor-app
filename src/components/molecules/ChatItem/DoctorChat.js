import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors,fonts } from '../../../utils'
import { Doct4 } from '../../../assets'

const DoctorChat = () => {
  return (
    <View style={styles.container}>
      <Image source={Doct4} style={styles.avatar}/>
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Oh tentu saja tidak karena jeruk itu sangat sehat...</Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  )
}

export default DoctorChat

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: 'flex-end', flexDirection: 'row'},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.main,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12
  }
})