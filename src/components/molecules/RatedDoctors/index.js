import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Doct1 } from '../../../assets'
import { Rating } from 'react-native-ratings'
import { colors, fonts } from '../../../utils'

const RatedDoctors = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={Doct1}/>
      <View style={styles.profiles}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
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
    fontWeight: fonts.primary[600],
  },
  category: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: fonts.primary.normal,
    marginTop: 2
  },
  profiles: {
    flex: 1
  }
})