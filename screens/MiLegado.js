import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Image } from 'expo-image'
// import { LinearGradient } from 'expo-linear-gradient'
// import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Padding, Border } from '../GlobalStyles'

const Perfil1 = () => {
  // const navigation = useNavigation()

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View
          style={[styles.miBiografaActualParent, styles.groupParentFlexBox]}
        >
          <Text style={styles.miBiografaActual}>Mi biografía actual</Text>
          <View style={[styles.vectorGroup, styles.groupParentFlexBox]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require('../assets/vector53.png')}
            />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require('../assets/iconlyboldedit.png')}
            />
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/mask-group18.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/mask-group19.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/mask-group20.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/mask-group21.png')}
          />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View
          style={[styles.miBiografaActualParent, styles.groupParentFlexBox]}
        >
          <Text style={styles.miBiografaActual}>Mis recuerdos</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require('../assets/iconlyboldedit.png')}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/farita3.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/marie.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/farita4.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/claire.png')}
          />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View
          style={[styles.miBiografaActualParent, styles.groupParentFlexBox]}
        >
          <Text style={styles.miBiografaActual}>Mis etapas</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require('../assets/iconlyboldedit.png')}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/farita3.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/marie.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/farita4.png')}
          />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require('../assets/claire.png')}
          />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconPosition: {
    left: 20,
    position: 'absolute'
  },
  buttonFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  vectorIconLayout: {
    width: 24,
    height: 24
  },
  tabsBarPosition: {
    left: '50%',
    position: 'absolute'
  },
  groupIconLayout: {
    height: 50,
    width: 50,
    top: 139,
    position: 'absolute'
  },
  miInfoTypo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: 0,
    position: 'absolute'
  },
  signInTypo: {
    color: Color.white,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  miInfoLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  groupParentFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  perfilChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 379,
    width: '100%',
    left: 0,
    top: 0,
    backgroundColor: Color.white
  },
  ionmenuIcon: {
    top: 64,
    width: 26,
    height: 20,
    overflow: 'hidden'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  vectorIcon: {
    height: 24
  },
  iconlylightOutlineplus: {
    marginLeft: 20,
    height: 24
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  vectorParent: {
    top: 20,
    left: '65%'
  },
  perfilItem: {
    height: '32%',
    marginLeft: -60,
    top: '27%',
    bottom: '75.81%',
    width: 122,
    maxHeight: '100%'
  },
  perfilInner: {
    left: 30
  },
  groupIcon: {
    left: 280
  },
  brunoPham: {
    top: 244,
    left: 125,
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    position: 'absolute'
  },
  daNangVietnam: {
    top: 274,
    left: 119,
    fontWeight: '300',
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    position: 'absolute'
  },
  miLegado: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontWeight: '700',
    color: Color.white
  },
  miLegadoWrapper: {
    backgroundColor: Color.secundario,
    width: 120,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    left: 0,
    overflow: 'hidden'
  },
  misLbumes: {
    width: 120,
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs: {
    left: 120,
    width: 142,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs
  },
  miInfo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs1: {
    left: 230,
    width: 144,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs
  },
  tabsBarChild: {
    top: 39,
    borderStyle: 'solid',
    borderColor: Color.backgroundPrimaryBackground,
    borderTopWidth: 1,
    width: 400,
    height: 1,
    position: 'absolute'
  },
  tabsBar: {
    marginLeft: -180,
    top: 318,
    height: 40,
    width: '90%',
    backgroundColor: Color.white
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18
  },
  button: {
    top: 270,
    left: '75%',
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton
  },
  miBiografaActual: {
    fontWeight: '500',
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  vectorIcon1: {
    width: 20,
    height: 20
  },
  vectorGroup: {
    width: 59,
    height: 24,
    alignItems: 'center'
  },
  miBiografaActualParent: {
    width: 388
  },
  frameChild: {
    marginTop: 20,
    width: 388,
    maxHeight: '100%'
  },
  maskGroupIcon: {
    width: 70,
    height: 70
  },
  vectorIcon2: {
    width: 30,
    height: 30
  },
  maskGroupParent: {
    width: 387,
    marginTop: 20,
    alignItems: 'center'
  },
  frameGroup: {
    width: 388,
    alignItems: 'center'
  },
  frameContainer: {
    marginTop: 20,
    width: 388,
    alignItems: 'center'
  },
  frameParent: {
    top: 399,
    left: 19,
    position: 'absolute'
  },
  navigationIcon: {
    bottom: 0,
    height: 105,
    width: 428,
    left: 0,
    position: 'absolute'
  },
  perfil: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Color.white
  }
})

export default Perfil1
