import React, { useState, useCallback } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Modal,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import MENPRINCIPAL from '../components/MENPRINCIPAL'
import { useNavigation } from '@react-navigation/native'
import Aadir from '../components/Aadir'
import Compartir from '../components/Compartir'
import { Padding, FontFamily, FontSize, Color, Border } from '../GlobalStyles'

/* REEMPLAZADO POR MURO.JS */
/* REEMPLAZADO POR MURO.JS */
/* REEMPLAZADO POR MURO.JS */
/* REEMPLAZADO POR MURO.JS */
/* REEMPLAZADO POR MURO.JS */
/* REEMPLAZADO POR MURO.JS */

const MUROINFORMACIN = () => {
  const [ionmenuIconVisible, setIonmenuIconVisible] = useState(false)
  const [iconlyBoldChatVisible, setIconlyBoldChatVisible] = useState(false)
  const navigation = useNavigation()
  const [
    streamlinemailSendForwardEIconVisible,
    setStreamlinemailSendForwardEIconVisible
  ] = useState(false)

  const openIonmenuIcon = useCallback(() => {
    setIonmenuIconVisible(true)
  }, [])

  const closeIonmenuIcon = useCallback(() => {
    setIonmenuIconVisible(false)
  }, [])

  const openIconlyBoldChat = useCallback(() => {
    setIconlyBoldChatVisible(true)
  }, [])

  const closeIconlyBoldChat = useCallback(() => {
    setIconlyBoldChatVisible(false)
  }, [])

  const openStreamlinemailSendForwardEIcon = useCallback(() => {
    setStreamlinemailSendForwardEIconVisible(true)
  }, [])

  const closeStreamlinemailSendForwardEIcon = useCallback(() => {
    setStreamlinemailSendForwardEIconVisible(false)
  }, [])

  return (
    <>
      <View style={styles.muroInformacin}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View>
              <View style={styles.parentFlexBox}>
                <Pressable style={styles.ionmenu} onPress={openIonmenuIcon}>
                  <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require('../assets/ionmenu1.png')}
                  />
                </Pressable>
                <View style={[styles.searchParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.messageLayout}
                    contentFit="cover"
                    source={require('../assets/search.png')}
                  />
                  <Pressable
                    style={[styles.message, styles.messageLayout]}
                    onPress={() => navigation.navigate('MENSAJERA')}
                  >
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require('../assets/message.png')}
                    />
                  </Pressable>
                  <Pressable
                    style={[styles.message, styles.messageLayout]}
                    onPress={() => navigation.navigate('PERFILNOTIFICACIONES')}
                  >
                    <Image
                      style={styles.notificationIcon}
                      contentFit="cover"
                      source={require('../assets/notification1.png')}
                    />
                    <View
                      style={[styles.ellipseParent, styles.groupChildLayout]}
                    >
                      <Image
                        style={[styles.groupChild, styles.frameItemPosition]}
                        contentFit="cover"
                        source={require('../assets/ellipse-2261.png')}
                      />
                      <Text style={styles.text}>1</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={styles.parentSpaceBlock}>
                <View style={[styles.popularWrapper, styles.tabsFlexBox]}>
                  <Text style={[styles.popular, styles.popularTypo]}>
                    Familia
                  </Text>
                </View>
                <Pressable
                  style={[styles.tabs, styles.tabsFlexBox]}
                  onPress={() => navigation.navigate('RetosBienvenida1')}
                >
                  <Text style={[styles.trending, styles.popularTypo]}>
                    Retos
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={[styles.stories, styles.parentSpaceBlock]}>
              <ScrollView
                style={{ flexDirection: 'row' }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.youLayout}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.you1, styles.you1Typo]}>You</Text>
                  </View>
                </View>
                <View style={[styles.benjamin, styles.youLayout]}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar1.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.benjamin1, styles.you1Typo]}>
                      Benjamin
                    </Text>
                  </View>
                </View>
                <View style={[styles.benjamin, styles.youLayout]}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar2.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.farita1, styles.farita1Position]}>
                      Farita
                    </Text>
                  </View>
                </View>
                <View style={[styles.benjamin, styles.youLayout]}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar2.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.marie1, styles.you1Typo]}>Marie</Text>
                  </View>
                </View>
                <View style={[styles.benjamin, styles.youLayout]}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar1.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.benjamin1, styles.you1Typo]}>
                      Benjamin
                    </Text>
                  </View>
                </View>
                <View style={[styles.benjamin, styles.youLayout]}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar2.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.farita1, styles.farita1Position]}>
                      Farita
                    </Text>
                  </View>
                </View>
                <View style={[styles.benjamin, styles.youLayout]}>
                  <Image
                    style={[styles.aatarIcon, styles.aatarIconPosition]}
                    contentFit="cover"
                    source={require('../assets/aatar2.png')}
                  />
                  <View style={[styles.youWrapper, styles.aatarIconPosition]}>
                    <Text style={[styles.farita1, styles.farita1Position]}>
                      Claire
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
            <LinearGradient
              style={styles.frameChild}
              locations={[0.77, 1]}
              colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
            />
            <View style={[styles.groupParent, styles.farita1Position]}>
              <View style={styles.rectangleGroup}>
                <Pressable
                  style={styles.groupItem}
                  onPress={() => navigation.navigate('Perfil1')}
                />
                <View style={[styles.groupInner, styles.frameItemLayout]} />
                <View style={[styles.groupInner, styles.frameItemLayout]}>
                  <View style={[styles.frameItem, styles.frameItemLayout]} />
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require('../assets/vector10.png')}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View>
                  <Pressable
                    style={styles.iconlyboldchatLayout}
                    onPress={openIconlyBoldChat}
                  >
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require('../assets/iconlyboldchat.png')}
                    />
                  </Pressable>
                  <Pressable
                    style={[styles.iconlyboldsend, styles.iconlyboldchatLayout]}
                    onPress={() => navigation.navigate('Chat')}
                  >
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require('../assets/iconlyboldsend.png')}
                    />
                  </Pressable>
                  <Pressable
                    style={[styles.iconlyboldsend, styles.iconlyboldchatLayout]}
                    onPress={openStreamlinemailSendForwardEIcon}
                  >
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require('../assets/streamlinemailsendforwardemailemailsendmessageenvelopeactionsactionforwardarrow.png')}
                    />
                  </Pressable>
                </View>
                <View>
                  <Text style={[styles.camila, styles.camilaTypo]}>Camila</Text>
                  <Text
                    style={[styles.yendoALa, styles.camilaTypo]}
                  >{`Yendo a la casa de la tía Elisa! Los esperamos allá,
familia!`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.navigationIcon}
          contentFit="cover"
          source={require('../assets/navigation6.png')}
        />
      </View>

      <Modal animationType="fade" transparent visible={ionmenuIconVisible}>
        <View style={styles.ionmenuIconOverlay}>
          <Pressable style={styles.ionmenuIconBg} onPress={closeIonmenuIcon} />
          <MENPRINCIPAL onClose={closeIonmenuIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={iconlyBoldChatVisible}>
        <View style={styles.iconlyBoldChatOverlay}>
          <Pressable
            style={styles.iconlyBoldChatBg}
            onPress={closeIconlyBoldChat}
          />
          <Aadir onClose={closeIconlyBoldChat} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={streamlinemailSendForwardEIconVisible}
      >
        <View style={styles.streamlinemailSendForwardEIconOverlay}>
          <Pressable
            style={styles.streamlinemailSendForwardEIconBg}
            onPress={closeStreamlinemailSendForwardEIcon}
          />
          <Compartir onClose={closeStreamlinemailSendForwardEIcon} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  messageLayout: {
    height: 24,
    width: 24
  },
  groupChildLayout: {
    height: 16,
    width: 16,
    position: 'absolute'
  },
  frameItemPosition: {
    left: 0,
    top: 0
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 194,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popularTypo: {
    width: 110,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base
  },
  parentSpaceBlock: {
    marginTop: 18,
    flexDirection: 'row'
  },
  aatarIconPosition: {
    width: 70,
    left: 0,
    position: 'absolute'
  },
  you1Typo: {
    color: Color.negro,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  youLayout: {
    height: 90,
    width: 70
  },
  farita1Position: {
    left: 20,
    position: 'absolute'
  },
  frameItemLayout: {
    height: 53,
    width: 53,
    borderRadius: Border.br_4xl,
    position: 'absolute'
  },
  iconlyboldchatLayout: {
    height: 40,
    width: 40
  },
  camilaTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    color: Color.white
  },
  ionmenuIconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  ionmenuIconBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  icon: {
    overflow: 'hidden'
  },
  ionmenu: {
    width: 26,
    height: 20
  },
  message: {
    marginLeft: 30
  },
  notificationIcon: {
    height: '83.33%',
    width: '70.83%',
    top: '8.33%',
    right: '14.58%',
    bottom: '8.33%',
    left: '14.58%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupChild: {
    height: 16,
    width: 16,
    position: 'absolute'
  },
  text: {
    top: 1,
    left: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    fontWeight: '800',
    fontFamily: FontFamily.nunitoSans,
    textAlign: 'right',
    color: Color.white,
    position: 'absolute'
  },
  ellipseParent: {
    top: -6,
    left: 13
  },
  searchParent: {
    marginLeft: 230,
    justifyContent: 'center'
  },
  popular: {
    fontWeight: '700',
    color: Color.white
  },
  popularWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.secundario,
    overflow: 'hidden'
  },
  trending: {
    fontWeight: '300',
    color: Color.textPlaceholder
  },
  tabs: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA
  },
  aatarIcon: {
    height: 70,
    top: 0,
    width: 70
  },
  you1: {
    left: 25,
    position: 'absolute'
  },
  youWrapper: {
    top: 70,
    height: 20,
    overflow: 'hidden'
  },
  benjamin1: {
    left: 10,
    position: 'absolute'
  },
  benjamin: {
    marginLeft: 20
  },
  farita1: {
    color: Color.negro,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  marie1: {
    left: 19,
    position: 'absolute'
  },
  stories: {
    width: 408
  },
  frameGroup: {
    alignItems: 'flex-end'
  },
  frameChild: {
    borderRadius: Border.br_xl,
    width: 388,
    backgroundColor: Color.linearBoton,
    zIndex: 0,
    height: 581
  },
  groupItem: {
    top: -2,
    left: -2,
    borderRadius: Border.br_6xl,
    borderStyle: 'solid',
    borderColor: Color.primario1,
    borderWidth: 2,
    width: 63,
    height: 63,
    position: 'absolute'
  },
  groupInner: {
    top: 3,
    left: 3
  },
  frameItem: {
    backgroundColor: Color.secundario,
    left: 0,
    top: 0
  },
  vectorIcon: {
    marginTop: -7.5,
    marginLeft: -10.5,
    top: '50%',
    width: 20,
    height: 15,
    left: '50%',
    position: 'absolute'
  },
  rectangleGroup: {
    width: 59,
    height: 59
  },
  iconlyBoldChatOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  iconlyBoldChatBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlyboldsend: {
    marginTop: 39
  },
  streamlinemailSendForwardEIconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  streamlinemailSendForwardEIconBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  camila: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700'
  },
  yendoALa: {
    marginTop: 20,
    fontSize: FontSize.size_base,
    textAlign: 'left'
  },
  frameView: {
    marginTop: 202,
    alignItems: 'flex-end'
  },
  groupParent: {
    top: 19,
    zIndex: 1
  },
  rectangleParent: {
    height: 581
  },
  frameParent: {
    marginLeft: -212,
    top: 26,
    width: 425,
    height: 786,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    position: 'absolute'
  },
  navigationIcon: {
    top: 820,
    width: 428,
    height: 105,
    left: 3,
    position: 'absolute'
  },
  muroInformacin: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: 'hidden',
    width: '100%'
  }
})

export default MUROINFORMACIN
