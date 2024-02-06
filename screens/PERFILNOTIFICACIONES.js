import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Pressable, Text, Modal } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import ValorarEvento from '../components/ValorarEvento'
import ConfirmarAsistencia from '../components/ConfirmarAsistencia'
import CONFIRMARPARENTESCO from '../components/CONFIRMARPARENTESCO'
import ETIQUETADO from '../components/ETIQUETADO'
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'

const PERFILNOTIFICACIONES = () => {
  const [frameContainer5Visible, setFrameContainer5Visible] = useState(false)
  const [frameContainer7Visible, setFrameContainer7Visible] = useState(false)
  const navigation = useNavigation()
  const [frameContainer11Visible, setFrameContainer11Visible] = useState(false)
  const [frameContainer15Visible, setFrameContainer15Visible] = useState(false)

  const openFrameContainer5 = useCallback(() => {
    setFrameContainer5Visible(true)
  }, [])

  const closeFrameContainer5 = useCallback(() => {
    setFrameContainer5Visible(false)
  }, [])

  const openFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(true)
  }, [])

  const closeFrameContainer7 = useCallback(() => {
    setFrameContainer7Visible(false)
  }, [])

  const openFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(true)
  }, [])

  const closeFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(false)
  }, [])

  const openFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(true)
  }, [])

  const closeFrameContainer15 = useCallback(() => {
    setFrameContainer15Visible(false)
  }, [])

  return (
    <>
      <View style={styles.perfilNotificaciones}>
        <View
          style={[
            styles.perfilNotificacionesChild,
            styles.navigationIconLayout
          ]}
        />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={[styles.frameGroup, styles.frameGroupShadowBox]}>
            <View style={styles.frameViewFlexBox}>
              <Image
                style={styles.image6Icon}
                contentFit="cover"
                source={require('../assets/image-6.png')}
              />
              <View style={styles.iconlylightOutlinecalendarParent}>
                <Image
                  style={styles.iconlylightOutlinecalendar}
                  contentFit="cover"
                  source={require('../assets/iconlylightoutlinecalendar4.png')}
                />
                <Image
                  style={[styles.documentIcon, styles.documentIconLayout]}
                  contentFit="cover"
                  source={require('../assets/document6.png')}
                />
                <Pressable
                  style={styles.documentIconLayout}
                  onPress={() => navigation.navigate('PerfilAjustes')}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/iconlylightoutlinesetting6.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View
              style={[styles.notificacionesWrapper, styles.frameViewFlexBox]}
            >
              <Text style={styles.notificaciones}>Notificaciones</Text>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <Pressable onPress={openFrameContainer5}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>{`Bruno `}</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      te ha invitado a valorar su evento
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </Pressable>
            <Pressable
              style={styles.frameParent1}
              onPress={openFrameContainer7}
            >
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>{`Bruno `}</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      te ha enviado una invitación a un evento
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </Pressable>
            <View style={styles.frameParent1}>
              <Pressable
                style={[styles.frameView, styles.frameViewFlexBox]}
                onPress={() => navigation.navigate('RecopilacionDeRespuestas')}
              >
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>{`Bruno `}</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      ha aceptado la invitación a tu evento
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </Pressable>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <Pressable
              style={styles.frameParent1}
              onPress={openFrameContainer11}
            >
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>{`Umberto `}</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      te ha invitado a ser parte de su MyTree
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </Pressable>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.hasRecibidoUna, styles.teHaInvitadoTypo]}>
                  Has recibido una Alerta Familiar del Pablo
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <Pressable
              style={styles.frameParent1}
              onPress={openFrameContainer15}
            >
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>{`Bruno `}</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      ha añadido un recuerdo contigo
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </Pressable>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>{`Bruno `}</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      ha añadido un nuevo recuerdo familiar
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.hasRecibidoUna, styles.teHaInvitadoTypo]}>
                  Has recibido una invitación a un evento familiar organizado
                  por Noelia
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text
                      style={styles.teHaInvitadoTypo}
                    >{`¡Hoy es el cumpleaños de `}</Text>
                    <Text style={styles.bruno}>Bruno</Text>
                    <Text style={styles.teHaInvitadoTypo}>!</Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text
                      style={styles.teHaInvitadoTypo}
                    >{`En una semana es el cumpleaños de `}</Text>
                    <Text style={styles.bruno}>{`Bruno `}</Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>Bruno</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      {' '}
                      te ha invitado a colaborar en vuestro álbum familiar
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameChild17}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={styles.hasRecibidoUnaLayout}>
                  <Text style={styles.brunoTeHaContainer1}>
                    <Text style={styles.bruno}>Bruno</Text>
                    <Text style={styles.teHaInvitadoTypo}>
                      {' '}
                      te propone un reto familiar
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameChild17}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.frameView, styles.frameViewFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.hasRecibidoUna, styles.teHaInvitadoTypo]}>
                  ¿Cómo te ha ido el día? Cuéntaselo a tu familia
                </Text>
                <Text style={styles.minAgo}>2 min ago</Text>
              </View>
              <Image
                style={styles.frameChild17}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.navigationIcon, styles.navigationIconLayout]}
          contentFit="cover"
          source={require('../assets/navigation28.png')}
        />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer5Visible}>
        <View style={styles.frameContainer5Overlay}>
          <Pressable
            style={styles.frameContainer5Bg}
            onPress={closeFrameContainer5}
          />
          <ValorarEvento onClose={closeFrameContainer5} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer7Visible}>
        <View style={styles.frameContainer7Overlay}>
          <Pressable
            style={styles.frameContainer7Bg}
            onPress={closeFrameContainer7}
          />
          <ConfirmarAsistencia onClose={closeFrameContainer7} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer11Visible}>
        <View style={styles.frameContainer11Overlay}>
          <Pressable
            style={styles.frameContainer11Bg}
            onPress={closeFrameContainer11}
          />
          <CONFIRMARPARENTESCO onClose={closeFrameContainer11} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer15Visible}>
        <View style={styles.frameContainer15Overlay}>
          <Pressable
            style={styles.frameContainer15Bg}
            onPress={closeFrameContainer15}
          />
          <ETIQUETADO onClose={closeFrameContainer15} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  navigationIconLayout: {
    width: 428,
    position: 'absolute'
  },
  frameParentPosition: {
    left: 0,
    top: 0
  },
  frameGroupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    },
    backgroundColor: Color.white
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  frameViewFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  teHaInvitadoTypo: {
    fontWeight: '300',
    fontFamily: FontFamily.lato
  },
  perfilNotificacionesChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 25,
    elevation: 25,
    height: 113,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    },
    backgroundColor: Color.white,
    left: 0,
    top: 0
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24
  },
  documentIcon: {
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    justifyContent: 'flex-end',
    marginLeft: 112,
    flexDirection: 'row'
  },
  notificaciones: {
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  notificacionesWrapper: {
    justifyContent: 'center',
    marginTop: 6
  },
  frameGroup: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    elevation: 4,
    paddingBottom: Padding.p_xl,
    paddingHorizontal: Padding.p_xl
  },
  frameContainer5Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer5Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameChild: {
    width: 30,
    height: 30
  },
  bruno: {
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  brunoTeHaContainer1: {
    width: '100%'
  },
  hasRecibidoUnaLayout: {
    height: 38,
    width: 273,
    display: 'flex',
    color: Color.black1,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: 'left',
    alignItems: 'center'
  },
  minAgo: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.gris,
    textAlign: 'justify',
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  frameView: {
    justifyContent: 'space-between',
    width: 388
  },
  frameItem: {
    maxHeight: '100%',
    marginTop: 20,
    width: 388
  },
  frameContainer7Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer7Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameParent1: {
    marginTop: 20
  },
  frameContainer11Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer11Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  hasRecibidoUna: {
    height: 38,
    width: 273,
    display: 'flex',
    color: Color.black1,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: 'left',
    alignItems: 'center'
  },
  frameContainer15Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer15Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameChild17: {
    height: 0,
    marginTop: 20,
    width: 388
  },
  frameContainer: {
    height: 604,
    paddingVertical: 0,
    marginTop: 23,
    paddingHorizontal: Padding.p_xl
  },
  frameParent: {
    height: 923,
    position: 'absolute',
    top: 0
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    left: '50%',
    height: 105
  },
  perfilNotificaciones: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.white
  }
})

export default PERFILNOTIFICACIONES
