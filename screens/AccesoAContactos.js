import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, View, Pressable, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
// import ENTRADACREADA1 from "../components/ENTRADACREADA1";
import { Padding, Border, FontSize, FontFamily, Color } from '../GlobalStyles'

const AccesoAContactos = () => {
  const navigation = useNavigation()
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false)

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true)
  }, [])

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false)
  }, [])

  return (
    <>
      <View style={styles.accesoAContactos}>
        <View style={styles.aadirAlLbumParent}>
          <Text style={styles.aadirAlLbum}>Añadir al álbum</Text>
          <Pressable
            style={[styles.button, styles.buttonSpaceBlock]}
            onPress={() => navigation.navigate('Perfil1')}
          >
            <Text style={styles.signTypo}>Cancelar</Text>
          </Pressable>
          <LinearGradient
            style={[styles.button1, styles.buttonLayout]}
            locations={[0, 1]}
            colors={['#dee274', '#7ec18c']}
          >
            <Pressable
              style={[styles.pressable, styles.buttonSpaceBlock]}
              onPress={openButtonContainer1}
            >
              <Text style={[styles.signIn1, styles.signTypo]}>Aceptar</Text>
            </Pressable>
          </LinearGradient>
          <View style={styles.frameParent}>
            <View style={styles.frameFlexBox}>
              <View style={styles.familiaWrapper}>
                <Text style={styles.familia}>Familia</Text>
              </View>
              <View style={styles.check}>
                <View style={[styles.checkChild, styles.buttonBorder]} />
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={styles.familiaWrapper}>
                <Text style={styles.familia}>Grupos</Text>
              </View>
              <View style={styles.check}>
                <View style={[styles.checkChild, styles.buttonBorder]} />
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={styles.familiaWrapper}>
                <Text style={styles.familia}>Amigos</Text>
              </View>
              <View style={styles.check}>
                <View style={[styles.checkChild, styles.buttonBorder]} />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <ENTRADACREADA1 onClose={closeButtonContainer1} />
        </View>
      </Modal> */}
    </>
  )
}

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Border.br_11xl
  },
  buttonLayout: {
    height: 52,
    width: 388,
    left: 20,
    position: 'absolute'
  },
  signTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  buttonBorder: {
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Color.white
  },
  frameFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 388
  },
  aadirAlLbum: {
    marginLeft: -194,
    top: 20,
    left: '50%',
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    color: Color.negro,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    position: 'absolute'
  },
  button: {
    top: 269,
    borderColor: Color.colorKhaki_100,
    height: 52,
    width: 388,
    left: 20,
    position: 'absolute',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Color.white
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  buttonContainer1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  signIn1: {
    color: Color.white
  },
  pressable: {
    height: '100%',
    backgroundColor: Color.linearBoton,
    width: '100%',
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center'
  },
  button1: {
    top: 341
  },
  familia: {
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontWeight: '700',
    color: Color.grisDiscord,
    textAlign: 'justify',
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  familiaWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  checkChild: {
    height: '105%',
    width: '105%',
    top: '-2.5%',
    right: '-2.5%',
    bottom: '-2.5%',
    left: '-2.5%',
    borderRadius: 3,
    borderColor: Color.colorGainsboro_100,
    position: 'absolute',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  check: {
    width: 20,
    height: 20
  },
  frameContainer: {
    marginTop: 15
  },
  frameParent: {
    top: 64,
    height: 90,
    alignItems: 'center',
    left: 20,
    position: 'absolute'
  },
  aadirAlLbumParent: {
    top: 0,
    left: 0,
    width: 428,
    overflow: 'hidden',
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    position: 'absolute',
    height: 413
  },
  accesoAContactos: {
    flex: 1,
    height: 413,
    width: '100%'
  }
})

export default AccesoAContactos
