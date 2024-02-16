import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { setPanel } from '../redux/slices/panel.slices'
import Calendario from '../components/Calendario'

const CALENDARIO = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.calendario3}>
        {/* <View style={styles.parent}>
          <Image
            style={[styles.iconlyboldfilter2, styles.iconlyboldfilterLayout]}
            contentFit="cover"
            source={require('../assets/iconlyboldfilter21.png')}
          />
        </View> */}

        <View style={styles.topContainer}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require('../assets/image-6.png')}
          />
          <Pressable
            onPress={() => navigation.navigate('CALENDARIOAJUSTES')}
            style={styles.settingsPressable}
          >
            <Image
              style={[styles.icon5, styles.iconLayout]}
              contentFit="cover"
              source={require('../assets/iconlylightoutlinesetting1.png')}
            />
          </Pressable>
        </View>
        <View style={[styles.ionmenuParent, styles.ionmenuParentPosition]}>
          <View style={styles.iconlylightOutlinesearchParent}>
            <Pressable
              style={styles.ionmenu}
              onPress={() => dispatch(setPanel(!showPanel))}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/ionmenu.png')}
              />
            </Pressable>
            <Image
              style={styles.iconlylightOutlinesearch}
              contentFit="cover"
              source={require('../assets/iconlylightoutlinesearch8.png')}
            />
            <Pressable
              style={[styles.iconlyboldfilter2, styles.iconlyboldfilterLayout]}
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
        <Calendario />
        <View style={styles.frameParent}>
          <View style={styles.upcomingParent}>
            <Text style={[styles.upcoming, styles.textTypo]}>UPCOMING</Text>
            <View style={styles.iconlyboldfilter2Parent}>
              <Pressable
                onPress={() => navigation.navigate('RecopilacionDeRespuestas')}
              >
                <Image
                  style={[
                    styles.iconlyboldfilter21,
                    styles.iconlyboldfilterLayout
                  ]}
                  contentFit="cover"
                  source={require('../assets/iconlyboldfilter21.png')}
                />
              </Pressable>
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
            <Pressable
              style={styles.frameContainer}
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
              <View style={styles.TextWrapper}>
                <Text style={[styles.marieContainerTypo]}>
                  <Text style={styles.textTypo}>{`Bruno `}</Text>
                  <Text style={styles.cumple28Aos}>cumple 28 años</Text>
                </Text>
              </View>
            </Pressable>
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
              <View style={styles.TextWrapper}>
                <Text style={[styles.marieContainerTypo]}>
                  <Text style={styles.textTypo}>{`Bruno `}</Text>
                  <Text style={styles.cumple28Aos}>
                    ha organizado un evento familiar
                  </Text>
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.frameWrapper, styles.frameFlexBox]}
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
              <View style={styles.TextWrapper}>
                <Text style={[styles.marieContainerTypo]}>
                  <Text style={styles.textTypo}>{`Marie `}</Text>
                  <Text style={styles.cumple28Aos}>cumple 28 años</Text>
                </Text>
              </View>
            </Pressable>
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
              <View style={styles.TextWrapper}>
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
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textTypo: {
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  iconlyboldfilterLayout: {
    width: 24,
    height: 24
  },
  iconLayout: {
    height: 25,
    width: 25
  },
  vectorIconPosition: {
    top: '50%'
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
  image6Icon: {
    width: 87,
    height: 55
  },
  text: {
    fontSize: FontSize.size_13xl,
    textAlign: 'left'
  },
  iconlyboldfilter2: {
    height: 24
  },
  parent: {
    alignItems: 'center',
    flexDirection: 'row'
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
    marginTop: '3%',
    marginBottom: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15
  },
  ionmenuParent: {
    alignItems: 'center',
    flexDirection: 'row',
    left: 9
  },
  upcoming: {
    fontSize: FontSize.size_xl
  },
  iconlyboldfilter21: {
    height: 24
  },
  iconlyboldplus: {
    width: 25,
    height: 25
  },
  iconlyboldfilter2Parent: {
    flexDirection: 'row',
    gap: 15,
    left: '18%'
  },
  upcomingParent: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: '2%'
  },
  unsplashilip77sbmoeIcon: {
    width: 44,
    height: 44,
    zIndex: 0
  },
  vectorIcon: {
    marginTop: -8,
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
  TextWrapper: {
    width: '80%'
  },
  frameContainer: {
    alignItems: 'center',
    flexDirection: 'row'
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
    alignItems: 'flex-end'
  },

  separator: {
    backgroundColor: Color.secundario,
    height: 1
  },
  tue: {},
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
  date: {
    opacity: 0.1,
    zIndex: 1
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flex: 1
  },

  eventoGraduacionIcon: {
    width: 18,
    zIndex: 3,
    height: 15
  },
  icon5: {
    width: 20,
    height: 30
  },
  iconlylightOutlinesetting: {
    top: '2.16%',
    bottom: '95.25%',
    width: '5.61%',
    height: '2.59%'
  },
  calendario3: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.white,
    padding: Padding.p_xl
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  settingsPressable: {
    left: '380%'
  }
})

export default CALENDARIO
