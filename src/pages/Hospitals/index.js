import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Cover } from '../../assets'
import { fonts, colors } from '../../utils'
import { ListHospital } from '../../components'
import { MockHospitals } from '../../assets'

const Hospitals = () => {

  return (
    <View style={styles.page}>
        <ImageBackground source={Cover} style={styles.background}>
          <Text style={styles.title}>Nearby Hospital</Text>
          <Text style={styles.description}>3 tersedia</Text>
        </ImageBackground>
      <View style={styles.content}>
        {
          MockHospitals.data.map(hospital => {
            return (
              <ListHospital item={hospital} key={hospital.id}/>
            )
          })
        }
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    fontSize: 20
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center'
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  }

})