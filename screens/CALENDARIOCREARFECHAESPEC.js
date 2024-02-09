import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import OpcionesCaategora from '../components/OpcionesCaategora'
import FECHA3 from '../components/FECHA3'
import Lugar1 from '../components/Lugar1'
import FormatoLista from '../components/FormatoLista'
import { useNavigation } from '@react-navigation/native'
// import ENTRADACREADA4 from "../components/ENTRADACREADA4";
import { FontFamily, Padding, Color, Border, FontSize } from '../GlobalStyles'

const CALENDARIOCREARFECHAESPEC = () => {
  const [fieldContainerVisible, setFieldContainerVisible] = useState(false)
  const [fieldContainer2Visible, setFieldContainer2Visible] = useState(false)
  const [iconlyBulkLocationVisible, setIconlyBulkLocationVisible] =
    useState(false)
  const [fieldContainer4Visible, setFieldContainer4Visible] = useState(false)
  const [buttonContainer2Visible, setButtonContainer2Visible] = useState(false)
  const navigation = useNavigation()

  const openFieldContainer = useCallback(() => {
    setFieldContainerVisible(true)
  }, [])

  const closeFieldContainer = useCallback(() => {
    setFieldContainerVisible(false)
  }, [])

  const openFieldContainer2 = useCallback(() => {
    setFieldContainer2Visible(true)
  }, [])

  const closeFieldContainer2 = useCallback(() => {
    setFieldContainer2Visible(false)
  }, [])

  const openIconlyBulkLocation = useCallback(() => {
    setIconlyBulkLocationVisible(true)
  }, [])

  const closeIconlyBulkLocation = useCallback(() => {
    setIconlyBulkLocationVisible(false)
  }, [])

  const openFieldContainer4 = useCallback(() => {
    setFieldContainer4Visible(true)
  }, [])

  const closeFieldContainer4 = useCallback(() => {
    setFieldContainer4Visible(false)
  }, [])

  const openButtonContainer2 = useCallback(() => {
    setButtonContainer2Visible(true)
  }, [])

  const closeButtonContainer2 = useCallback(() => {
    setButtonContainer2Visible(false)
  }, [])

  return (
    <>
      <View style={styles.calendarioCrearFechaEspec}>
        <View style={styles.frameParent}>
          <View style={[styles.frameChild, styles.framePosition]} />
          <View style={[styles.frameItem, styles.framePosition]} />
          <View
            style={[
              styles.fieldWithTitleParent,
              styles.fieldWithTitleParentPosition
            ]}
          >
            <View>
              <View>
                <View style={styles.titleBase}>
                  <Text style={[styles.title, styles.titleTypo]}>
                    Categoría
                  </Text>
                </View>
                <Pressable
                  style={[styles.field, styles.fieldSpaceBlock]}
                  onPress={openFieldContainer}
                >
                  <View style={styles.placeholderInput}>
                    <Text style={[styles.search, styles.searchLayout]}>
                      Selecione la categoría de la fecha especial
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown24.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Descripción
                </Text>
              </View>
              <View style={[styles.field1, styles.fieldSpaceBlock]}>
                <View style={styles.placeholderInput}>
                  <Text style={[styles.search, styles.searchLayout]}>
                    Describa la fecha especial
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>Fecha</Text>
              </View>
              <Pressable
                style={[styles.field, styles.fieldSpaceBlock]}
                onPress={openFieldContainer2}
              >
                <View style={styles.placeholderInput}>
                  <Text style={[styles.search, styles.searchLayout]}>
                    21/02/2023
                  </Text>
                </View>
                <Image
                  style={[styles.iconlylightOutlinecalendar, styles.backLayout]}
                  contentFit="cover"
                  source={require('../assets/iconlylightoutlinecalendar.png')}
                />
              </Pressable>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>Ubicación</Text>
              </View>
              <View style={[styles.field, styles.fieldSpaceBlock]}>
                <Text style={[styles.search, styles.searchLayout]}>
                  Ubicación
                </Text>
                <View style={styles.placeholderInput3} />
                <Pressable
                  style={styles.iconlybulklocation}
                  onPress={openIconlyBulkLocation}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require('../assets/iconlybulklocation3.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Etiqueta a tus invitados
                </Text>
              </View>
              <Pressable
                style={[styles.field, styles.fieldSpaceBlock]}
                onPress={openFieldContainer4}
              >
                <View style={styles.placeholderInput}>
                  <Text style={[styles.search, styles.searchLayout]}>
                    Agrega invitados
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconlyboldaddUser,
                    styles.arrowDown2IconLayout
                  ]}
                  contentFit="cover"
                  source={require('../assets/iconlyboldadduser1.png')}
                />
              </Pressable>
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.opcionesDePrivacidadWrapper}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Opciones de Privacidad
                </Text>
              </View>
              <Image
                style={styles.arrowDown2Icon1}
                contentFit="cover"
                source={require('../assets/arrowdown210.png')}
              />
            </View>
            <View style={styles.buttonBarParent}>
              <View style={[styles.buttonBar, styles.buttonBarFlexBox]}>
                <Pressable
                  style={[styles.button, styles.buttonSpaceBlock]}
                  onPress={() => navigation.navigate('CALENDARIO')}
                >
                  <Text style={styles.signIn}>Cancelar</Text>
                </Pressable>
                <LinearGradient
                  style={[styles.button1, styles.button1FlexBox]}
                  locations={[0, 1]}
                  colors={['#dee274', '#7ec18c']}
                >
                  <Text style={[styles.signIn1, styles.signTypo]}>
                    Programar Envío
                  </Text>
                </LinearGradient>
              </View>
              <LinearGradient
                style={styles.button2}
                locations={[0, 1]}
                colors={['#dee274', '#7ec18c']}
              >
                <Pressable
                  style={[styles.pressable, styles.button1FlexBox]}
                  onPress={openButtonContainer2}
                >
                  <Text style={[styles.signIn2, styles.signTypo]}>Enviar</Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.calendarioCrearFechaEspecChild,
            styles.fieldWithTitleParentPosition
          ]}
        />
        <View style={[styles.image6Wrapper, styles.framePosition]}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require('../assets/image-6.png')}
          />
        </View>
        <View style={[styles.backParent, styles.buttonBarFlexBox]}>
          <Pressable
            style={styles.backLayout}
            onPress={() => navigation.navigate('CALENDARIO')}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require('../assets/back.png')}
            />
          </Pressable>
          <Text style={[styles.crearFechaEspecial, styles.titleTypo]}>
            Crear fecha especial
          </Text>
        </View>
        <Image
          style={styles.navigationIcon}
          contentFit="cover"
          source={require('../assets/navigation38.png')}
        />
      </View>

      <Modal animationType="fade" transparent visible={fieldContainerVisible}>
        <View style={styles.fieldContainerOverlay}>
          <Pressable
            style={styles.fieldContainerBg}
            onPress={closeFieldContainer}
          />
          <OpcionesCaategora onClose={closeFieldContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={fieldContainer2Visible}>
        <View style={styles.fieldContainer2Overlay}>
          <Pressable
            style={styles.fieldContainer2Bg}
            onPress={closeFieldContainer2}
          />
          <FECHA3 onClose={closeFieldContainer2} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={iconlyBulkLocationVisible}
      >
        <View style={styles.iconlyBulkLocationOverlay}>
          <Pressable
            style={styles.iconlyBulkLocationBg}
            onPress={closeIconlyBulkLocation}
          />
          <Lugar1 onClose={closeIconlyBulkLocation} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={fieldContainer4Visible}>
        <View style={styles.fieldContainer4Overlay}>
          <Pressable
            style={styles.fieldContainer4Bg}
            onPress={closeFieldContainer4}
          />
          <FormatoLista onClose={closeFieldContainer4} />
        </View>
      </Modal>

      {/* <Modal animationType="fade" transparent visible={buttonContainer2Visible}>
        <View style={styles.buttonContainer2Overlay}>
          <Pressable
            style={styles.buttonContainer2Bg}
            onPress={closeButtonContainer2}
          />
          <ENTRADACREADA4 onClose={closeButtonContainer2} />
        </View>
      </Modal> */}
    </>
  )
}

const styles = StyleSheet.create({
  framePosition: {
    left: 20,
    position: 'absolute'
  },
  fieldWithTitleParentPosition: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  titleTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  fieldSpaceBlock: {
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.fAFAFA,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: 'row',
    width: 388
  },
  searchLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base
  },
  arrowDown2IconLayout: {
    width: 24,
    marginLeft: 24
  },
  backLayout: {
    height: 24,
    width: 24
  },
  buttonBarFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    flex: 1
  },
  button1FlexBox: {
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  signTypo: {
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frameChild: {
    top: 822,
    alignItems: 'center',
    backgroundColor: Color.white
  },
  frameItem: {
    top: 874,
    alignItems: 'center',
    backgroundColor: Color.white
  },
  title: {
    lineHeight: 19,
    fontWeight: '500',
    color: Color.textTextPrimary,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base
  },
  titleBase: {
    paddingBottom: Padding.p_7xs,
    flexDirection: 'row',
    width: 388
  },
  fieldContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  fieldContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  search: {
    color: Color.textPlaceholder,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  placeholderInput: {
    flexDirection: 'row',
    flex: 1
  },
  arrowDown2Icon: {
    height: 12,
    marginLeft: 24
  },
  field: {
    alignItems: 'center'
  },
  field1: {
    height: 129
  },
  titleBaseParent: {
    marginTop: 22
  },
  fieldContainer2Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  fieldContainer2Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlylightOutlinecalendar: {
    marginLeft: 24
  },
  placeholderInput3: {
    marginLeft: 24,
    flexDirection: 'row',
    flex: 1
  },
  iconlyBulkLocationOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  iconlyBulkLocationBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlybulklocation: {
    width: 21,
    height: 29,
    marginLeft: 24
  },
  fieldContainer4Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  fieldContainer4Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlyboldaddUser: {
    height: 21,
    marginLeft: 24
  },
  opcionesDePrivacidadWrapper: {
    width: 359
  },
  arrowDown2Icon1: {
    width: 9,
    height: 16,
    marginLeft: 20
  },
  frameGroup: {
    justifyContent: 'flex-end',
    marginTop: 22,
    flexDirection: 'row',
    width: 388,
    alignItems: 'center'
  },
  signIn: {
    textAlign: 'center',
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  button: {
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    borderRadius: Border.br_11xl,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white
  },
  signIn1: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    color: Color.white,
    letterSpacing: 0
  },
  button1: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    flex: 1,
    marginLeft: 20
  },
  buttonBar: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: 'center',
    width: 428,
    backgroundColor: Color.white
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
    lineHeight: 24,
    fontSize: FontSize.size_base,
    flex: 1
  },
  pressable: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    width: '100%'
  },
  button2: {
    marginTop: 10,
    width: 388
  },
  buttonBarParent: {
    marginTop: 22,
    alignItems: 'center'
  },
  fieldWithTitleParent: {
    height: 629,
    alignItems: 'center'
  },
  frameParent: {
    top: 147,
    height: 680,
    width: 428,
    left: 0,
    position: 'absolute'
  },
  calendarioCrearFechaEspecChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
    width: 428,
    backgroundColor: Color.white
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  image6Wrapper: {
    top: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon1: {
    overflow: 'hidden'
  },
  crearFechaEspecial: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.negro,
    marginLeft: 20
  },
  backParent: {
    top: 78,
    left: 20,
    position: 'absolute'
  },
  navigationIcon: {
    marginLeft: -214,
    top: 830,
    left: '50%',
    height: 105,
    width: 428,
    position: 'absolute'
  },
  calendarioCrearFechaEspec: {
    borderRadius: Border.br_31xl,
    height: 932,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  }
})

export default CALENDARIOCREARFECHAESPEC
