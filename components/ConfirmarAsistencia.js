import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'
import Checkbox from 'expo-checkbox'

const ConfirmarAsistencia = ({ onClose }) => {
  return (
    <View style={styles.confirmarAsistencia}>
      <View style={styles.frameParent}>
        <View style={styles.brunoTeHaInvitadoASuEvenParent}>
          <Text style={styles.brunoTeHa}>
            ¡Bruno te ha invitado a su evento!
          </Text>
          <View
            style={[styles.opcionesDePrivacidadParent, styles.parentSpaceBlock]}
          >
            <Text style={styles.opcionesDePrivacidad}>
              Opciones de privacidad
            </Text>
            <View style={[styles.checkParent, styles.buttonFlexBox]}>
              <View style={styles.check}>
                <Checkbox />
              </View>
              <View style={[styles.aceptasWrapperFlexBox]}>
                <Text style={[styles.aceptasTypo]}>
                  ¿Aceptas que los invitados del evento te etiqueten en fotos?
                </Text>
              </View>
            </View>
            <View style={[styles.checkParent, styles.buttonFlexBox]}>
              <Checkbox />

              <View style={[styles.aceptasWrapperFlexBox]}>
                <Text style={[styles.aceptasTypo]}>
                  ¿Aceptas que los invitados te escriban por privado?
                </Text>
              </View>
            </View>
            <View style={[styles.checkParent, styles.buttonFlexBox]}>
              <Checkbox />

              <View style={styles.aceptasWrapperFlexBox}>
                <Text style={styles.aceptasTypo}>
                  ¿Aceptas que los invitados vean tu perfil?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <LinearGradient
          style={[styles.button, styles.buttonFlexBox]}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Text style={styles.signIn}>Aceptar</Text>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  parentSpaceBlock: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  buttonFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  aceptasWrapperFlexBox: {
    marginLeft: 20,
    flexDirection: 'row'
    // height: 60
    // alignItems: 'center'
  },
  aceptasTypo: {
    color: Color.gris,
    textAlign: 'left',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  brunoTeHa: {
    fontSize: FontSize.title2Regular_size,
    lineHeight: 33,
    color: Color.primario2,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch'
  },
  opcionesDePrivacidad: {
    fontWeight: '500',
    color: Color.negro,
    textAlign: 'left',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    // flex: 1,
    alignSelf: 'stretch'
  },
  checkChild: {
    height: '105%',
    width: '105%',
    top: '-2.5%',
    right: '-2.5%',
    bottom: '-2.5%',
    left: '-2.5%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    position: 'absolute',
    backgroundColor: Color.white
  },
  vectorIcon: {
    height: '34.5%',
    width: '45%',
    top: '35%',
    right: '30%',
    bottom: '30.5%',
    left: '25%',
    overflow: 'hidden',
    position: 'absolute'
  },
  check: {
    width: 20,
    height: 20
  },

  checkParent: {
    marginTop: 20,
    alignSelf: 'stretch'
    // flex: 1
  },
  opcionesDePrivacidadParent: {
    height: 175
  },
  brunoTeHaInvitadoASuEvenParent: {
    height: 228,
    alignItems: 'center',
    width: 388
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    flex: 1
  },
  button: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 93,
    justifyContent: 'center',
    width: 388,
    flexDirection: 'row',
    borderRadius: Border.br_11xl
  },
  frameParent: {
    // flex: 1,
    alignSelf: 'stretch'
  },
  confirmarAsistencia: {
    // height: 413,
    position: 'absolute',
    bottom: 0,
    padding: Padding.p_xl,
    backgroundColor: Color.white,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl
  }
})

export default ConfirmarAsistencia
