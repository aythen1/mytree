import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, Border, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setPanel } from '../redux/slices/panel.slices'
import MiLegado from './MiLegado'
import MisAlbumes from './MisAlbumes'
import PERFILMIINFO from './PERFILMIINFO'

const Perfil = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)

  const [selectedComponent, setSelectedComponent] = useState('MiLegado')

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'MiLegado':
        return <MiLegado />
      case 'MisAlbumes':
        return <MisAlbumes />
      case 'PERFILMIINFO':
        return <PERFILMIINFO />
      default:
        return null
    }
  }

  return (
    <ScrollView style={styles.perfil}>
      <View style={styles.perfilChild} />
      <Pressable
        onPress={() => dispatch(setPanel(!showPanel))}
        style={styles.iconPosition}
      >
        <Image
          style={styles.ionmenuIcon}
          contentFit="cover"
          source={require('../assets/ionmenu.png')}
        />
      </Pressable>
      <Image
        style={[styles.image6Icon, styles.iconPosition]}
        contentFit="cover"
        source={require('../assets/image-6.png')}
      />
      <View style={[styles.vectorParent, styles.buttonFlexBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require('../assets/vector9.png')}
        />
        <Image
          style={[styles.iconlylightOutlineplus, styles.vectorIconLayout]}
          contentFit="cover"
          source={require('../assets/iconlylightoutlineplus1.png')}
        />
        <Pressable
          style={[styles.iconlylightOutlineplus, styles.vectorIconLayout]}
          onPress={() => navigation.navigate('PERFILAJUSTES')}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/iconlylightoutlinesetting1.png')}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.perfilItem, styles.tabsBarPosition]}
        contentFit="cover"
        source={require('../assets/group-1171276683.png')}
      />
      <Image
        style={[styles.perfilInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require('../assets/group-11712766771.png')}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require('../assets/group-11712766771.png')}
      />
      <Text style={styles.brunoPham}>Bruno Pham</Text>
      <Text style={[styles.daNangVietnam, styles.miInfoTypo]}>
        Da Nang, Vietnam
      </Text>
      <View style={[styles.tabsBar, styles.tabsBarPosition]}>
        <Pressable
          style={[styles.miWrapper, styles.tabsFlexBox]}
          onPress={() => setSelectedComponent('MiLegado')}
        >
          <Text style={[styles.miLegado, styles.signInTypo]}>Mi Legado</Text>
        </Pressable>
        <Pressable
          style={[styles.tabs, styles.tabsFlexBox]}
          onPress={() => setSelectedComponent('MisAlbumes')}
        >
          <Text style={[styles.misLbumes, styles.miInfoLayout]}>
            Mis álbumes
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tabs1, styles.tabsFlexBox]}
          onPress={() => setSelectedComponent('PERFILMIINFO')}
        >
          <Text style={[styles.miInfo, styles.miInfoLayout]}>Mi info</Text>
        </Pressable>
        <View style={styles.tabsBarChild} />
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={['#e2e57a', '#7fc08b']}
      >
        <Text style={[styles.signIn, styles.signInTypo]}>Salud</Text>
      </LinearGradient>

      {renderSelectedComponent()}
    </ScrollView>
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
  // groupParentFlexBox: {
  //   justifyContent: 'space-between',
  //   flexDirection: 'row'
  // },
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
  miWrapper: {
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
  perfil: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Color.white
  }
})

export default Perfil
