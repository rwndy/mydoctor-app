import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { HomeProfile, DoctorCategory, RatedDoctors, Gap, NewsItem } from '../../components/'
import { colors, fonts } from '../../utils'

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperSection}>
              <Gap height={30} />
              <HomeProfile />
              <Text style={styles.header}>Mau konsultasi dengan siapa hari ini?</Text>
            </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32}/>
                  <DoctorCategory />
                  <DoctorCategory />
                  <DoctorCategory />
                  <DoctorCategory />
                <Gap width={22}/>
              </View>

            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctors />
            <RatedDoctors />
            <RatedDoctors />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          <Gap height={30} />
        </ScrollView>
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
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {
    paddingHorizontal: 16
  }
})