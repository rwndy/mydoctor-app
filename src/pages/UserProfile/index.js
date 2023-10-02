import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, List, Profile } from '../../components/molecules'
import { Gap } from '../../components/atoms'
import { colors } from '../../utils'

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile"/>
      <Gap height={10}/>
      <Profile />
      <Gap height={14}/>
      <List type="next" name="Edit Profile" desc="Last update yesterday" icon="edit-profile"/>
      <List type="next" name="Edit Profile" desc="Last update yesterday" icon="translate"/>
      <List type="next" name="Edit Profile" desc="Last update yesterday" icon="rating"/>
      <List type="next" name="Edit Profile" desc="Last update yesterday" icon="description"/>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
})