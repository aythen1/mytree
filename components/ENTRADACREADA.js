import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Border } from '../GlobalStyles'
import PropTypes from 'prop-types'

const ENTRADACREADA = ({ onClose, message, isNavigate }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.entradaCreada}>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require('../assets/ellipse.png')}
          />
          <Image
            style={styles.checkedSymbolIcon}
            contentFit="cover"
            source={require('../assets/checkedsymbol.png')}
          />
        </View>
        <Text style={[styles.cambiosGuardados, styles.aceptarTypo]}>
          {message}
        </Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Pressable
            style={styles.pressable}
            onPress={() => {
              if (isNavigate) {
                navigation.navigate(isNavigate)
              }
              onClose()
            }}
          >
            <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  aceptarTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  ellipseIcon: {
    width: 116,
    height: 116,
    opacity: 0.4,
    zIndex: 0
  },
  checkedSymbolIcon: {
    width: 50,
    height: 50,
    zIndex: 1,
    position: 'absolute',
    top: 33,
    left: 33,
    maxHeight: '100%',
    maxWidth: '100%'
  },
  ellipseParent: {
    flexDirection: 'row'
  },
  cambiosGuardados: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.primary,
    marginTop: 20
  },
  aceptar: {
    marginTop: -11,
    marginLeft: -24,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.white
  },
  pressable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl
  },
  button: {
    width: 388,
    borderRadius: 50,
    height: 52,
    marginTop: 20
  },
  frameParent: {
    top: 20,
    alignItems: 'center'
  },
  entradaCreada: {
    backgroundColor: Color.white,
    width: '100%',
    height: 279,
    maxHeight: '100%',
    maxWidth: '100%',
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    position: 'absolute',
    bottom: 0
  }
})

export default ENTRADACREADA
