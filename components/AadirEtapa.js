import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontSize, FontFamily, Padding, Color, Border } from '../GlobalStyles'

const AadirEtapa = ({ onClose }) => {
  return (
    <View style={styles.aadirEtapa}>
      <Text style={[styles.aadirEtapa1, styles.etapaTypo]}>Añadir etapa</Text>
      <View style={styles.field}>
        <Text style={[styles.nuevaEtapa, styles.signInTypo]}>Nueva etapa</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.sugerencias, styles.sugerenciasTypo]}>
          Sugerencias:
        </Text>
        <View style={[styles.buttonFlexBox]}>
          <Text style={[styles.bachillerato, styles.sugerenciasTypo]}>
            Bachillerato
          </Text>
        </View>
        <View style={[styles.buttonFlexBox]}>
          <Text style={[styles.bachillerato, styles.sugerenciasTypo]}>
            Adulto Jóven
          </Text>
        </View>
        <View style={[styles.buttonFlexBox]}>
          <Text style={[styles.bachillerato, styles.sugerenciasTypo]}>
            Preadolescente
          </Text>
        </View>
      </View>

      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={['#dee274', '#7ec18c']}
      >
        <Text style={[styles.signIn, styles.signInTypo]}>Guardar</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  etapaTypo: {
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0,
    left: 20
    // position: 'absolute'
  },
  signInTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato
  },
  sugerenciasTypo: {
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    letterSpacing: 0
  },
  buttonFlexBox: {
    marginLeft: 6,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.secundario,
    // top: 126,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    // position: 'absolute',
    borderRadius: Border.br_11xl
  },
  aadirEtapa1: {
    top: 20,
    fontSize: FontSize.size_xl,
    color: Color.textTextPrimary,
    fontFamily: FontFamily.lato,
    textAlign: 'left',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0
  },
  nuevaEtapa: {
    marginTop: -9.5,
    top: '50%',
    lineHeight: 19,
    color: Color.gris,
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0,
    left: 20,
    // position: 'absolute',
    fontSize: FontSize.size_base
  },
  field: {
    // top: 64,
    marginTop: 20,
    borderRadius: Border.br_3xs,
    // backgroundColor: Color.fAFAFA,
    height: 49,
    // overflow: 'hidden',
    width: '100%'
    // left: 20
    // position: 'absolute'
  },
  signIn: {
    flex: 1,
    letterSpacing: 1,
    color: Color.white,
    textAlign: 'center',
    fontSize: FontSize.size_base,
    lineHeight: 24
  },
  button: {
    marginVertical: 30,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: Border.br_11xl
  },
  sugerencias: {
    // top: 133,
    color: Color.primary,
    // left: 20,
    // position: 'absolute',
    lineHeight: 14,
    fontSize: FontSize.size_xs
  },
  bachillerato: {
    color: Color.primario1
  },
  button1: {
    left: 92
  },
  button2: {
    left: 181
  },

  aadirEtapa: {
    backgroundColor: Color.white,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginTop: 30,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl
  }
})

export default AadirEtapa
