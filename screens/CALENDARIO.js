import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'
import { setPanel } from '../redux/slices/panel.slices'
import Calendario from '../components/Calendario'
import BarraBusqueda from '../components/BarraBusqueda'

const CALENDARIO = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)

  return (
    <ScrollView
      style={styles.calendario3}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topContainer}>
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
          style={styles.image6Icon}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
      </View>

      <View style={styles.ionmenuParent}>
        <BarraBusqueda />
      </View>

      <Calendario />
      <View style={styles.frameParent}>
        <View style={styles.upcomingParent}>
          <View style={styles.fechasContainer}>
            <Text style={styles.fechas}>Fechas</Text>
          </View>
          <View style={styles.eventosContainer}>
            <Text style={styles.eventos}>Eventos</Text>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textTypo: {
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
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
  icon: {
    overflow: 'hidden'
  },
  ionmenu: {
    width: 26,
    height: 20
  },
  ionmenuParent: {
    flexDirection: 'row'
  },
  upcomingParent: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: '2%',
    height: 50
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
  frameWrapper: {
    width: 388
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
  background: {
    zIndex: 0
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    flex: 1
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
    width: '100%',
    justifyContent: 'space-between'
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 50
  },
  fechasContainer: {
    backgroundColor: '#b7e4c0',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  eventosContainer: {
    backgroundColor: Color.fAFAFA,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  fechas: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    fontWeight: '700'
  },
  eventos: {
    fontSize: FontSize.size_xl,
    color: Color.grisClaro,
    fontWeight: '700'
  }
})

export default CALENDARIO
