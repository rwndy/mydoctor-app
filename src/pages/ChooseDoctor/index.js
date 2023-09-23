import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Header, ListDoctor } from '../../components'
import { MockChildrenDoctor } from '../../assets'
import { colors } from '../../utils'

export default function ChooseDoctor() {
  const listDoctorChildren = MockChildrenDoctor.data

  return (
    <View style={styles.page}>
        <Header title={"Pilih Dokter Umum"} type="dark"/>
        {
          listDoctorChildren.map(doctor => (
            <ListDoctor key={doctor.id} desc={doctor.gender} name={doctor.name} id={doctor.id} type="next"/>
          ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
  page: { backgroundColor: colors.white, flex: 1}
})