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
import SOLOYO from './SOLOYO'

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
        return <PERFILMIINFO setSelectedComponent={setSelectedComponent} />
      case 'SOLOYO':
        return <SOLOYO />
      default:
        return null
    }
  }

  return (
    <ScrollView style={styles.perfil}>
      <View style={[styles.vectorParent, styles.buttonFlexBox]}>
        <Image
          style={[styles.image6Icon, styles.ionmenu]}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
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

      <Pressable
        onPress={() => dispatch(setPanel(!showPanel))}
        style={styles.menuPosition}
      >
        <Image
          style={styles.ionmenuIcon}
          contentFit="cover"
          source={require('../assets/ionmenu.png')}
        />
      </Pressable>

      <View style={styles.imageContainer}>
        <Image
          style={styles.groupIconLayout}
          contentFit="cover"
          source={require('../assets/group-11712766771.png')}
        />
        <Image
          style={styles.perfilItem}
          contentFit="cover"
          source={require('../assets/group-1171276683.png')}
        />
        <Image
          style={styles.groupIconLayout}
          contentFit="cover"
          source={require('../assets/group-11712766771.png')}
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.brunoPham}>Bruno Pham</Text>
        <View style={styles.placeContainer}>
          <Text style={[styles.daNangVietnam, styles.miInfoTypo]}>
            Da Nang, Vietnam
          </Text>
          <LinearGradient
            style={styles.button}
            locations={[0, 1]}
            colors={['#e2e57a', '#7fc08b']}
          >
            <Text style={[styles.signIn, styles.signInTypo]}>Salud</Text>
          </LinearGradient>
        </View>
      </View>

      <View style={styles.tabsBar}>
        <Pressable
          style={[
            styles.tabs,
            (selectedComponent === 'MiLegado' ||
              selectedComponent === 'SOLOYO') &&
              styles.miWrapper
          ]}
          onPress={() => setSelectedComponent('MiLegado')}
        >
          <Text
            style={
              (styles.miInfo,
              selectedComponent === 'MiLegado' && styles.selectedText)
            }
          >
            Mi Legado
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabs,
            selectedComponent === 'MisAlbumes' && styles.miWrapper
          ]}
          onPress={() => setSelectedComponent('MisAlbumes')}
        >
          <Text
            style={
              (styles.miInfo,
              selectedComponent === 'MisAlbumes' && styles.selectedText)
            }
          >
            Mis álbumes
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabs,
            selectedComponent === 'PERFILMIINFO' && styles.miWrapper
          ]}
          onPress={() => setSelectedComponent('PERFILMIINFO')}
        >
          <Text
            style={
              (styles.miInfo,
              selectedComponent === 'PERFILMIINFO' && styles.selectedText)
            }
          >
            Mi información
          </Text>
        </Pressable>
        {/* <View style={styles.tabsBarChild} /> */}
      </View>

      {renderSelectedComponent()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  iconPosition: {
    left: '1%',
    top: '2%'
  },
  ionmenuIcon: {
    width: 26,
    height: 20
  },
  ionmenu: {
    marginRight: '42%'
  },
  menuPosition: {
    left: '2.5%',
    top: '3%'
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    top: '12%',
    left: '1.8%',
    gap: 50
  },
  buttonFlexBox: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center'
  },
  vectorIconLayout: {
    width: 24,
    height: 24
  },
  groupIconLayout: {
    height: 50,
    width: 50
  },
  miInfoTypo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },

  signInTypo: {
    color: Color.white,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  image6Icon: {
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
    right: 10,
    top: '5%'
  },
  perfilItem: {
    height: 130,
    width: 130
  },
  nameContainer: {
    flex: 1,
    top: '8%'
  },
  brunoPham: {
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '4%',
    gap: 20,
    left: '60%'
  },
  daNangVietnam: {
    fontWeight: '300',
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24
  },
  miLegado: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontWeight: '700',
    color: Color.white
  },
  miWrapper: {
    backgroundColor: Color.secundario,
    width: '37%',
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabs: {
    width: '37%',
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  misLbumes: {
    width: 120,
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  miInfo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  selectedText: {
    color: Color.white,
    fontWeight: '700',
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  tabsBar: {
    width: '90%',
    backgroundColor: Color.white,
    flexDirection: 'row',
    top: '25%'
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18
  },
  button: {
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center',
    left: '100%',
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
