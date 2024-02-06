import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, Border, FontSize } from '../GlobalStyles'

const NavBarDiario = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.miDiarioEntradaTextoPl}>
      <Image
        style={[styles.navigationIcon, styles.navigationIconLayout]}
        contentFit="cover"
        source={require('../assets/navigation25.png')}
      />
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={[styles.vectorWrapper, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require('../assets/vector55.png')}
          />
        </View>
        <View>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require('../assets/vector61.png')}
          />
        </View>
        <View>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require('../assets/vector57.png')}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameLayout} />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require('../assets/vector58.png')}
          />
        </View>
        <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require('../assets/vector68.png')}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameLayout} />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require('../assets/vector63.png')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationIconLayout: {
    width: 428,
    position: 'absolute'
  },
  image6IconPosition: {
    left: 20,
    position: 'absolute'
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 100
  },
  textTypo: {
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  hoyLoHeFlexBox: {
    marginTop: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignSelf: 'stretch'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  frameFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  vectorFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm,
    width: 40,
    justifyContent: 'space-between',
    borderRadius: Border.br_8xs,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  frameLayout: {
    zIndex: 0,
    height: 36,
    width: 40,
    backgroundColor: Color.secundario,
    borderRadius: Border.br_8xs
  },
  vectorIconPosition1: {
    zIndex: 1,
    position: 'absolute'
  },
  vectorIconPosition: {
    left: 7,
    zIndex: 1,
    width: 26,
    position: 'absolute'
  },
  miDiarioEntradaTextoPlChild: {
    height: 390,
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 64,
    width: 428
  },
  text: {
    fontWeight: '700',
    lineHeight: 36,
    fontSize: FontSize.size_5xl
  },
  jul2023: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    marginLeft: 10
  },
  iconlycurvedarrowDown2: {
    width: 14,
    height: 7,
    marginLeft: 10
  },
  parent: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  descubriendoElMundo: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl
  },
  hoyLoHe: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  frameParent: {
    top: 133,
    width: 388,
    height: 301
  },
  image6Icon: {
    top: 3,
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
    top: 20,
    left: 276,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    left: '50%',
    height: 105
  },
  vectorIcon: {
    height: 28,
    width: 26
  },
  vectorWrapper: {
    height: 36,
    backgroundColor: Color.secundario,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm
  },
  frameChild: {
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden'
  },
  vectorIcon1: {
    left: 8,
    top: 4,
    height: 28,
    width: 24
  },
  vectorIcon2: {
    top: 4,
    height: 28
  },
  vectorIcon3: {
    top: 6,
    height: 24
  },
  rectangleParent: {
    height: 36,
    width: 40
  },
  vectorIcon4: {
    height: 18,
    width: 26
  },
  vectorContainer: {
    backgroundColor: Color.colorOldlace
  },
  vectorIcon5: {
    height: '48.33%',
    width: '43.25%',
    top: '26.11%',
    right: '29%',
    bottom: '25.56%',
    left: '27.75%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  frameGroup: {
    backgroundColor: Color.colorHoneydew_100,
    height: 49,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_xl,
    borderRadius: Border.br_8xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 428,
    left: 0,
    top: 64,
    position: 'absolute'
  },
  miDiarioEntradaTextoPl: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    width: '100%',
    height: 40,

    overflow: 'hidden',
    flex: 1
    // top: 100
  }
})

export default NavBarDiario
