import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Doct3 } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ListDoctor() {
  return (
    <View style={styles.container}>
        <Image source={Doct3} style={styles.avatar}/>
        <View>
            <Text style={styles.name}>Alexander Jannie</Text>
            <Text>Baik ibu, terima kasih banyak atas wakt...</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        alignItems: 'center'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontWeight: fonts.primary.normal,
        color: colors.text.primary,
    },
    description: {
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.secondary,
    }
})