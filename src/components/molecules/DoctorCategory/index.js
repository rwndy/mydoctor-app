import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILDoctUmum, ILPsikiater, ILObat } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({item}) => {

  const getIcon = () => {
    switch(item.category) {
      case 'psikiater':
        return <ILPsikiater />
      case 'medicines':
        return <ILObat />
      default:
       return  <ILDoctUmum />
    }
  }

  return (
    <View style={styles.container}>
      { getIcon() }
        <Text style={styles.label}>Saya butuh</Text>
        <Text style={styles.category}>{item.name}</Text>
    </View>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.background.main,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  label: {
    fontSize: 10,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    marginTop: 28,
  },
  category: {
    fontSize: 10,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
})