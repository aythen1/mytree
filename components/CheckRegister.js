import React from 'react'
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native'

import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const CheckRegister = () => {
  return (
    <View style={styles.frameParent1}>
      <View style={styles.frameContainer}>
        <Text style={[styles.labelled, styles.labelledTypo]}>
          Código de Verificación
        </Text>
      </View>
      <View style={styles.frameParent2}>
        <Pressable
          style={styles.baseBackgroundWrapper}
          // onPress={openFrameContainer10}
        >
          <TextInput
            style={styles.baseShadowBox}
            keyboardType="numeric"
            maxLength={1}
          />
        </Pressable>
        <View style={styles.baseBackgroundContainer}>
          <TextInput
            style={styles.baseShadowBox}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View style={styles.baseBackgroundContainer}>
          <TextInput
            style={styles.baseShadowBox}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View style={styles.baseBackgroundContainer}>
          <TextInput
            style={styles.baseShadowBox}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View style={styles.baseBackgroundContainer}>
          <TextInput
            style={styles.baseShadowBox}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View style={styles.baseBackgroundContainer}>
          {/* <View style={styles.baseShadowBox} /> */}
          <TextInput
            style={styles.baseShadowBox}
            keyboardType="numeric"
            maxLength={1}
          />
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
  baseShadowBox: {
    textAlign: 'center',
    height: 51,
    width: 46,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_21xl,
    fontWeight: '900',
    borderWidth: 1,
    borderColor: Color.primario1,
    borderStyle: 'solid',
    elevation: 14,
    shadowRadius: 14,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    backgroundColor: Color.white
  },
  baseBackgroundWrapper: {
    width: 45
  },
  frameParent2: {
    flexDirection: 'row',
    marginTop: 20
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

export default CheckRegister
