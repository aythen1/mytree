import React, { useState, useCallback } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  ScrollView
} from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import OpcionesTituloDelEvento from '../components/OpcionesTituloDelEvento'
import FechaYHora from '../components/FechaYHora'
import Lugar from '../components/Lugar'
import DiseoDeLaInvitacion from '../components/DiseoDeLaInvitacion'
import FormaDeEnvo from '../components/FormaDeEnvo'
import Invitados from '../components/Invitados'
import { useNavigation } from '@react-navigation/native'
import FECHA2 from '../components/FECHA2'
import ENTRADACREADA4 from '../components/ENTRADACREADA4'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'

const CrearEvento = () => {
  const [arrowDown2IconVisible, setArrowDown2IconVisible] = useState(false)
  const [arrowDown2Icon1Visible, setArrowDown2Icon1Visible] = useState(false)
  const [arrowDown2Icon2Visible, setArrowDown2Icon2Visible] = useState(false)
  const [arrowDown2Icon3Visible, setArrowDown2Icon3Visible] = useState(false)
  const [arrowDown2Icon4Visible, setArrowDown2Icon4Visible] = useState(false)
  const [arrowDown2Icon5Visible, setArrowDown2Icon5Visible] = useState(false)
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false)
  const [buttonContainer2Visible, setButtonContainer2Visible] = useState(false)
  const navigation = useNavigation()

  const openArrowDown2Icon = useCallback(() => {
    setArrowDown2IconVisible(true)
  }, [])

  const closeArrowDown2Icon = useCallback(() => {
    setArrowDown2IconVisible(false)
  }, [])

  const openArrowDown2Icon1 = useCallback(() => {
    setArrowDown2Icon1Visible(true)
  }, [])

  const closeArrowDown2Icon1 = useCallback(() => {
    setArrowDown2Icon1Visible(false)
  }, [])

  const openArrowDown2Icon2 = useCallback(() => {
    setArrowDown2Icon2Visible(true)
  }, [])

  const closeArrowDown2Icon2 = useCallback(() => {
    setArrowDown2Icon2Visible(false)
  }, [])

  const openArrowDown2Icon3 = useCallback(() => {
    setArrowDown2Icon3Visible(true)
  }, [])

  const closeArrowDown2Icon3 = useCallback(() => {
    setArrowDown2Icon3Visible(false)
  }, [])

  const openArrowDown2Icon4 = useCallback(() => {
    setArrowDown2Icon4Visible(true)
  }, [])

  const closeArrowDown2Icon4 = useCallback(() => {
    setArrowDown2Icon4Visible(false)
  }, [])

  const openArrowDown2Icon5 = useCallback(() => {
    setArrowDown2Icon5Visible(true)
  }, [])

  const closeArrowDown2Icon5 = useCallback(() => {
    setArrowDown2Icon5Visible(false)
  }, [])

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true)
  }, [])

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false)
  }, [])

  const openButtonContainer2 = useCallback(() => {
    setButtonContainer2Visible(true)
  }, [])

  const closeButtonContainer2 = useCallback(() => {
    setButtonContainer2Visible(false)
  }, [])

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={[styles.crearEvento]}>
          <View style={[styles.crearEventoInner, styles.frameParentLayout]}>
            <View style={[styles.frameParent, styles.frameParentPosition]}>
              <View style={styles.fieldWithTitleParent}>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Titulo del evento
                    </Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <View style={styles.placeholderInput}>
                      <Text style={[styles.search, styles.searchLayout]} />
                    </View>
                    <Pressable
                      style={styles.arrowDown2}
                      onPress={openArrowDown2Icon}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/arrowdown26.png')}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Fecha y hora
                    </Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <View style={styles.placeholderInput}>
                      <Text style={[styles.search, styles.searchLayout]} />
                    </View>
                    <Pressable
                      style={styles.arrowDown2}
                      onPress={openArrowDown2Icon1}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/arrowdown26.png')}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>Lugar</Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <View style={styles.placeholderInput}>
                      <Text style={[styles.search, styles.searchLayout]} />
                    </View>
                    <Pressable
                      style={styles.arrowDown2}
                      onPress={openArrowDown2Icon2}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/arrowdown26.png')}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Diseño de la invitación
                    </Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <View style={styles.placeholderInput}>
                      <Text style={[styles.search, styles.searchLayout]} />
                    </View>
                    <Pressable
                      style={styles.arrowDown2}
                      onPress={openArrowDown2Icon3}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/arrowdown26.png')}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Forma de envío
                    </Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <View style={styles.placeholderInput}>
                      <Text style={[styles.search, styles.searchLayout]} />
                    </View>
                    <Pressable
                      style={styles.arrowDown2}
                      onPress={openArrowDown2Icon4}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/arrowdown26.png')}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Invitados
                    </Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <View style={styles.placeholderInput}>
                      <Text style={[styles.search, styles.searchLayout]} />
                    </View>
                    <Pressable
                      style={styles.arrowDown2}
                      onPress={openArrowDown2Icon5}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/arrowdown26.png')}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.fieldWithTitle1}>
                  <View style={styles.titleBase}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Código del evento
                    </Text>
                  </View>
                  <View style={[styles.field, styles.fieldFlexBox]}>
                    <Text style={[styles.aadirCodigo, styles.titleTypo]}>
                      Añadir ‘#Codigo’
                    </Text>
                  </View>
                </View>
                <View style={styles.fiestaSorpresaParent}>
                  <Text style={[styles.title, styles.titleTypo]}>
                    ¿Fiesta sorpresa?
                  </Text>
                  <Text style={styles.siNoTypo}>
                    <Text style={styles.siTypo}>
                      <Text style={styles.si1}>Si</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.no}>No</Text>
                  </Text>
                </View>
                <View style={styles.frameGroup}>
                  <View style={styles.opcionesDePrivacidadWrapper}>
                    <Text style={[styles.title, styles.titleTypo]}>
                      Opciones de Privacidad
                    </Text>
                  </View>
                  <Image
                    style={styles.arrowDown2Icon}
                    contentFit="cover"
                    source={require('../assets/arrowdown27.png')}
                  />
                </View>
              </View>
              <View style={[styles.buttonBar, styles.fieldFlexBox]}>
                <Pressable
                  style={[styles.button, styles.buttonSpaceBlock]}
                  onPress={() => navigation.navigate('CALENDARIO')}
                >
                  <Text style={[styles.signIn, styles.signTypo]}>Cancelar</Text>
                </Pressable>
                <LinearGradient
                  style={styles.button1}
                  locations={[0, 1]}
                  colors={['#dee274', '#7ec18c']}
                >
                  <Pressable
                    style={[styles.pressable, styles.pressableFlexBox]}
                    onPress={openButtonContainer1}
                  >
                    <Text style={[styles.signIn1, styles.signTypo]}>
                      Programar Envío
                    </Text>
                  </Pressable>
                </LinearGradient>
              </View>
              <LinearGradient
                style={styles.button2}
                locations={[0, 1]}
                colors={['#dee274', '#7ec18c']}
              >
                <Pressable
                  style={[styles.pressable1, styles.pressableFlexBox]}
                  onPress={openButtonContainer2}
                >
                  <Text style={[styles.signIn2, styles.signTypo]}>Enviar</Text>
                </Pressable>
              </LinearGradient>
              <View style={styles.frameChild} />
            </View>
          </View>
          <View style={[styles.crearEventoChild, styles.frameParentPosition]} />
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <View style={styles.image6Wrapper}>
              <Image
                style={styles.image6Icon}
                contentFit="cover"
                source={require('../assets/image-6.png')}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.frameViewPosition]}>
            <Pressable
              style={styles.back}
              onPress={() => navigation.navigate('CALENDARIO')}
            >
              <Image
                style={[styles.icon6, styles.icon6Layout]}
                contentFit="cover"
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Text style={[styles.crearEvento1, styles.siTypo]}>
              Crear evento
            </Text>
          </View>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={arrowDown2IconVisible}>
        <View style={styles.arrowDown2IconOverlay}>
          <Pressable
            style={styles.arrowDown2IconBg}
            onPress={closeArrowDown2Icon}
          />
          <OpcionesTituloDelEvento onClose={closeArrowDown2Icon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={arrowDown2Icon1Visible}>
        <View style={styles.arrowDown2Icon1Overlay}>
          <Pressable
            style={styles.arrowDown2Icon1Bg}
            onPress={closeArrowDown2Icon1}
          />
          <FechaYHora onClose={closeArrowDown2Icon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={arrowDown2Icon2Visible}>
        <View style={styles.arrowDown2Icon2Overlay}>
          <Pressable
            style={styles.arrowDown2Icon2Bg}
            onPress={closeArrowDown2Icon2}
          />
          <Lugar onClose={closeArrowDown2Icon2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={arrowDown2Icon3Visible}>
        <View style={styles.arrowDown2Icon3Overlay}>
          <Pressable
            style={styles.arrowDown2Icon3Bg}
            onPress={closeArrowDown2Icon3}
          />
          <DiseoDeLaInvitacion onClose={closeArrowDown2Icon3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={arrowDown2Icon4Visible}>
        <View style={styles.arrowDown2Icon4Overlay}>
          <Pressable
            style={styles.arrowDown2Icon4Bg}
            onPress={closeArrowDown2Icon4}
          />
          <FormaDeEnvo onClose={closeArrowDown2Icon4} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={arrowDown2Icon5Visible}>
        <View style={styles.arrowDown2Icon5Overlay}>
          <Pressable
            style={styles.arrowDown2Icon5Bg}
            onPress={closeArrowDown2Icon5}
          />
          <Invitados onClose={closeArrowDown2Icon5} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <FECHA2 onClose={closeButtonContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainer2Visible}>
        <View style={styles.buttonContainer2Overlay}>
          <Pressable
            style={styles.buttonContainer2Bg}
            onPress={closeButtonContainer2}
          />
          <ENTRADACREADA4 onClose={closeButtonContainer2} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  icon6Layout: {
    overflow: 'hidden',
    width: '100%'
  },
  frameParentLayout: {
    height: 785,
    width: '100%'
  },
  frameParentPosition: {
    top: 0,
    position: 'absolute'
  },
  titleTypo: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  fieldFlexBox: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    flex: 1
  },
  signTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  pressableFlexBox: {
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  frameViewPosition: {
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  siTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.lato
  },
  navigationIconPosition: {
    position: 'absolute',
    left: 0
  },
  title: {
    color: Color.textTextPrimary,
    fontWeight: '500',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    letterSpacing: 0
  },
  titleBase: {
    paddingBottom: Padding.p_7xs,
    flexDirection: 'row',
    width: 388
  },
  search: {
    color: Color.textPlaceholder,
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
    lineHeight: 24
  },
  placeholderInput: {
    flexDirection: 'row',
    flex: 1
  },
  arrowDown2IconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
    // position: 'absolute',
    // bottom: 0
  },
  arrowDown2IconBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  arrowDown2: {
    height: 12,
    marginLeft: 24,
    width: 24
  },
  field: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_smi,
    width: 388
  },
  arrowDown2Icon1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  arrowDown2Icon1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  fieldWithTitle1: {
    marginTop: 20,
    width: '100%',
    backgroundColor: Color.fAFAFA
  },
  arrowDown2Icon2Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  arrowDown2Icon2Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  arrowDown2Icon3Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  arrowDown2Icon3Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  arrowDown2Icon4Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  arrowDown2Icon4Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  arrowDown2Icon5Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  arrowDown2Icon5Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  aadirCodigo: {
    color: '#b3b3b3',
    fontWeight: '500',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    letterSpacing: 0
  },
  si1: {
    color: Color.primario1
  },
  text: {
    color: Color.white
  },
  no: {
    color: Color.grisHome,
    fontFamily: FontFamily.lato,
    fontWeight: '500'
  },
  siNoTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: 'left'
  },
  fiestaSorpresaParent: {
    justifyContent: 'space-between',
    marginTop: 20,
    flexDirection: 'row',
    width: 388,
    alignItems: 'center'
  },
  opcionesDePrivacidadWrapper: {
    width: 359
  },
  arrowDown2Icon: {
    width: 9,
    height: 16,
    marginLeft: 20
  },
  frameGroup: {
    justifyContent: 'flex-end',
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  fieldWithTitleParent: {
    // height: 736,
  },
  signIn: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    letterSpacing: 0
  },
  button: {
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    height: 52,
    borderRadius: Border.br_11xl,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    letterSpacing: 0,
    color: Color.white
  },
  pressable: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    height: '100%'
  },
  button1: {
    height: 52,
    marginLeft: 20,
    borderRadius: Border.br_11xl
  },
  buttonBar: {
    paddingVertical: Padding.p_3xs,
    marginTop: 8,
    justifyContent: 'center',
    width: '100%'
  },
  buttonContainer2Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  buttonContainer2Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  signIn2: {
    letterSpacing: 1,
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    flex: 1
  },
  pressable1: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    width: '100%'
  },
  button2: {
    marginTop: 8,
    width: 388,
    borderRadius: Border.br_11xl
  },
  frameChild: {
    padding: Padding.p_3xs,
    height: 105,
    marginTop: 8,
    backgroundColor: Color.white
  },
  frameParent: {
    alignItems: 'center',
    height: 785,
    width: '100%',
    paddingHorizontal: 20
  },
  crearEventoInner: {
    top: 147,
    left: 0,
    position: 'absolute'
  },
  crearEventoChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
    width: '100%',
    left: 0,
    backgroundColor: Color.white
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  image6Wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  frameView: {
    top: 3
  },
  icon6: {
    height: '100%'
  },
  back: {
    height: 24,
    width: 24
  },
  crearEvento1: {
    color: Color.negro,
    marginLeft: 20,
    fontSize: FontSize.size_5xl,
    textAlign: 'left'
  },
  backParent: {
    top: 78,
    justifyContent: 'center'
  },
  navigationIcon: {
    top: 830,
    height: 105,
    width: 428,
    left: 0
  },
  crearEvento: {
    borderRadius: Border.br_31xl,
    marginTop: 15,
    height: 1100,
    flex: 1,
    paddingBottom: 80,
    backgroundColor: Color.white
  }
})

export default CrearEvento
