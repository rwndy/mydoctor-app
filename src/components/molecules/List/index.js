import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Doct4, Doct5, Doct6, Doct7, Doct8, IconDescription, IconEditProfile, IconRating, IconRight, IconTranslate } from '../../../assets'
import { colors, fonts } from '../../../utils'


export default function List({ name, desc, id, type, onPress, icon }) {

    const getAvatarDoctor = (id) => {
        switch (id) {
            case 1:
              return Doct4
            case 2:
              return Doct5
            case 3:
              return Doct6
            case 4:
              return Doct7
            case 5:
              return Doct8
            default:
               return
        }
    }

    const Icons = () => {
      switch(icon) {
        case "edit-profile":
          return <IconEditProfile />
        case "translate":
          return <IconTranslate />
        case "rating":
          return <IconRating />
        case "description":
          return <IconDescription />
        default:
          return <IconEditProfile />
      }
    }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        { 
          icon ? <Icons /> : <Image source={getAvatarDoctor(id)} style={styles.avatar}/>
        }
        <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text>{desc}</Text>
        </View>
          { type === 'next' && <IconRight />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    name: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.text.primary,
    },
    description: {
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.secondary,
    },
    content: {
      flex: 1,
      marginLeft: 16,
    }
})