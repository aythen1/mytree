import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Border, FontFamily, Color, FontSize } from '../GlobalStyles'
import { useSelector, useDispatch } from 'react-redux'
import { setPanel } from '../redux/slices/panel.slices'
import Papers from './Papers'
import HeaderIcons from '../components/HeaderIcons'
import LupaSVG from '../components/svgs/LupaSVG'
import BookSVG from '../components/svgs/BookSVG'
import SettingMuroSVG from '../components/svgs/SettingMuroSVG'

const MIDIARIOPANTALLAPERSONAL = () => {
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)
  const { diaries } = useSelector((state) => state.family)

  const [paper, setPaper] = useState(false)
  const navigation = useNavigation()
  const [
    iconlyLightOutlineInfoSquaVisible,
    setIconlyLightOutlineInfoSquaVisible
  ] = useState(false)

  const openIconlyLightOutlineInfoSqua = useCallback(() => {
    setIconlyLightOutlineInfoSquaVisible(true)
  }, [])

  const closeIconlyLightOutlineInfoSqua = useCallback(() => {
    setIconlyLightOutlineInfoSquaVisible(false)
  }, [])

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.miDiarioPantallaPersonal}>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15
            }}
          >
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require('../assets/image-6.png')}
            />
            <View style={styles.iconlylightOutlinesearchParent}>
              <HeaderIcons
                icons={[<LupaSVG />, <BookSVG />, <SettingMuroSVG />]}
              />
            </View>
          </View>

          <View style={styles.frameParent12}>
            {/* <View style={styles.ionmenuParent}> */}
            <Pressable onPress={() => dispatch(setPanel(!showPanel))}>
              <Image
                style={[styles.ionmenuIcon, styles.ionmenuIconLayout]}
                contentFit="cover"
                source={require('../assets/ionmenu2.png')}
              />
            </Pressable>
            <Text style={[styles.miDiario, styles.textTypo]}>Mi Diario</Text>
            {/* </View> */}
            <Pressable
              style={styles.iconlylightOutlineinfoSqua}
              onPress={openIconlyLightOutlineInfoSqua}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/iconlylightoutlineinfosquare.png')}
              />
            </Pressable>
          </View>

          <View style={styles.ltimosDiariosFamiliaresPublParent}>
            <Text style={[styles.ltimosDiariosFamiliares, styles.textTypo]}>
              Últimos diarios familiares publicados
            </Text>
            <View style={styles.stories}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {diaries.map((diary) => (
                  <View key={diary.name} style={styles.faritaLayout}>
                    <Pressable
                      style={[styles.aatar, styles.aatarPosition]}
                      onPress={() => navigation.navigate('MUROINFORMACIN1')}
                    >
                      <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/aatar4.png')}
                      />
                    </Pressable>
                    <View
                      style={[styles.benjaminWrapper, styles.ionmenuIconLayout]}
                    >
                      <Text style={[styles.benjamin1, styles.text1Typo]}>
                        {diary.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          {!paper && (
            <View>
              <View style={styles.rectangleGroup}>
                <View style={[styles.frameContainer]}>
                  <View>
                    <View>
                      <Text style={[styles.enBlancoO, styles.textTypo]}>
                        Mi reflexión diaria
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require('../assets/vector34.png')}
                  />
                </View>
              </View>

              <View style={styles.rectangleGroup2}>
                <View style={[styles.frameContainer]}>
                  <View>
                    <View>
                      <Text style={[styles.enBlancoO, styles.textTypo]}>
                        Celebrando Logros
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require('../assets/vector35.png')}
                  />
                </View>
              </View>

              <View style={styles.rectangleGroup3}>
                <View style={[styles.frameContainer]}>
                  <View>
                    <View>
                      <Text style={[styles.enBlancoO, styles.textTypo]}>
                        Desafíos Superados
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require('../assets/vector36.png')}
                  />
                </View>
              </View>

              <View style={styles.rectangleGroup4}>
                <View style={[styles.frameContainer]}>
                  <View>
                    <View>
                      <Text style={[styles.enBlancoO, styles.textTypo]}>
                        Risas y Anécdotas
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.vectorIcon3}
                    contentFit="cover"
                    source={require('../assets/vector37.png')}
                  />
                </View>
              </View>

              <Pressable
                style={styles.rectangleGroup5}
                onPress={() => navigation.navigate('MIDIARIOENTRADATEXTOPL7')}
              >
                <View style={[styles.frameContainer]}>
                  <View>
                    <View>
                      <Text style={[styles.enBlancoO, styles.textTypo]}>
                        Descubriendo el mundo
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.vectorIcon4}
                    contentFit="cover"
                    source={require('../assets/vector38.png')}
                  />
                </View>
              </Pressable>
            </View>
          )}

          <View
            style={{
              borderWidth: 1,
              borderColor: Color.grisClaro,
              marginVertical: 20
            }}
          />

          <Pressable onPress={() => setPaper(!paper)}>
            <Papers />
          </Pressable>
        </View>
      </ScrollView>

      {/* <Modal
        animationType="fade"
        transparent
        visible={iconlyLightOutlineInfoSquaVisible}
      >
        <View style={styles.iconlyLightOutlineInfoSquaOverlay}>
          <Pressable
            style={styles.iconlyLightOutlineInfoSquaBg}
            onPress={closeIconlyLightOutlineInfoSqua}
          />
          <PopupDiario onClose={closeIconlyLightOutlineInfoSqua} />
        </View>
      </Modal> */}
    </>
  )
}

const styles = StyleSheet.create({
  frameChildLayout: {
    zIndex: 0,
    height: 61,
    borderRadius: Border.br_8xs,
    width: 388
  },
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  frameParentPosition: {
    justifyContent: 'space-between',
    // top: '50%',
    zIndex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    left: 20
    // position: 'absolute'
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: 'absolute'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  aatarPosition: {
    width: 70,
    left: 0,
    position: 'absolute'
  },
  ionmenuIconLayout: {
    height: 20,
    overflow: 'hidden'
  },
  text1Typo: {
    textAlign: 'center',
    letterSpacing: 0,
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  faritaLayout: {
    height: 90,
    width: 70,
    marginLeft: 10
  },
  frameChild: {
    backgroundColor: Color.colorAntiquewhite
  },
  enBlancoO: {
    lineHeight: 24,
    fontWeight: '500',
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl
  },
  cilpencilIcon: {
    width: 22,
    height: 22,
    marginLeft: 84,
    overflow: 'hidden'
  },
  text: {
    lineHeight: 29,
    fontWeight: '300',
    fontSize: FontSize.size_5xl,
    marginLeft: 84,
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  frameGroup: {
    top: 16,
    zIndex: 1,
    width: 348,
    alignItems: 'center',
    flexDirection: 'row',
    left: 20,
    position: 'absolute'
  },
  frameItem: {
    backgroundColor: Color.colorLavenderblush
  },
  vectorIcon: {
    height: 28,
    width: 26
    // marginRight: 30
    // backgroundColor: 'red'
  },
  frameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rectangleGroup: {
    marginTop: 20,
    padding: 10,
    height: 60,
    justifyContent: 'center',
    backgroundColor: Color.colorLavenderblush
  },
  rectangleGroup2: {
    marginTop: 20,
    padding: 10,
    height: 60,
    justifyContent: 'center',
    backgroundColor: Color.colorLavender_100
  },
  rectangleGroup3: {
    marginTop: 20,
    padding: 10,
    height: 60,
    justifyContent: 'center',
    backgroundColor: Color.colorLightcyan
  },
  rectangleGroup4: {
    marginTop: 20,
    padding: 10,
    height: 60,
    justifyContent: 'center',
    backgroundColor: Color.colorOldlace
  },
  rectangleGroup5: {
    marginTop: 20,
    padding: 10,
    height: 60,
    justifyContent: 'center',
    backgroundColor: Color.colorAntiquewhite
  },

  frameInner: {
    backgroundColor: Color.colorLavender_100
  },
  vectorIcon1: {
    width: 24,
    height: 28
  },
  frameParent1: {
    marginTop: -14
  },
  rectangleView: {
    backgroundColor: Color.colorLightcyan
  },
  frameChild1: {
    backgroundColor: Color.colorHoneydew_200
  },
  vectorIcon3: {
    height: 24,
    width: 26
  },
  frameParent3: {
    marginTop: -12.5
  },
  frameChild2: {
    backgroundColor: Color.colorOldlace
  },
  vectorIcon4: {
    height: 18,
    width: 26
  },
  frameParent: {
    top: 299,
    height: 261,
    left: 20,
    position: 'absolute'
  },
  miDiarioPantallaPersonalChild: {
    top: 560,
    left: -3,
    width: 431,
    height: 380,
    position: 'absolute',
    backgroundColor: Color.white
  },
  miDiarioPantallaPersonalItem: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 279,
    top: 0,
    backgroundColor: Color.white
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  iconlylightOutlinesearch: {
    height: 24,
    width: 24
  },
  documentIcon: {
    overflow: 'hidden'
  },
  iconlylightOutlinesearchParent: {
    // top: 20,
    // left: 276,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
    // position: 'absolute'
  },
  ltimosDiariosFamiliares: {
    color: Color.primario2,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl,
    marginLeft: 15
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  aatar: {
    height: 70,
    top: 0
  },
  benjamin1: {
    // left: 10,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center'
    // position: 'absolute'
  },
  benjaminWrapper: {
    top: 70,
    width: 70,
    left: 0,
    position: 'absolute'
  },
  farita1: {
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    position: 'absolute',
    left: 20
  },
  farita: {
    marginLeft: 20
  },
  marie1: {
    left: 19,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    position: 'absolute'
  },
  stories: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row'
  },
  ltimosDiariosFamiliaresPublParent: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center'
  },
  miDiarioPantallaPersonalInner: {
    top: 580,
    borderStyle: 'solid',
    borderColor: Color.secundario,
    borderTopWidth: 1,
    width: 389,
    height: 1,
    left: 20,
    position: 'absolute'
  },
  aatarIcon3: {
    width: 36,
    height: 36
  },
  aatarWrapper: {
    alignItems: 'center'
  },
  text1: {
    lineHeight: 36,
    fontWeight: '700',
    fontSize: FontSize.size_5xl
  },
  jul2023: {
    lineHeight: 30,
    marginLeft: 10,
    fontSize: FontSize.size_xl
  },
  parent: {
    marginLeft: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameParent7: {
    flexDirection: 'row'
  },
  hoyHemosVisitado: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    display: 'flex',
    letterSpacing: 0,
    marginTop: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    alignItems: 'center',
    width: '100%'
  },
  frameParent6: {
    width: '100%'
  },
  frameParent8: {
    marginTop: 20,
    width: 388
  },
  frameParent5: {
    // top: 644,
    height: 163
    // left: 20,
    // position: 'absolute'
  },
  iconlyboldfilter2: {
    // marginLeft: 213,
    height: 24,
    width: 24
  },
  ltimasEntradasParent: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navigationIcon: {
    top: 822,
    height: 105
  },
  ionmenuIcon: {
    width: 26
  },
  miDiario: {
    marginLeft: '25%',
    fontWeight: '700',
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  ionmenuParent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconlyLightOutlineInfoSquaOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  iconlyLightOutlineInfoSquaBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlylightOutlineinfoSqua: {
    width: 29,
    height: 29,
    marginLeft: 17
  },
  frameParent12: {
    top: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  miDiarioPantallaPersonal: {
    paddingBottom: 50,
    width: '100%',
    backgroundColor: Color.white
  }
})

export default MIDIARIOPANTALLAPERSONAL
