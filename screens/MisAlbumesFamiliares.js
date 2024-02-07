import React from 'react'
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'

const MisAlbumesFamiliares = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.misAlbumesFamiliares}>
      <View style={styles.frameParent}>
        <View style={styles.parentLayout}>
          <Text style={[styles.lbumFamiliar2023, styles.nuestraTypo]}>
            Álbum familiar 2023
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require('../assets/line-782.png')}
          />
          <Image
            style={[styles.iconlyboldedit, styles.iconlyboldeditLayout]}
            contentFit="cover"
            source={require('../assets/iconlyboldedit.png')}
          />
          <View style={[styles.maskGroupParent, styles.maskGroupFlexBox]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
          </View>
        </View>
        <View style={[styles.nuestraInfanciaParent, styles.parentLayout]}>
          <Text style={[styles.nuestraInfancia, styles.nuestraTypo]}>
            Nuestra infancia
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require('../assets/line-782.png')}
          />
          <Image
            style={[styles.iconlyboldedit, styles.iconlyboldeditLayout]}
            contentFit="cover"
            source={require('../assets/iconlyboldedit.png')}
          />
          <View style={[styles.maskGroupGroup, styles.maskGroupFlexBox]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
          </View>
        </View>
        <View style={styles.nuestraEvolucinParent}>
          <Text style={[styles.nuestraEvolucin, styles.nuestraTypo]}>
            Nuestra evolución
          </Text>
          <Text style={[styles.hace10Aos, styles.hace10AosTypo]}>
            Hace 10 años...
          </Text>
          <Text style={[styles.actualidad, styles.hace10AosTypo]}>
            Actualidad
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require('../assets/line-782.png')}
          />
          <Image
            style={[styles.iconlyboldedit2, styles.iconlyboldeditLayout]}
            contentFit="cover"
            source={require('../assets/iconlyboldedit.png')}
          />
          <View style={[styles.maskGroupContainer, styles.frameViewPosition]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
          </View>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require('../assets/mask-group14.png')}
            />
          </View>
          <View style={[styles.frameChild1, styles.maskGroupFlexBox]} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  nuestraTypo: {
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  frameChildPosition: {
    maxHeight: '100%',
    left: '50%'
  },
  iconlyboldeditLayout: {
    maxWidth: '100%',
    top: '0%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  maskGroupFlexBox: {
    flexDirection: 'row'
  },
  maskGroupLayout: {
    height: 140,
    width: 132
  },
  parentLayout: {
    height: 184,
    width: 406
  },
  hace10AosTypo: {
    color: Color.gris,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    left: 1,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontWeight: '500'
  },
  frameViewPosition: {
    left: 1,
    flexDirection: 'row'
  },
  tabsBarLayout: {
    width: 428
  },
  iconPosition: {
    left: 20
  },
  buttonFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  vectorIconLayout: {
    height: 24,
    width: 24
  },
  brunoPhamTypo: {
    fontWeight: '700'
  },
  miInfoTypo: {
    letterSpacing: 0,
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
    top: 0,
    alignItems: 'center'
  },
  miInfoLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  signInTypo: {
    color: Color.white,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabsPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.backgroundPrimaryBackground,
    borderStyle: 'solid',
    top: 39
  },
  groupIconLayout: {
    height: 50,
    width: 50,
    top: 139
  },
  lbumFamiliar2023: {
    left: 114,
    fontWeight: '500',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  frameChild: {
    marginLeft: -203,
    top: 32,
    width: 406,
    maxHeight: '100%'
  },
  iconlyboldedit: {
    height: '10.87%',
    width: '4.93%',
    right: '0.74%',
    bottom: '89.13%',
    left: '94.33%'
  },
  maskGroupIcon1: {
    marginLeft: 5
  },
  maskGroupParent: {
    left: -3,
    top: 44
  },
  nuestraInfancia: {
    left: 131,
    fontWeight: '500',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  maskGroupGroup: {
    left: 0,
    top: 44
  },
  nuestraInfanciaParent: {
    marginTop: 20
  },
  nuestraEvolucin: {
    left: 124,
    fontWeight: '500',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  hace10Aos: {
    top: 44
  },
  actualidad: {
    top: 223
  },
  iconlyboldedit2: {
    height: '5.13%',
    width: '4.9%',
    right: '0.25%',
    bottom: '94.87%',
    left: '94.85%'
  },
  maskGroupContainer: {
    top: 71
  },
  frameView: {
    top: 257
  },
  frameChild1: {
    top: 398,
    left: 2,
    backgroundColor: Color.white
  },
  nuestraEvolucinParent: {
    width: 408,
    height: 390,
    marginTop: 20
  },
  frameParent: {
    top: 400,
    left: 10,
    height: 546,
    alignItems: 'center'
  },
  misAlbumesFamiliaresChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 380,
    left: 0,
    top: 0,
    width: 428,
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
  iconlylightOutlineplus: {
    marginLeft: 20
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  vectorParent: {
    top: 20,
    left: 296
  },
  brunoPham: {
    top: 244,
    left: 159,
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontWeight: '700'
  },
  daNangVietnam: {
    top: 274,
    left: 153,
    fontWeight: '300',
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24
  },
  miLegado: {
    width: 110,
    letterSpacing: 0,
    color: Color.gris,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs: {
    width: 142,
    left: 0
  },
  misLbumes: {
    marginTop: -9.5,
    marginLeft: -44,
    top: '50%',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontWeight: '700',
    left: '50%'
  },
  misLbumesWrapper: {
    left: 142,
    backgroundColor: Color.secundario,
    height: 39,
    width: 142,
    borderRadius: Border.br_7xs,
    top: 0,
    overflow: 'hidden'
  },
  miInfo: {
    letterSpacing: 0,
    color: Color.gris,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs1: {
    left: 284,
    width: 144
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
    marginLeft: -214,
    top: 320,
    height: 40,
    left: '50%',
    backgroundColor: Color.white
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18
  },
  button: {
    top: 272,
    left: 328,
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton
  },
  misAlbumesFamiliaresItem: {
    height: '12.96%',
    marginLeft: -60,
    top: '11.23%',
    bottom: '75.81%',
    width: 120
  },
  misAlbumesFamiliaresInner: {
    left: 40
  },
  groupIcon: {
    left: 338
  },
  navigationIcon: {
    top: 821,
    height: 105,
    left: 0
  },
  misAlbumesFamiliares: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.white
  }
})

export default MisAlbumesFamiliares
