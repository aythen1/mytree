import React from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
// import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Padding, Border, FontSize } from '../GlobalStyles'

const PERFILMIINFO = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.perfilMiInfo}>
      <View style={[styles.perfilMiInfoChild, styles.misLbumesPosition]} />
      <View style={styles.frameParent}>
        <View style={styles.frameParent3}>
          <View style={styles.frameView}>
            <View style={styles.image6Parent}>
              <Image
                style={[styles.skillIconsinstagram, styles.skillLayout]}
                contentFit="cover"
                source={require('../assets/skilliconsinstagram4.png')}
              />
              <Image
                style={[styles.skillIconslinkedin, styles.skillLayout]}
                contentFit="cover"
                source={require('../assets/skilliconslinkedin4.png')}
              />
              <Image
                style={[styles.logostiktokIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/logostiktokicon3.png')}
              />
              <Image
                style={[styles.skillIconslinkedin, styles.skillLayout]}
                contentFit="cover"
                source={require('../assets/deviconfacebook4.png')}
              />
            </View>
            <View style={styles.frameParent5}>
              <Pressable
                style={styles.frameContainer}
                onPress={() => navigation.navigate('MisFamiliares1')}
              >
                <Text style={[styles.familiares, styles.text1Typo]}>
                  Familiares
                </Text>
                <View style={styles.parent}>
                  <Text style={[styles.text1, styles.text1Typo]}>25</Text>
                  <View style={styles.ellipseGroup}>
                    <Image
                      style={styles.frameInner}
                      contentFit="cover"
                      source={require('../assets/ellipse-7170.png')}
                    />
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require('../assets/vector9.png')}
                    />
                  </View>
                </View>
              </Pressable>
              <Pressable
                style={styles.amigosParent}
                onPress={() => navigation.navigate('MISAMIGOS')}
              >
                <Text style={[styles.familiares, styles.text1Typo]}>
                  Amigos
                </Text>
                <View style={styles.parent}>
                  <Text style={[styles.text1, styles.text1Typo]}>5</Text>
                  <View style={styles.ellipseGroup}>
                    <Image
                      style={styles.frameInner}
                      contentFit="cover"
                      source={require('../assets/ellipse-7170.png')}
                    />
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require('../assets/vector9.png')}
                    />
                  </View>
                </View>
              </Pressable>
              <View style={styles.amigosParent}>
                <Text style={[styles.logros, styles.text1Typo]}>Logros</Text>
                <View style={styles.parent}>
                  <Text style={[styles.text1, styles.text1Typo]}>
                    40 Tree’s
                  </Text>
                  <View style={styles.ellipseGroup}>
                    <Image
                      style={styles.frameInner}
                      contentFit="cover"
                      source={require('../assets/ellipse-7170.png')}
                    />
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require('../assets/vector9.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent6}>
            <View style={styles.miInformacinPersonalParent}>
              <Text style={[styles.miInformacinPersonal, styles.miInfoTypo]}>
                Mi información personal
              </Text>
              <Pressable
                style={styles.lock}
                onPress={() => navigation.navigate('SOLOYO')}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require('../assets/lock1.png')}
                />
              </Pressable>
            </View>
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
              <View style={styles.nombreYApellidosParent}>
                <Text style={[styles.nombreYApellidos, styles.quEsLoTypo1]}>
                  Nombre y apellidos
                </Text>
                <Text style={[styles.brunoPham1, styles.quEsLoTypo1]}>
                  Bruno Pham
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
              <View style={styles.nombreYApellidosParent}>
                <Text style={[styles.nombreYApellidos, styles.quEsLoTypo1]}>
                  Fecha y Lugar de Nacimiento
                </Text>
                <Text style={[styles.brunoPham1, styles.quEsLoTypo1]}>
                  10/2/80 - Da Nang, Vietnam
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper2, styles.frameWrapperFlexBox]}>
              <View style={styles.nombreYApellidosParent}>
                <Text style={[styles.nombreYApellidos, styles.quEsLoTypo1]}>
                  Ciudad actual de residencia
                </Text>
                <Text style={[styles.brunoPham1, styles.quEsLoTypo1]}>
                  Barcelona
                </Text>
              </View>
            </View>
            <View style={styles.frameParent7}>
              <View style={styles.redesSocialesParent}>
                <Text style={[styles.nombreYApellidos, styles.quEsLoTypo1]}>
                  Redes Sociales
                </Text>
                <Text style={[styles.brunoPham1, styles.quEsLoTypo1]}>
                  @BrunoPham
                </Text>
              </View>
              <View style={styles.listaDeDeseosParent}>
                <Text style={[styles.nombreYApellidos, styles.quEsLoTypo1]}>
                  Lista de Deseos
                </Text>
                <Text style={[styles.brunoPham1, styles.quEsLoTypo1]}>
                  Sin especificar
                </Text>
              </View>
            </View>
            <View style={styles.frameParent8}>
              <View style={[styles.descripcinParent, styles.parentFlexBox]}>
                <Text style={[styles.miInformacinPersonal, styles.miInfoTypo]}>
                  Descripción
                </Text>
                <Pressable
                  style={styles.lock1}
                  onPress={() => navigation.navigate('Descripcin')}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/lock2.png')}
                  />
                </Pressable>
              </View>
              <View style={styles.frameWrapper3}>
                <View style={styles.frameWrapperFlexBox}>
                  <View style={styles.nombreYApellidosParent}>
                    <Text style={[styles.quEsLo, styles.quEsLoTypo]}>
                      ¿Qué es lo que más te apasiona en la vida?
                    </Text>
                    <Text style={[styles.compartirConMi, styles.quEsLoTypo]}>
                      Compartir con mi familia y amigos
                    </Text>
                  </View>
                  <Image
                    style={styles.vectorIcon4}
                    contentFit="cover"
                    source={require('../assets/vector52.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParent10}>
              <View style={[styles.descripcinParent, styles.parentFlexBox]}>
                <Text style={[styles.miInformacinPersonal, styles.miInfoTypo]}>
                  Mi Salud
                </Text>
                <Pressable
                  style={styles.lock2}
                  onPress={() => navigation.navigate('MiSalud')}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/lock3.png')}
                  />
                </Pressable>
              </View>
              <View style={styles.frameWrapper4}>
                <View style={styles.frameWrapperFlexBox}>
                  <View style={styles.hoyMeSientoConGripeWrapper}>
                    <Text
                      style={[styles.hoyMeSientoContainer, styles.quEsLoTypo]}
                    >
                      <Text style={[styles.hoyMeSiento, styles.miInfoTypo]}>
                        {'Hoy me siento... '}
                      </Text>
                      <Text style={styles.conGripe}>Con gripe</Text>
                    </Text>
                  </View>
                  <Image
                    style={styles.combinedShapeIcon}
                    contentFit="cover"
                    source={require('../assets/combinedshape.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParent12}>
              <View style={[styles.descripcinParent, styles.parentFlexBox]}>
                <Text style={[styles.miInformacinPersonal, styles.miInfoTypo]}>
                  Dedicatorias
                </Text>
                <Image
                  style={styles.lock2}
                  contentFit="cover"
                  source={require('../assets/lock3.png')}
                />
              </View>
              <View style={styles.frameWrapper4}>
                <View style={styles.frameWrapperFlexBox}>
                  <View style={styles.hoyMeSientoConGripeWrapper}>
                    <Text style={[styles.espacioDndeLos, styles.quEsLoTypo]}>
                      Espacio dónde los contactos puedan dejar dedicatorias
                      personalizables.
                    </Text>
                  </View>
                  <Image
                    style={styles.combinedShapeIcon}
                    contentFit="cover"
                    source={require('../assets/combinedshape1.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  misLbumesPosition: {
    left: '50%'
  },
  parentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupChildLayout: {
    height: 16,
    width: 16
  },
  textTypo: {
    textAlign: 'right',
    fontWeight: '800'
  },
  iconLayout: {
    width: 26,
    overflow: 'hidden'
  },
  wrapperLayout: {
    height: 50,
    width: 50
  },
  miInfoTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.lato
  },
  miLegadoTypo: {
    color: Color.gris,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  miInfoLayout: {
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base
  },
  tabs1Border: {
    borderColor: Color.secundario,
    borderStyle: 'solid',
    top: 0
  },
  tabsPosition: {
    height: 1,
    borderTopWidth: 1,
    top: 39,
    borderColor: Color.secundario,
    borderStyle: 'solid'
  },
  skillLayout: {
    width: 30,
    height: 30,
    overflow: 'hidden'
  },
  text1Typo: {
    color: Color.primary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato
  },
  frameWrapperFlexBox: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center'
  },
  quEsLoTypo1: {
    fontWeight: '500',
    fontFamily: FontFamily.lato
  },
  quEsLoTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    letterSpacing: 0,
    color: Color.negro
  },
  perfilMiInfoChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    width: '100%',
    backgroundColor: Color.white
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  vectorIcon: {
    height: 24,
    width: 24
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
    overflow: 'hidden'
  },
  groupChild: {
    left: 0,
    top: 0
  },
  text: {
    top: 1,
    left: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.nunitoSans,
    color: Color.white
  },
  ellipseParent: {
    top: -6,
    left: 13
  },
  iconly: {
    marginLeft: 20,
    height: 24,
    width: 24
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  vectorParent: {
    marginLeft: 189,
    flexDirection: 'row'
  },
  image6Parent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ionmenuIcon: {
    height: 20,
    marginTop: 10
  },
  frameChild: {
    width: 120,
    height: 120,
    marginLeft: 64
  },
  frameItem: {
    marginLeft: 64
  },
  groupParent: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  frameView: {
    alignItems: 'center'
  },
  brunoPham: {
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontWeight: '700'
  },
  daNangVietnam: {
    marginTop: 5,
    fontWeight: '300',
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.gris,
    lineHeight: 24
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    color: Color.white
  },
  button: {
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton,
    marginLeft: 52,
    flexDirection: 'row'
  },
  frameParent2: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  frameContainer: {
    alignItems: 'flex-end'
  },
  miLegado: {
    width: 110,
    color: Color.gris,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs: {
    width: 142,
    left: 0,
    top: 0
  },
  misLbumes: {
    marginTop: -9.5,
    marginLeft: -43,
    top: '50%',
    color: Color.gris,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    left: '50%'
  },
  misLbumesWrapper: {
    left: 142,
    borderBottomWidth: 1,
    height: 39,
    width: 142,
    overflow: 'hidden'
  },
  miInfo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    color: Color.white
  },
  tabs1: {
    left: 284,
    backgroundColor: Color.secundario,
    borderTopWidth: 0.5,
    width: 144,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabsBarChild: {
    width: 148,
    left: 0
  },
  tabsBarItem: {
    left: 279,
    width: 150
  },
  tabsBar: {
    height: 40,
    marginTop: 20,
    width: 428,
    backgroundColor: Color.white
  },
  frameGroup: {
    height: '50%',
    width: '100%',
    paddingBottom: Padding.p_xl,
    alignItems: 'center',
    backgroundColor: Color.white
  },
  skillIconsinstagram: {
    height: 30
  },
  skillIconslinkedin: {
    height: 30,
    marginLeft: 20
  },
  logostiktokIcon: {
    height: 30,
    marginLeft: 20
  },
  familiares: {
    textAlign: 'left'
  },
  text1: {
    letterSpacing: 0.3,
    textAlign: 'right',
    fontWeight: '800'
  },
  frameInner: {
    width: 35,
    height: 35,
    zIndex: 0
  },
  vectorIcon1: {
    top: 6,
    left: 6,
    zIndex: 1,
    height: 24,
    width: 24
  },
  ellipseGroup: {
    marginLeft: 16,
    flexDirection: 'row'
  },
  parent: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  amigosParent: {
    marginLeft: 51,
    alignItems: 'flex-end'
  },
  logros: {
    display: 'flex',
    width: 154,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameParent5: {
    marginTop: 20,
    flexDirection: 'row'
  },
  miInformacinPersonal: {
    fontSize: FontSize.size_5xl,
    width: 266,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  lock: {
    marginLeft: 90,
    height: 30,
    width: 24
  },
  miInformacinPersonalParent: {
    flexDirection: 'row',
    left: 0,
    top: 0
  },
  nombreYApellidos: {
    textAlign: 'left',
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.negro
  },
  brunoPham1: {
    color: Color.grisGeneral,
    textAlign: 'left',
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    marginTop: 10
  },
  nombreYApellidosParent: {
    width: 347
  },
  frameWrapper: {
    top: 50,
    left: 0
  },
  frameWrapper1: {
    top: 118,
    left: 0
  },
  frameWrapper2: {
    top: 186,
    left: 0
  },
  redesSocialesParent: {
    width: 187
  },
  listaDeDeseosParent: {
    width: 181,
    marginLeft: 20
  },
  frameParent7: {
    top: 254,
    width: 388,
    flexDirection: 'row',
    left: 0
  },
  lock1: {
    height: 12,
    marginLeft: 90,
    width: 24
  },
  descripcinParent: {
    flexDirection: 'row'
  },
  quEsLo: {
    fontWeight: '500',
    fontFamily: FontFamily.lato
  },
  compartirConMi: {
    fontWeight: '300',
    fontFamily: FontFamily.lato,
    marginTop: 10
  },
  vectorIcon4: {
    width: 15,
    height: 15,
    marginLeft: 20
  },
  frameWrapper3: {
    height: 64,
    marginTop: 20
  },
  frameParent8: {
    top: 322,
    height: 113,
    width: 388,
    left: 0
  },
  lock2: {
    width: 12,
    marginLeft: 90,
    height: 24
  },
  hoyMeSiento: {
    fontFamily: FontFamily.lato
  },
  conGripe: {
    fontWeight: '300',
    fontFamily: FontFamily.lato
  },
  hoyMeSientoContainer: {
    width: 347
  },
  hoyMeSientoConGripeWrapper: {
    width: 334
  },
  combinedShapeIcon: {
    width: 25,
    height: 25,
    marginLeft: 20
  },
  frameWrapper4: {
    height: 82,
    marginTop: 20
  },
  frameParent10: {
    top: 455,
    left: 0
  },
  espacioDndeLos: {
    width: 347,
    fontWeight: '300',
    fontFamily: FontFamily.lato
  },
  frameParent12: {
    left: 0
  },
  frameParent6: {
    height: 322,

    width: 388
  },
  frameParent3: {
    padding: Padding.p_xl,
    marginTop: 2
  },
  frameParent: {
    left: 0,
    top: 0
  },
  navigationIcon: {
    marginLeft: -214,
    bottom: 0,
    height: 105,
    width: 428
  },
  perfilMiInfo: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.white
  }
})

export default PERFILMIINFO
