import React, { useState } from 'react'
// import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import Checkbox from 'expo-checkbox'

import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const AcceptRegister = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <View style={styles.frameParent1}>
      <View style={styles.frameContainer}>
        <Text style={[styles.labelled, styles.labelledTypo]}>
          Aceptación de Privacidad en MyTree
        </Text>
      </View>
      <View style={[styles.checkParent, styles.parentFlexBox]}>
        <Checkbox
          style={{ marginRight: 15 }}
          value={isChecked}
          onValueChange={setChecked}
        />
        {/* <View style={styles.check}>
          <View style={styles.checkChild} />
        </View> */}
        <View
          style={[styles.aceptoLosTrminosYCondicioParent, styles.parentFlexBox]}
        >
          <Pressable
          // onPress={() => navigation.navigate('REGISTROTRMINOSYCONDICIO')}
          >
            <Text style={[styles.text, styles.textLayout]}>
              <Text style={[styles.aceptoLos, styles.labelledClr]}>
                {'Acepto los '}
              </Text>
              <Text style={[styles.trminosYCondiciones, styles.continuarClr]}>
                términos y condiciones
              </Text>
              <Text style={[styles.aceptoLos, styles.labelledClr]}>{` de MyTree,
`}</Text>
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.textLayout}>
              <Text style={[styles.aceptoLos, styles.labelledClr]}>
                {'así como también el '}
              </Text>
              <Text style={[styles.trminosYCondiciones, styles.continuarClr]}>
                acuerdo de privacidad
              </Text>
              <Text style={[styles.aceptoLos, styles.labelledClr]}>.</Text>
            </Text>
          </Pressable>
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
  continuarClr: {
    color: Color.primario1,
    fontFamily: FontFamily.lato
  },
  trminosYCondiciones: {
    fontWeight: '700'
  },
  labelledClr: {
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  aceptoLos: {
    fontWeight: '500'
  },
  text: {
    height: 24
  },
  textLayout: {
    width: 323,
    lineHeight: 27,
    fontSize: FontSize.size_base,
    textAlign: 'left'
  },
  parentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkParent: {
    width: 388,
    flexDirection: 'row',
    marginTop: 20
  },
  frameContainer: {
    alignItems: 'center'
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

export default AcceptRegister
