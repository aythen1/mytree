import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Parentezco from '../components/Parentezco'
import OpcionesAmigo from '../components/OpcionesAmigo'
// import ENTRADACREADA11 from '../components/ENTRADACREADA11'
import { Color, Border, FontFamily, Padding, FontSize } from '../GlobalStyles'
import { setPanel } from '../redux/slices/panel.slices'
import QR from '../components/QR'
import ENTRADACREADA from '../components/ENTRADACREADA'

const BOTONInvitarAmigos = () => {
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)

  const [send, setSend] = useState(false)
  const [arrowDown2IconVisible, setArrowDown2IconVisible] = useState(false)
  const [arrowDown2Icon1Visible, setArrowDown2Icon1Visible] = useState(false)
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false)
  const [optionsFriend, setOptionsFriend] = useState(false)
  const [optionsParentezco, setOptionsParentezco] = useState(false)

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

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true)
  }, [])

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false)
  }, [])

  const oncloseModalSend = () => {
    setSend(false)
  }

  return (
    <>
      <View style={styles.botonInvitarAmigos}>
        <Pressable onPress={() => dispatch(setPanel(!showPanel))}>
          <Image
            style={[styles.ionmenuIcon, styles.iconPosition]}
            contentFit="cover"
            source={require('../assets/ionmenu.png')}
          />
        </Pressable>
        <Image
          style={[styles.image6Icon, styles.iconPosition]}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <Text style={styles.invitaFamiliares}>Invita familiares</Text>
        <View style={styles.header}>
          <View style={[styles.searchBar, styles.fieldFlexBox]}>
            <Image
              style={styles.iconlylightOutlinesearch}
              contentFit="cover"
              source={require('../assets/iconlylightoutlinesearch7.png')}
            />
            <View style={styles.placeholderInput}>
              {/* <Text style={[styles.search, styles.searchTypo]}>Búsqueda</Text> */}
              <TextInput
                style={styles.placeholderInput}
                placeholder="Búsqueda"
              />
            </View>
          </View>
          <View style={styles.iconlylightsendCopyWrapper}>
            <Image
              style={styles.iconlylightsendCopy}
              contentFit="cover"
              source={require('../assets/iconlylightsend-copy.png')}
            />
          </View>
        </View>
        <View style={[styles.invitarAJuanGutierrezParent, styles.iconPosition]}>
          <Text style={[styles.invitarAJuan, styles.searchTypo]}>
            Invitar a Juan Gutierrez
          </Text>
          <View style={styles.fieldWithTitle}>
            <Pressable onPress={() => setOptionsFriend(!optionsFriend)}>
              <View style={([styles.titleBase], { zIndex: 50 })}>
                <Text style={styles.title}>Relación</Text>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={optionsFriend}
                >
                  <TouchableWithoutFeedback
                    onPress={() => setOptionsFriend(false)}
                  >
                    <View style={{ height: '100%' }}>
                      <OpcionesAmigo />
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
              </View>
              <View style={[styles.field, styles.fieldFlexBox]}>
                <View style={styles.placeholderInput1}>
                  <Text style={styles.search1}>Amigos Intimos</Text>
                </View>
                <Pressable
                  style={styles.arrowDown2}
                  // onPress={openArrowDown2Icon}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/arrowdown24.png')}
                  />
                </Pressable>
              </View>
            </Pressable>
          </View>
          <Pressable
            style={styles.fieldWithTitle}
            onPress={() => {
              setOptionsParentezco(!optionsParentezco)
            }}
          >
            <View>
              <View>
                <View style={styles.titleBase}>
                  <Text
                    onPress={() => {
                      setOptionsParentezco(!optionsParentezco)
                    }}
                    style={styles.title}
                  >
                    Parentezco
                  </Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={optionsParentezco}
                  >
                    <TouchableWithoutFeedback
                      onPress={() => setOptionsParentezco(false)}
                    >
                      <View style={{ height: '100%' }}>
                        <Parentezco />
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </View>
                <View style={[styles.field, styles.fieldFlexBox]}>
                  <View style={styles.placeholderInput1}>
                    <Text style={styles.search1}>Familiar</Text>
                  </View>
                  <Pressable style={styles.arrowDown2}>
                    <Image
                      style={styles.icon}
                      contentFit="cover"
                      source={require('../assets/arrowdown24.png')}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => setSend(true)}
          >
            <Text style={styles.signTypo}>Enviar invitación</Text>
          </Pressable>

          <Modal animationType="slide" transparent visible={send}>
            <View style={styles.buttonContainer2Overlay}>
              <Pressable
                // style={styles.buttonContainer2Bg}
                onPress={() => setSend(false)}
              />
              <ENTRADACREADA
                onClose={() => setSend(false)}
                isNavigate={'BOTONInvitarAmigos1'}
                message={'Añadido con éxito'}
              />
            </View>
          </Modal>

          <LinearGradient
            style={styles.button1}
            locations={[0, 1]}
            colors={['#dee274', '#7ec18c']}
          >
            <Pressable
              style={[styles.pressable, styles.buttonFlexBox]}
              onPress={openButtonContainer1}
            >
              <Text style={[styles.signIn1, styles.signTypo]}>
                Crear link de invitación
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={arrowDown2IconVisible}>
        <View style={styles.arrowDown2IconOverlay}>
          <Pressable
            style={styles.arrowDown2IconBg}
            onPress={closeArrowDown2Icon}
          />
          <Parentezco onClose={closeArrowDown2Icon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={arrowDown2Icon1Visible}>
        <View style={styles.arrowDown2Icon1Overlay}>
          <Pressable
            style={styles.arrowDown2Icon1Bg}
            onPress={closeArrowDown2Icon1}
          />
          <OpcionesAmigo onClose={closeArrowDown2Icon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <QR onClose={closeButtonContainer1} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  iconPosition: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer2Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  buttonContainer2Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldFlexBox: {
    backgroundColor: Color.fAFAFA,
    borderRadius: Border.br_3xs,
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchTypo: {
    fontFamily: FontFamily.nunito,
    fontStyle: 'italic',
    letterSpacing: 0,
    textAlign: 'left'
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: 'center',
    borderRadius: Border.br_11xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  signTypo: {
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    flex: 1
  },
  ionmenuIcon: {
    top: 83,
    width: 26,
    height: 20,
    left: '5%',
    overflow: 'hidden'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  invitaFamiliares: {
    marginLeft: -85,
    top: 78,
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    left: '50%',
    position: 'absolute'
  },
  iconlylightOutlinesearch: {
    width: 20,
    height: 20
  },
  search: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: '200',
    color: Color.textPlaceholder
  },
  placeholderInput: {
    marginLeft: 6,
    flexDirection: 'row',
    flex: 1
  },
  searchBar: {
    height: 50,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    flex: 1
  },
  iconlylightsendCopy: {
    height: 24,
    width: 24
  },
  iconlylightsendCopyWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundGreyBackground,
    padding: Padding.p_7xs,
    marginLeft: 16,
    flexDirection: 'row'
  },
  header: {
    top: 127,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    backgroundColor: Color.white
  },
  navigationIcon: {
    top: 821,
    left: 0,
    height: 105,
    position: 'absolute'
  },
  invitarAJuan: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: '600',
    color: Color.primario1
  },
  title: {
    lineHeight: 19,
    fontWeight: '500',
    color: Color.textTextPrimary,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  titleBase: {
    paddingBottom: Padding.p_7xs,
    width: 388,
    flexDirection: 'row'
  },
  search1: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  placeholderInput1: {
    flexDirection: 'row',
    flex: 1
  },
  arrowDown2IconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
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
    paddingVertical: Padding.p_smi,

    paddingHorizontal: Padding.p_xl
  },
  fieldWithTitle: {
    marginTop: 19,
    width: '95%'
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
  buttonContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  buttonContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  button: {
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    width: '95%',
    marginTop: 19
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
    backgroundColor: Color.linearBoton,
    width: '100%'
  },
  button1: {
    borderRadius: Border.br_11xl,
    marginTop: 19
  },
  invitarAJuanGutierrezParent: {
    top: 180
  },
  botonInvitarAmigos: {
    // height: 926,
    paddingBottom: 50,
    width: '100%',
    flex: 1,
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
  }
})

export default BOTONInvitarAmigos
