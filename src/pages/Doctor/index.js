import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { HomeProfile, DoctorCategory, RatedDoctors, Gap } from '../../components/'
import { colors, fonts } from '../../utils'

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.header}>Mau konsultasi dengan siapa hari ini?</Text>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={16}/>
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
              <Gap width={6}/>
            </View>

          </ScrollView>
        </View>
        <Text>Top Rated Doctors</Text>
        <RatedDoctors />
      </View>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: '#fff',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20 
  },
  header: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    maxWidth: 209,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16
  }
})