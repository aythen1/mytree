import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Padding, Border, FontSize, FontFamily, Color } from '../GlobalStyles'
import BusquedaRetos from './BusquedaRetos'
import BusquedaContactos from './BusquedaContactos'
import BusquedaPublicaciones from './BusquedaPublicaciones'
import BusquedaDiarios from './BusquedaDiarios'

const Busqueda = () => {
  const navigation = useNavigation()

  const [selectedComponent, setSelectedComponent] = useState('BusquedaRetos')

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'BusquedaRetos':
        return <BusquedaRetos />
      case 'BusquedaContactos':
        return <BusquedaContactos />
      case 'BusquedaPublicaciones':
        return <BusquedaPublicaciones />
      case 'BusquedaDiarios':
        return <BusquedaDiarios />
      default:
        return null
    }
  }

  return (
    <ScrollView style={styles.bsqueda}>
      <View style={styles.bsquedaContainer}>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <View style={styles.backParent}>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate('Muro')}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/back.png')}
            />
          </Pressable>
          <Text style={[styles.bsqueda1, styles.bsqueda1Typo]}>Búsqueda</Text>
        </View>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <Image
              style={styles.iconlylightOutlinesearch}
              contentFit="cover"
              source={require('../assets/iconlylightoutlinesearch4.png')}
            />
            <View style={styles.placeholderInput}>
              <Text style={styles.search}>{`Search `}</Text>
            </View>
          </View>
          <View style={styles.iconlylightsendCopyWrapper}>
            <Image
              style={styles.back}
              contentFit="cover"
              source={require('../assets/iconlylightsend-copy1.png')}
            />
          </View>
        </View>
        <ScrollView style={styles.tabsParent} horizontal={true}>
          <Pressable
            style={[styles.tabs, styles.tabsFlexBox]}
            onPress={() => setSelectedComponent('BusquedaRetos')}
          >
            <Text style={[styles.retos, styles.retosTypo]}>Retos</Text>
          </Pressable>
          <Pressable
            style={[styles.contactosWrapper, styles.tabsFlexBox]}
            onPress={() => setSelectedComponent('BusquedaContactos')}
          >
            <Text style={[styles.contactos, styles.retosTypo]}>Contactos</Text>
          </Pressable>
          <Pressable
            style={[styles.contactosWrapper, styles.tabsFlexBox]}
            onPress={() => setSelectedComponent('BusquedaPublicaciones')}
          >
            <Text style={[styles.contactos, styles.retosTypo]}>
              Publicaciones
            </Text>
          </Pressable>
          <Pressable
            style={[styles.contactosWrapper, styles.tabsFlexBox]}
            onPress={() => setSelectedComponent('BusquedaDiarios')}
          >
            <Text style={[styles.contactos, styles.retosTypo]}>Diarios</Text>
          </Pressable>
          <Pressable
            style={[styles.contactosWrapper, styles.tabsFlexBox]}
            onPress={() => navigation.navigate('BsquedaHashtags')}
          >
            <Text style={[styles.contactos, styles.retosTypo]}>Hashtags</Text>
          </Pressable>
          <Pressable
            style={[styles.contactosWrapper, styles.tabsFlexBox]}
            onPress={() => navigation.navigate('BsquedaEventos')}
          >
            <Text style={[styles.contactos, styles.retosTypo]}>Eventos</Text>
          </Pressable>
        </ScrollView>

        {renderSelectedComponent()}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bsqueda1Typo: {
    textAlign: 'left',
    fontWeight: '700'
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  retosTypo: {
    textAlign: 'center',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  // pressableBg: {
  //   backgroundColor: Color.linearBoton,
  //   padding: Padding.p_xl,
  //   borderRadius: Border.br_3xs,
  //   flexDirection: 'row'
  // },
  retoSemanalClr: {
    color: Color.white,
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  navigationIcon: {
    top: 821,
    height: 105
  },
  bsquedaChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  back: {
    width: 24,
    height: 24
  },
  bsqueda1: {
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    marginLeft: 20,
    fontFamily: FontFamily.lato,
    textAlign: 'left'
  },
  backParent: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '5%'
  },
  iconlylightOutlinesearch: {
    width: 20,
    height: 20
  },
  search: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontStyle: 'italic',
    fontWeight: '200',
    fontFamily: FontFamily.nunito,
    color: Color.textPlaceholder,
    letterSpacing: 0,
    textAlign: 'left'
  },
  placeholderInput: {
    marginLeft: 6,
    flexDirection: 'row',
    flex: 1
  },
  searchBar: {
    backgroundColor: Color.fAFAFA,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    width: '100%',
    flexDirection: 'row'
  },
  iconlylightsendCopyWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundGreyBackground,
    padding: Padding.p_7xs,
    marginLeft: 16,
    flexDirection: 'row'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    backgroundColor: Color.white,
    top: '15%'
  },
  retos: {
    color: Color.primario1,
    fontWeight: '700',
    textAlign: 'center'
  },
  tabs: {
    backgroundColor: Color.secundario,
    width: 114
  },
  contactos: {
    color: Color.grisGeneral
  },
  contactosWrapper: {
    width: 123,
    overflow: 'hidden'
  },
  tabsParent: {
    top: '20%',
    flexDirection: 'row'
  },
  // retoSemanal: {
  //   fontSize: FontSize.size_lg,
  //   lineHeight: 22,
  //   alignSelf: 'stretch',
  //   textAlign: 'left',
  //   fontWeight: '700'
  // },
  // retoSemanal08112023Wrapper: {
  //   alignSelf: 'stretch'
  // },
  // descubreCulEs: {
  //   fontWeight: '300',
  //   textAlign: 'justify',
  //   width: 348,
  //   marginTop: 10,
  //   lineHeight: 19,
  //   fontSize: FontSize.size_base,
  //   color: Color.white
  // },
  // frameParent: {
  //   flex: 1
  // },
  // notificationInner: {
  //   flexDirection: 'row',
  //   flex: 1
  // },
  // pressable: {
  //   width: '100%'
  // },
  // notification: {
  //   width: 388
  // },
  // notification1: {
  //   marginTop: 20,
  //   width: 388
  // },
  // notificationParent: {
  //   top: 258
  // },
  bsqueda: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.white,
    padding: Padding.p_xl
  },
  bsquedaContainer: {
    paddingBottom: 80
  }
})

export default Busqueda
