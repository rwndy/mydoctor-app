import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components/molecules'
import { MockChildrenDoctor } from '../../assets'
import { colors, fonts } from '../../utils'

const Chatting = ({ route, navigation }) => {
  const id = route?.params?.id
  const listDoctorChildren = MockChildrenDoctor.data

  const detailChildrenDoctor = listDoctorChildren.find(doctor => doctor.id === id)
  return (
    <View style={styles.page}>
      <Header title={detailChildrenDoctor.name} type="header-profile" onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 22 Maret 2023</Text>
        <ChatItem isMe/>
        <ChatItem />
      </View>
        <InputChat />
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: "center"
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: { paddingHorizontal: 16, flex: 1 }
})