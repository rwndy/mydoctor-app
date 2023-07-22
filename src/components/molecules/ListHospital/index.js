import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { Hospital1, Hospital2, Hospital3 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListHospital = ({item}) => {
  const getImage = (type) => {
    switch(type) {
      case "child":
        return Hospital2
      case "mental":
        return Hospital3
      default:
        return Hospital1
    }
  }
  return (
    <View style={styles.container}>
      <Image source={getImage(item.hospital_category)} style={styles.image}/>
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>{item.hospital_name}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
    </View>
  )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        padding: 16,
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        marginTop: 6
    }
})