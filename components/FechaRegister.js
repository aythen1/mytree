import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native'

import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const FechaRegister = () => {
  const [text, setText] = useState('')

  const handleChangeText = (input) => {
    const filteredInput = input.replace(/[^0-9/]/g, '')

    // Formatear el texto con el formato DD/MM/YYYY
    let formattedInput = filteredInput
    if (filteredInput.length === 2 && filteredInput[2] !== '/') {
      formattedInput = filteredInput.slice(0, 2) + '/' + filteredInput.slice(2)
    }
    if (filteredInput.length === 5 && filteredInput[5] !== '/') {
      formattedInput = filteredInput.slice(0, 5) + '/' + filteredInput.slice(5)
    }

    setText(formattedInput)
  }

  return (
    <View style={styles.labelledParent}>
      <Text style={[styles.labelled, styles.labelledTypo]}>
        Fecha de Nacimiento
      </Text>
      <Pressable style={styles.baseBackgroundParent}>
        <View style={[styles.baseBackground, styles.ellipseParentShadowBox]} />
        <View style={[styles.frameParent1, styles.iconPosition]}>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon5, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector79.png')}
            />
            <TextInput
              style={[styles.placeholder, styles.labelledTypo]}
              keyboardType="numeric"
              placeholder="20/12/1988"
              onChangeText={handleChangeText}
              value={text}
              maxLength={10}
            />
          </View>
          <Image
            style={[styles.iconsErrorCircle, styles.vectorIcon3Layout]}
            contentFit="cover"
            source={require('../assets/icons--error-circle.png')}
          />
        </View>
      </Pressable>
      {/* <Modal animationType="fade" transparent visible={frameContainer11Visible}>
        <View style={styles.frameContainer11Overlay}>
          <Pressable
            style={styles.frameContainer11Bg}
            // onPress={closeFrameContainer11}
          />
          <Keyboard2 />
        </View>
      </Modal> */}
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

export default FechaRegister
