import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Border } from '../GlobalStyles'
import { useSelector } from 'react-redux'
import HeaderIcons from '../components/HeaderIcons'
import LupaSVG from '../components/svgs/LupaSVG'
import BookSVG from '../components/svgs/BookSVG'
import SettingMuroSVG from '../components/svgs/SettingMuroSVG'

const Paper = () => {
  const { paper } = useSelector((state) => state.papers)
  const navigation = useNavigation()

  return (
    <View style={styles.miDiarioEntradaTexto}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          top: 20
        }}
      >
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <View style={styles.parentFlexBox}>
          <HeaderIcons icons={[<LupaSVG />, <BookSVG />, <SettingMuroSVG />]} />
        </View>
      </View>
      <LinearGradient
        style={[
          styles.miDiarioEntradaTextoChild,
          styles.navigationIconPosition
        ]}
        locations={[0, 1]}
        colors={['#b7e4c0', 'rgba(245, 245, 247, 0)']}
      >
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/group-68463.png')}
          />
        </Pressable>

        <View
          style={[styles.miDiarioEntradaTextoInner, styles.frameParentLayout]}
        >
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <View style={styles.frameGroup}>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>
                  {paper.date.slice(0, 2)}
                </Text>
                <Text style={[styles.jul2023, styles.textTypo]}>
                  {paper.date.slice(2)}
                </Text>
                <Image
                  style={styles.iconlycurvedarrowDown2}
                  contentFit="cover"
                  source={require('../assets/iconlycurvedarrowdown2.png')}
                />
              </View>
              <Text
                style={[
                  styles.descubriendoElMundo,
                  styles.hoyHemosVisitadoFlexBox
                ]}
              >
                Descubriendo el mundo
              </Text>
              <Text
                style={[
                  styles.hoyHemosVisitado,
                  styles.hoyHemosVisitadoFlexBox
                ]}
              >
                {paper.message}
              </Text>
            </View>
            <Text style={styles.text1}>{`🌎  `}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  navigationIconPosition: {
    width: '100%',
    left: 0
    // position: 'absolute'
  },
  frameParentLayout: {
    height: 422,
    position: 'absolute'
  },
  textTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    color: Color.negro
  },
  hoyHemosVisitadoFlexBox: {
    marginTop: 20,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignSelf: 'stretch'
  },
  wrapperLayout: {
    height: 24,
    width: 24
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20
  },
  documentIcon: {
    overflow: 'hidden'
  },
  iconlylightOutlinesearchParent: {
    left: 276,
    justifyContent: 'center',
    top: 20,
    flexDirection: 'row',
    position: 'absolute'
  },
  miDiarioEntradaTextoChild: {
    top: 40,
    height: '100%',
    backgroundColor: Color.linearBoton
  },
  text: {
    fontWeight: '700',
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  jul2023: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    marginLeft: 10,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  iconlycurvedarrowDown2: {
    width: 14,
    height: 7,
    marginLeft: 10
  },
  parent: {
    alignSelf: 'stretch'
  },
  descubriendoElMundo: {
    color: Color.negro,
    marginTop: 20,
    lineHeight: 36,
    fontSize: FontSize.size_5xl
  },
  hoyHemosVisitado: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    color: Color.grisGeneral,
    height: 310
  },
  frameGroup: {
    zIndex: 0,
    alignSelf: 'stretch',
    flex: 1
  },
  text1: {
    left: 344,
    lineHeight: 29,
    fontWeight: '300',
    zIndex: 1,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_5xl,
    top: 20,
    position: 'absolute'
  },
  frameParent: {
    top: 0,
    width: '100%',
    left: 0,
    height: 422,
    flexDirection: 'row'
  },
  miDiarioEntradaTextoInner: {
    top: 50,
    width: '100%',
    left: 20
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    top: 15,
    left: 20
  },
  navigationIcon: {
    top: 821,
    height: 105
  },
  miDiarioEntradaTexto: {
    // borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    // height: 926,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  }
})

export default Paper
