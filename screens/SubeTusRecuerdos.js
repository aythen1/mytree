import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderIcons from '../components/HeaderIcons'
import BookSVG from '../components/svgs/BookSVG'
import { Border, FontSize, Color, FontFamily, Padding } from '../GlobalStyles'
import ImageSVG from '../components/svgs/ImageSVG'
import VideoSVG from '../components/svgs/VideoSVG'
import VoiceSVG from '../components/svgs/VoiceSVG'

const SubeTusRecuerdos = ({ onClose }) => {
  return (
    <View style={[styles.subeTusRecuerdos]}>
      <View>
        <View style={styles.seleccionarParent}>
          <Text style={styles.seleccionar}>Seleccionar</Text>
          <View style={styles.imageParent}>
            <HeaderIcons
              icons={[<ImageSVG />, <VideoSVG />, <BookSVG />, <VoiceSVG />]}
            />
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/frame-15477548421.png')}
        />
      </View>

      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={['#dee274', '#7ec18c']}
      >
        <Pressable onPress={onClose}>
          <Text style={styles.signIn}>Guardar</Text>
        </Pressable>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: 'center',
    borderRadius: Border.br_11xl,
    alignItems: 'center',
    marginBottom: 15
  },
  iconSpaceBlock: {
    marginLeft: 23,
    overflow: 'hidden'
  },
  seleccionar: {
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  imageIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden'
  },
  videoIcon: {
    width: 26,
    height: 20
  },
  documentIcon: {
    width: 23,
    height: 23
  },
  voiceIcon: {
    width: 20,
    height: 25
  },
  imageParent: {
    marginLeft: 125,
    flexDirection: 'row',
    alignItems: 'center'
  },
  seleccionarParent: {
    flexDirection: 'row'
  },
  frameChild: {
    height: 246,
    marginTop: 20,
    width: 388
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  button: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 5,
    width: '100%',
    flexDirection: 'row'
  },
  subeTusRecuerdos: {
    backgroundColor: Color.white,
    width: '100%',
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    padding: Padding.p_xl,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SubeTusRecuerdos
