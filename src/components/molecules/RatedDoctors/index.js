import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Doct1, Doct2, Doct3 } from '../../../assets'
import { Rating } from 'react-native-ratings'
import { colors, fonts } from '../../../utils'

const RatedDoctors = ({ item }) => {
  const getDoctorProfile = () => {
    switch(item.category) {
      case 'dentist':
        return Doct2
      case 'podiatrist':
        return Doct3
      default:
        return Doct1
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={getDoctorProfile()}/>
      <View style={styles.profiles}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View>
        <Rating 
        ratingCount={5} 
        readonly={true} 
        imageSize={16} 
        ratingColor={'#F8B459'}
        />
      </View>
    </View>
  )
}

export default RatedDoctors

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12
  },
  container: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: "600",
  },
  category: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: "normal",
    marginTop: 2
  },
  profiles: {
    flex: 1
  }
})