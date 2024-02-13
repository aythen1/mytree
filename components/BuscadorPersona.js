import * as React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'

const BuscadorPersona = ({ onClose }) => {
  const navigation = useNavigation()

  return (
    <View style={[styles.buscadorPersona, styles.frameChildLayout]}>
      <View style={styles.frameChildFlexBox}>
        <Text style={styles.juanTypo}>Juan Diaz</Text>
        {/* <Image
          style={[styles.frameChild, styles.frameChildFlexBox]}
          contentFit="cover"
          source={require('../assets/line-784.png')}
        /> */}
        <Pressable
          style={styles.juanGutierrez}
          onPress={() => navigation.navigate('BOTONInvitarAmigos')}
        >
          <Text style={styles.juanTypo}>Juan Gutierrez</Text>
        </Pressable>
        {/* <Image
          style={[styles.frameChild, styles.frameChildFlexBox]}
          contentFit="cover"
          source={require('../assets/line-771.png')}
        /> */}
        <Text style={[styles.juanPabloLopez, styles.juanTypo]}>
          Juan Pablo Lopez
        </Text>
        {/* <Image
          style={[styles.frameChild, styles.frameChildFlexBox]}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        /> */}
        <Text style={[styles.juanPabloLopez, styles.juanTypo]}>
          Juan Dominguez
        </Text>
        {/* <Image
          style={[styles.frameChild, styles.frameChildFlexBox]}
          contentFit="cover"
          source={require('../assets/line-803.png')}
        /> */}
        <Text style={[styles.juanPabloLopez, styles.juanTypo]}>
          Juan Garcia
        </Text>
        {/* <Image
          style={[styles.frameChild, styles.frameChildFlexBox]}
          contentFit="cover"
          source={require('../assets/line-811.png')}
        /> */}
        <Text style={[styles.juanPabloLopez, styles.juanTypo]}>
          Juan Luis Hernandez
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  frameChildFlexBox: {
    flex: 1,
    alignSelf: 'stretch'
  },
  juanTypo: {
    textAlign: 'left',
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
    alignSelf: 'stretch'
  },
  frameChild: {
    overflow: 'hidden',
    width: '100%',
    marginTop: 20,
    maxHeight: '100%',
    maxWidth: '100%'
  },
  juanGutierrez: {
    marginTop: 20
  },
  juanPabloLopez: {
    marginTop: 20
  },
  buscadorPersona: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    height: 414,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 80
  }
})

export default BuscadorPersona
