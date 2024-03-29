import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TouchableOpacity
} from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { FontFamily, FontSize, Color } from '../GlobalStyles'
import Etiquetados from './Etiquetados'
import EnviarMensajeSVG from '../components/svgs/EnviarMensajeSVG'
import CompartirSVG from '../components/svgs/CompartirSVG'

const Post = () => {
  const [showTagged, setShowTagged] = useState(false)
  const [showIcons, setShowIcons] = useState(false)

  const toggleModal = () => {
    setShowTagged(!showTagged)
  }

  const toggleIcons = () => {
    setShowIcons((prevShowIcons) => !prevShowIcons)
  }

  return (
    <Pressable style={styles.rectangleParent} onPress={toggleIcons}>
      <LinearGradient
        style={styles.frameChild}
        locations={[0.77, 1]}
        colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
      >
        <TouchableOpacity style={styles.tagged} onPress={toggleModal}>
          <Image
            style={{ width: 30, height: 30 }}
            contentFit="cover"
            source={require('../assets/vector39.png')}
          />
        </TouchableOpacity>

        {showIcons ? (
          <View style={styles.iconsContainer}>
            <EnviarMensajeSVG />
            <CompartirSVG />
          </View>
        ) : (
          <View style={styles.iconsContainerEmpty}></View>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.camila}>Camila</Text>
          <Text style={styles.yendoALa}>
            Yendo a la casa de la tía Elisa! Los esperamos allá, familia!
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.frameChild}
        locations={[0.77, 1]}
        colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
      >
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require('../assets/vector39.png')}
        />

        {showIcons ? (
          <View style={styles.iconsContainer}>
            <EnviarMensajeSVG />
            <CompartirSVG />
          </View>
        ) : (
          <View style={styles.iconsContainerEmpty}></View>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.camila}>Camila</Text>
          <Text style={styles.yendoALa}>
            Yendo a la casa de la tía Elisa! Los esperamos allá, familia!
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.frameChild}
        locations={[0.77, 1]}
        colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
      >
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require('../assets/vector39.png')}
        />

        {showIcons ? (
          <View style={styles.iconsContainer}>
            <EnviarMensajeSVG />
            <CompartirSVG />
          </View>
        ) : (
          <View style={styles.iconsContainerEmpty}></View>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.camila}>Camila</Text>
          <Text style={styles.yendoALa}>
            Yendo a la casa de la tía Elisa! Los esperamos allá, familia!
          </Text>
        </View>
      </LinearGradient>

      {showTagged && (
        <Modal
          isVisible={showTagged}
          onRequestClose={toggleModal}
          transparent={true}
        >
          <Etiquetados setShowTagged={setShowTagged} />
        </Modal>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 45,
    width: 45,
    left: 60,
    top: 50
  },
  frameChild: {
    backgroundColor: Color.mytreeClarito,
    left: 0,
    top: 15,
    height: 500,
    marginBottom: 30
  },
  vectorIcon: {
    marginTop: -29,
    marginLeft: -40,
    width: 78,
    left: '50%',
    top: '50%'
  },
  rectangleParent: {
    height: '85%',
    top: 15
  },
  camila: {
    fontSize: FontSize.size_5xl,
    color: Color.white,
    fontWeight: '700'
  },
  yendoALa: {
    marginTop: 20,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    color: Color.white
  },
  textContainer: {
    padding: 15,
    top: '35%'
  },
  tagged: {
    borderWidth: 1,
    borderColor: Color.colorLavender_100,
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    left: 15
  },
  iconsContainer: {
    left: '5%',
    gap: 50,
    top: '30%'
  },
  iconsContainerEmpty: {
    height: 124
  }
})

export default Post
