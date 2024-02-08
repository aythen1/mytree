import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'
import { Image } from 'expo-image'
import MenuPrincipal from '../components/MenuPrincipal'
import { useNavigation } from '@react-navigation/native'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'

const CALENDARIO = () => {
  const [ionmenuIconVisible, setIonmenuIconVisible] = useState(false)
  const navigation = useNavigation()

  const openIonmenuIcon = useCallback(() => {
    setIonmenuIconVisible(true)
  }, [])

  const closeIonmenuIcon = useCallback(() => {
    setIonmenuIconVisible(false)
  }, [])

  return (
    <>
      <View style={styles.calendario3}>
        <View
          style={[styles.calendario3Child, styles.calendario3ChildLayout]}
        />
        <Image
          style={[styles.image6Icon, styles.image6IconPosition]}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo]}>2023</Text>
          <Image
            style={[styles.iconlyboldfilter2, styles.iconlyboldfilterLayout]}
            contentFit="cover"
            source={require('../assets/iconlyboldfilter21.png')}
          />
        </View>
        <View style={[styles.calendario3Inner, styles.image6IconPosition]}>
          <View style={[styles.ionmenuParent, styles.ionmenuParentPosition]}>
            <Pressable style={styles.ionmenu} onPress={openIonmenuIcon}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/ionmenu.png')}
              />
            </Pressable>
            <View style={styles.iconlylightOutlinesearchParent}>
              <Image
                style={styles.iconlylightOutlinesearch}
                contentFit="cover"
                source={require('../assets/iconlylightoutlinesearch8.png')}
              />
              <Pressable
                style={[
                  styles.iconlyboldfilter2,
                  styles.iconlyboldfilterLayout
                ]}
                onPress={() => navigation.navigate('CrearEvento')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/iconlylightoutlinecalendar6.png')}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.image6IconPosition]}>
          <View style={styles.upcomingParent}>
            <Text style={[styles.upcoming, styles.textTypo]}>UPCOMING</Text>
            <View style={styles.iconlyboldfilter2Parent}>
              <Image
                style={[
                  styles.iconlyboldfilter21,
                  styles.iconlyboldfilterLayout
                ]}
                contentFit="cover"
                source={require('../assets/iconlyboldfilter21.png')}
              />
              <Pressable
                style={styles.iconlyboldplus}
                onPress={() => navigation.navigate('CALENDARIOCREARFECHAESPEC')}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require('../assets/iconlyboldplus.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={styles.unsplashilip77sbmoeParent}>
                <Image
                  style={styles.unsplashilip77sbmoeIcon}
                  contentFit="cover"
                  source={require('../assets/unsplashilip77sbmoe.png')}
                />
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector15.png')}
                />
              </View>
              <View style={styles.marieCumple28AosWrapper}>
                <Text
                  style={[
                    styles.marieCumple28Container,
                    styles.marieContainerTypo
                  ]}
                >
                  <Text style={styles.textTypo}>{`Marie `}</Text>
                  <Text style={styles.cumple28Aos}>cumple 28 años</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.frameView}>
                <View style={styles.unsplashilip77sbmoeParent}>
                  <Image
                    style={styles.unsplashilip77sbmoeIcon}
                    contentFit="cover"
                    source={require('../assets/unsplashilip77sbmoe1.png')}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.vectorIconPosition]}
                    contentFit="cover"
                    source={require('../assets/vector69.png')}
                  />
                </View>
                <View style={styles.brunoHaSubidoUnVideoDiariWrapper}>
                  <Text
                    style={[
                      styles.brunoHaSubidoContainer,
                      styles.marieContainerTypo
                    ]}
                  >
                    <Text style={styles.textTypo}>{`Bruno `}</Text>
                    <Text style={styles.cumple28Aos}>
                      ha subido un video diario
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.framePressable, styles.frameFlexBox]}
              onPress={() => navigation.navigate('Invitacin')}
            >
              <View style={styles.unsplashilip77sbmoeParent}>
                <Image
                  style={styles.unsplashilip77sbmoeIcon}
                  contentFit="cover"
                  source={require('../assets/unsplashilip77sbmoe.png')}
                />
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector15.png')}
                />
              </View>
              <View style={styles.marieCumple28AosWrapper}>
                <Text
                  style={[
                    styles.marieHaOrganizadoContainer,
                    styles.marieContainerTypo
                  ]}
                >
                  <Text style={styles.textTypo}>{`Marie `}</Text>
                  <Text style={styles.cumple28Aos}>
                    ha organizado un evento familiar
                  </Text>
                </Text>
              </View>
            </Pressable>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.unsplashilip77sbmoeParent}>
                <Image
                  style={styles.unsplashilip77sbmoeIcon}
                  contentFit="cover"
                  source={require('../assets/unsplashilip77sbmoe.png')}
                />
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector15.png')}
                />
              </View>
              <View style={styles.marieCumple28AosWrapper}>
                <Text
                  style={[
                    styles.marieCumple28Container,
                    styles.marieContainerTypo
                  ]}
                >
                  <Text style={styles.textTypo}>{`Marie `}</Text>
                  <Text style={styles.cumple28Aos}>cumple 28 años</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.frameView}>
                <View style={styles.unsplashilip77sbmoeParent}>
                  <Image
                    style={styles.unsplashilip77sbmoeIcon}
                    contentFit="cover"
                    source={require('../assets/unsplashilip77sbmoe1.png')}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.vectorIconPosition]}
                    contentFit="cover"
                    source={require('../assets/vector69.png')}
                  />
                </View>
                <View style={styles.brunoHaSubidoUnVideoDiariWrapper}>
                  <Text
                    style={[
                      styles.brunoHaSubidoContainer,
                      styles.marieContainerTypo
                    ]}
                  >
                    <Text style={styles.textTypo}>{`Bruno `}</Text>
                    <Text style={styles.cumple28Aos}>
                      ha subido un video diario
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.framePressable, styles.frameFlexBox]}
              onPress={() => navigation.navigate('Invitacin')}
            >
              <View style={styles.unsplashilip77sbmoeParent}>
                <Image
                  style={styles.unsplashilip77sbmoeIcon}
                  contentFit="cover"
                  source={require('../assets/unsplashilip77sbmoe.png')}
                />
                <Image
                  style={[styles.vectorIcon, styles.vectorIconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector15.png')}
                />
              </View>
              <View style={styles.marieCumple28AosWrapper}>
                <Text style={styles.marieContainerTypo}>
                  <Text style={styles.textTypo}>{`Marie `}</Text>
                  <Text style={styles.cumple28Aos}>
                    ha organizado un evento familiar
                  </Text>
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={[styles.calendarSelectChangeSize, styles.vectorIconPosition]}
        >
          <View style={styles.header}>
            <View style={styles.month}>
              <View style={styles.arrowLayout}>
                <Image
                  style={[
                    styles.iconlyboldfilter21,
                    styles.iconlyboldfilterLayout
                  ]}
                  contentFit="cover"
                  source={require('../assets/icon1.png')}
                />
              </View>
              <View style={styles.month1}>
                <Text style={[styles.month2, styles.yearTypo]}>ENERO</Text>
                <Text style={[styles.year, styles.yearTypo]}>2024</Text>
              </View>
              <View style={[styles.arrowButton1, styles.arrowLayout]}>
                <Image
                  style={[
                    styles.iconlyboldfilter21,
                    styles.iconlyboldfilterLayout
                  ]}
                  contentFit="cover"
                  source={require('../assets/icon.png')}
                />
              </View>
            </View>
            <View style={[styles.separator, styles.weekSpaceBlock]} />
            <View style={[styles.week, styles.weekSpaceBlock]}>
              <Text style={styles.monTypo}>LU</Text>
              <Text style={[styles.tue, styles.monTypo]}>MA</Text>
              <Text style={[styles.tue, styles.monTypo]}>MI</Text>
              <Text style={[styles.tue, styles.monTypo]}>JU</Text>
              <Text style={[styles.tue, styles.monTypo]}>VI</Text>
              <Text style={[styles.tue, styles.monTypo]}>SA</Text>
              <Text style={[styles.tue, styles.monTypo]}>DO</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date, styles.dateTypo]}>1</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date, styles.dateTypo]}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date, styles.dateTypo]}>3</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date, styles.dateTypo]}>4</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date, styles.dateTypo]}>5</Text>
              </View>
            </View>
            <View style={styles.dayStates10}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>6</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>7</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>8</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>10</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>11</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>12</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>13</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>14</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day19}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <View
                  style={[styles.background20, styles.backgroundPosition]}
                />
                <Text style={[styles.date14, styles.dateTypo]}>15</Text>
                <Image
                  style={styles.eventoGraduacionIcon}
                  contentFit="cover"
                  source={require('../assets/evento-graduacion.png')}
                />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>16</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>17</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>18</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View
                  style={[styles.background24, styles.backgroundPosition]}
                />
                <Text style={[styles.date18, styles.dateTypo1]}>19</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View
                  style={[styles.background24, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>20</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View
                  style={[styles.background24, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>21</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View
                  style={[styles.background24, styles.backgroundPosition]}
                />
                <Text style={[styles.date5, styles.dateTypo]}>22</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View
                  style={[styles.background28, styles.backgroundPosition]}
                />
                <Text style={[styles.date22, styles.dateTypo1]}>23</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>24</Text>
              </View>
            </View>
            <View style={[styles.dayStates29, styles.dayBorder]}>
              <View style={styles.day19}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <View
                  style={[styles.background20, styles.backgroundPosition]}
                />
                <Text style={[styles.date14, styles.dateTypo]}>25</Text>
                <Image
                  style={styles.eventoCasamientoIcon}
                  contentFit="cover"
                  source={require('../assets/evento-casamiento.png')}
                />
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>26</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>27</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>28</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>29</Text>
              </View>
            </View>
            <View style={styles.dayBorder}>
              <View style={styles.day}>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.date5, styles.dateTypo]}>30</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.navigationIcon, styles.ionmenuParentPosition]}
          contentFit="cover"
          source={require('../assets/navigation39.png')}
        />
        <Pressable
          style={styles.iconlylightOutlinesetting}
          onPress={() => navigation.navigate('CALENDARIOAJUSTES')}
        >
          <Image
            style={[styles.icon5, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/iconlylightoutlinesetting1.png')}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={ionmenuIconVisible}>
        <View style={styles.ionmenuIconOverlay}>
          <Pressable style={styles.ionmenuIconBg} onPress={closeIonmenuIcon} />
          <MenuPrincipal onClose={closeIonmenuIcon} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  calendario3ChildLayout: {
    borderRadius: Border.br_3xs,
    width: 428,
    backgroundColor: Color.white
  },
  image6IconPosition: {
    left: 20,
    position: 'absolute'
  },
  textTypo: {
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  iconlyboldfilterLayout: {
    width: 24,
    height: 24
  },
  ionmenuParentPosition: {
    left: 0,
    position: 'absolute'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  vectorIconPosition: {
    top: '50%',
    left: '50%',
    position: 'absolute'
  },
  marieContainerTypo: {
    textAlign: 'justify',
    lineHeight: 22,
    fontSize: FontSize.size_lg
  },
  frameFlexBox: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  yearTypo: {
    lineHeight: 21,
    letterSpacing: -0.3,
    fontSize: FontSize.size_base,
    color: Color.calendarDark,
    fontFamily: FontFamily.lato
  },
  arrowLayout: {
    padding: Padding.p_xs,
    height: 48,
    width: 48,
    borderRadius: Border.br_81xl,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.white
  },
  weekSpaceBlock: {
    marginTop: 16,
    alignSelf: 'stretch'
  },
  monTypo: {
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: FontSize.size_3xs,
    color: Color.calendarDark,
    fontFamily: FontFamily.lato,
    flex: 1
  },
  backgroundPosition: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  dateTypo: {
    fontWeight: '600',
    fontSize: FontSize.footnote_size,
    color: Color.calendarDark,
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  dateTypo1: {
    fontSize: FontSize.footnote_size,
    zIndex: 1,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  dayBorder: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.secundario,
    borderStyle: 'solid',
    alignSelf: 'stretch',
    overflow: 'hidden',
    flex: 1
  },
  calendario3Child: {
    top: 490,
    height: 442,
    width: 428,
    left: 0,
    position: 'absolute'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  text: {
    fontSize: FontSize.size_13xl,
    textAlign: 'left'
  },
  iconlyboldfilter2: {
    marginLeft: 20,
    height: 24
  },
  parent: {
    marginLeft: -59,
    top: 78,
    alignItems: 'center',
    flexDirection: 'row',
    left: '50%',
    position: 'absolute'
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
  iconlylightOutlinesearch: {
    width: 20,
    height: 20
  },
  iconlylightOutlinesearchParent: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  ionmenuParent: {
    top: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  calendario3Inner: {
    top: 85,
    width: 100,
    height: 24
  },
  upcoming: {
    fontSize: FontSize.size_xl,
    textAlign: 'left'
  },
  iconlyboldfilter21: {
    height: 24
  },
  iconlyboldplus: {
    width: 25,
    height: 25,
    marginLeft: 20
  },
  iconlyboldfilter2Parent: {
    marginLeft: 68,
    flexDirection: 'row'
  },
  upcomingParent: {
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  unsplashilip77sbmoeIcon: {
    width: 44,
    height: 44,
    zIndex: 0
  },
  vectorIcon: {
    marginTop: -8,
    marginLeft: -10,
    zIndex: 1,
    height: 15,
    width: 20
  },
  unsplashilip77sbmoeParent: {
    flexDirection: 'row'
  },
  cumple28Aos: {
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  marieCumple28Container: {
    width: 181
  },
  marieCumple28AosWrapper: {
    width: 159,
    marginLeft: 16
  },
  frameContainer: {
    width: 388,
    alignItems: 'center',
    flexDirection: 'row'
  },
  brunoHaSubidoContainer: {
    width: 258
  },
  brunoHaSubidoUnVideoDiariWrapper: {
    width: 210,
    marginLeft: 16
  },
  frameView: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameWrapper: {
    width: 388
  },
  marieHaOrganizadoContainer: {
    width: 318
  },
  framePressable: {
    alignSelf: 'stretch',
    overflow: 'hidden'
  },
  frameGroup: {
    marginTop: 19,
    alignSelf: 'stretch'
  },
  frameParent: {
    top: 488,
    alignItems: 'flex-end'
  },
  month2: {
    textAlign: 'right',
    color: Color.calendarDark,
    fontWeight: '700',
    letterSpacing: -0.3,
    fontSize: FontSize.size_base
  },
  year: {
    marginLeft: 4,
    color: Color.calendarDark,
    textAlign: 'left'
  },
  month1: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  arrowButton1: {
    marginLeft: 16
  },
  month: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  separator: {
    backgroundColor: Color.secundario,
    height: 1
  },
  tue: {
    marginLeft: 3
  },
  week: {
    opacity: 0.5,
    flexDirection: 'row'
  },
  header: {
    paddingBottom: Padding.p_base,
    alignSelf: 'stretch'
  },
  background: {
    zIndex: 0
  },
  day: {
    padding: Padding.p_5xs,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1
  },
  date: {
    opacity: 0.1,
    zIndex: 1
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flex: 1
  },
  date5: {
    zIndex: 1
  },
  dayStates10: {
    borderColor: Color.colorGray_600,
    borderWidth: 2,
    borderStyle: 'solid',
    alignSelf: 'stretch',
    overflow: 'hidden',
    flex: 1
  },
  background20: {
    backgroundColor: Color.primary,
    opacity: 0,
    zIndex: 1
  },
  date14: {
    zIndex: 2,
    alignSelf: 'stretch'
  },
  eventoGraduacionIcon: {
    width: 18,
    zIndex: 3,
    height: 15
  },
  day19: {
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    overflow: 'hidden',
    flex: 1
  },
  background24: {
    zIndex: 0,
    backgroundColor: Color.white,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%'
  },
  date18: {
    color: Color.calendarDark
  },
  background28: {
    backgroundColor: Color.primario1,
    zIndex: 0
  },
  date22: {
    color: Color.white
  },
  eventoCasamientoIcon: {
    width: 14,
    height: 16,
    zIndex: 3
  },
  dayStates29: {
    justifyContent: 'center'
  },
  calendarSelectChangeSize: {
    marginTop: -327,
    marginLeft: -214,
    height: 337,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    alignItems: 'center',
    width: 428,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428
  },
  icon5: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  iconlylightOutlinesetting: {
    left: '89.72%',
    top: '2.16%',
    right: '4.67%',
    bottom: '95.25%',
    width: '5.61%',
    height: '2.59%',
    position: 'absolute'
  },
  calendario3: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  }
})

export default CALENDARIO
