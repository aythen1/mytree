import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import StoriesVideosDiarios from '../components/StoriesVideosDiarios'
import ButtonsMensajeria from '../components/ButtonsMensajeria'
import Search from '../components/Search'
import Messages from '../components/Messages'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'

const MENSAJERA = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.mensajera}>
      <Text style={styles.videodiarios}>Videodiarios</Text>
      <View style={{ marginTop: 50, paddingHorizontal: 15 }}>
        <StoriesVideosDiarios />
        <ButtonsMensajeria />
        <Search />
        <Messages />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  videodiarios: {
    top: 35,
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    left: 20
  },
  mensajera: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  }
})

export default MENSAJERA
