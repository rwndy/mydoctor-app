import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, Gap, Header, LinkComponent } from '../../components'
import { ILReplacePhoto, IconAddBtn } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadImage = () => {
  return (
    <View style={styles.container}>
      <Header title={'Upload Photo'}/>
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarContainer}>
            <Image source={ILReplacePhoto} style={styles.avatar}/>
            <IconAddBtn style={styles.addPhoto}/>
          </View>
          <Text style={styles.name}>Riwandi</Text>
          <Text style={styles.profession}>Sr. React Developer</Text>
        </View>
        <View style={styles.contentButton}>
          <Button title={'Upload and Continue'}/>
          <Gap height={30}/>
          <LinkComponent title={'Skip for this'} align="center" size={16}/>
          <Gap height={64}/>
        </View>
      </View>
    </View>
  )
}

export default UploadImage

const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
  },
  avatarContainer: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 130/2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  addPhoto: {
    position: 'absolute',
    right: 6,
    bottom: 8,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center'
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})