import React from 'react'
import { StyleSheet, View } from 'react-native'

const HeaderIcons = ({ icons }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {icons && icons.map((icon, index) => <View key={index}>{icon}</View>)}
    </View>
  )
}

const styles = StyleSheet.create({})

export default HeaderIcons
