import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'

const CONFIRMARPARENTESCO = ({ onClose }) => {
  return (
    <View style={styles.confirmarParentesco}>
      <View style={styles.hasSidoInvitadoAFormarParParent}>
        <Text style={styles.hasSidoInvitado}>
          Has sido invitado a formar parte de MyTree
        </Text>
        <View style={styles.frameParent}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/mask-group15.png')}
          />
          <View>
            <Text style={[styles.umbertoDeMartini, styles.hermanoTypo]}>
              Umberto de Martini
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.hermano]}>Hermano</Text>
      <View style={{ marginTop: 60 }}>
        <View style={styles.button}>
          <Text style={styles.signTypo}>Confirmar Parentezco</Text>
        </View>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Text style={[styles.signIn1, styles.signTypo]}>Aceptar</Text>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hermanoTypo: {
    // textAlign: 'left',
    // left: 1,
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
    // position: 'absolute'
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_5xl,
    // left: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    // position: 'absolute',
    borderRadius: Border.br_11xl
  },
  signTypo: {
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    flex: 1,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    lineHeight: 24
  },
  hasSidoInvitado: {
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontWeight: '300',
    fontStyle: 'italic'
  },
  maskGroupIcon: {
    width: 50,
    height: 50
  },
  umbertoDeMartini: {
    fontWeight: '500',
    marginLeft: 10
  },
  hermano: {
    // top: 26,
    fontWeight: '300',
    fontStyle: 'italic',
    marginLeft: 70
  },
  frameParent: {
    // marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  hasSidoInvitadoAFormarParParent: {
    marginTop: 20
  },
  button: {
    // top: 269,
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_5xl,
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1.5,
    backgroundColor: Color.white
  },
  signIn1: {
    color: Color.mytreeClarito
  },
  button1: {
    // top: 341,
    marginTop: 15,
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.linearBoton
  },
  confirmarParentesco: {
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.white,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl
  }
})

export default CONFIRMARPARENTESCO
