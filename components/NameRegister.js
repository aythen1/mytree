import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const NameRegister = () => {
  const [name, setsetName] = useState('')

  const handleNombreChange = (text) => {
    setsetName(text)
  }

  return (
    <View style={styles.labelledParent}>
      <Text style={[styles.labelled, styles.labelledTypo]}>
        Nombre Completo
      </Text>
      <View style={styles.baseBackgroundParent}>
        <View style={[styles.baseBackground, styles.ellipseParentShadowBox]} />
        <View style={styles.frameParent1}>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon5, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector81.png')}
            />
            <TextInput
              style={styles.placeholder}
              placeholder="Nombre"
              onChangeText={handleNombreChange}
              value={name}
            ></TextInput>
          </View>
          {/* <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout]}
            contentFit="cover"
            source={require('../assets/icons--error-circle.png')}
          /> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupIconPosition: {
    // zIndex: 1
    // justifyContent: 'center',
    // alignSelf: 'center'
    // position: 'absolute'
  },
  ellipseParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)'
  },
  vectorIconLayout: {
    width: 24,
    height: 24
  },
  labelledTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  labelled: {
    color: Color.negro,
    textAlign: 'left',
    lineHeight: 41,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  vectorIcon5: {
    height: 24
  },
  placeholder: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    display: 'flex',
    width: 211,
    marginLeft: 16,
    color: Color.negro,
    textAlign: 'left',
    height: 24,
    alignItems: 'center'
  },
  vectorParent: {
    flexDirection: 'row',
    padding: 15,
    borderStyle: 'solid',
    shadowColor: 'rgba(244, 105, 76, 0.3)',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2
  },
  frameParent1: {
    top: 0,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  baseBackgroundParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    marginTop: 20
  },

  continuar: {
    color: Color.primario1,
    lineHeight: 41,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  frameGroup: {
    marginTop: 10,
    height: '66%',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15
  }
})

export default NameRegister
