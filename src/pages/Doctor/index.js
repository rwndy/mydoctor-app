import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeProfile, DoctorCategory, RatedDoctors } from '../../components/'
import { colors, fonts } from '../../utils'

const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.header}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctors />
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30
  },
  header: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    maxWidth: 209,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  }
})