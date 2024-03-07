import React from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import { setPanel } from '../redux/slices/panel.slices'

const MenuPrincipal = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <ScrollView
      style={styles.menPrincipal}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        style={styles.menPrincipalChild}
        locations={[0, 1]}
        colors={['#e2e57a', '#7fc08b']}
      >
        <View style={styles.frameParent}>
          <View>
            <View style={styles.parentFlexBox}>
              <Image
                style={[
                  styles.icoutlineSpaceDashboardIcon,
                  styles.frameChildLayout
                ]}
                contentFit="cover"
                source={require('../assets/icoutlinespacedashboard.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('Muro')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Muro</Text>
              </Pressable>
            </View>

            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.parentFlexBox
              ]}
            >
              <Image
                style={styles.frameChildLayout}
                contentFit="cover"
                source={require('../assets/iconlylightoutlinebookmark1.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('MENSAJERA')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Mensajeria</Text>
              </Pressable>
            </View>

            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.parentFlexBox
              ]}
            >
              <Image
                style={[
                  styles.icoutlineSpaceDashboardIcon,
                  styles.frameChildLayout
                ]}
                contentFit="cover"
                source={require('../assets/document4.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('MIDIARIOPANTALLAPERSONAL')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Diario Familiar</Text>
              </Pressable>
            </View>

            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.parentFlexBox
              ]}
            >
              <Image
                style={styles.frameChildLayout}
                contentFit="cover"
                source={require('../assets/iconlylightoutlinecalendar2.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('CALENDARIO')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Calendario</Text>
              </Pressable>
            </View>

            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/line-74.png')}
            />
          </View>
          <View style={styles.frameParent1}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.frameChildLayout}
                contentFit="cover"
                source={require('../assets/group-1171276689.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('Organizador')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Crear</Text>
              </Pressable>
            </View>

            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/line-74.png')}
            />
          </View>
          <View style={styles.frameParent1}>
            <View>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.iconlylightOutlinebookmark}
                  contentFit="cover"
                  source={require('../assets/search1.png')}
                />
                <Pressable
                  style={styles.muro}
                  onPress={() => {
                    navigation.navigate('Busqueda')
                    dispatch(setPanel(false))
                  }}
                >
                  <Text style={styles.muro1Typo}>Búsqueda</Text>
                </Pressable>
              </View>

              <View
                style={[
                  styles.iconlylightOutlinecalendarParent,
                  styles.parentFlexBox
                ]}
              >
                <Image
                  style={[
                    styles.icoutlineSpaceDashboardIcon,
                    styles.frameChildLayout
                  ]}
                  contentFit="cover"
                  source={require('../assets/iconlylightoutlinebookmark.png')}
                />
                <Pressable
                  style={styles.muro}
                  onPress={() => {
                    navigation.navigate('Novedades')
                    dispatch(setPanel(false))
                  }}
                >
                  <Text style={styles.muro1Typo}>Novedades</Text>
                </Pressable>
              </View>
            </View>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/line-741.png')}
            />
          </View>
          <View style={styles.frameParent1}>
            <View style={styles.parentFlexBox}>
              <Image
                style={[
                  styles.icoutlineSpaceDashboardIcon,
                  styles.frameChildLayout
                ]}
                contentFit="cover"
                source={require('../assets/profile.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('Perfil')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Perfil</Text>
              </Pressable>
            </View>
            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.parentFlexBox
              ]}
            >
              <Image
                style={[
                  styles.icoutlineSpaceDashboardIcon,
                  styles.frameChildLayout
                ]}
                contentFit="cover"
                source={require('../assets/setting.png')}
              />
              <Pressable
                style={styles.muro}
                onPress={() => {
                  navigation.navigate('PerfilAjustes')
                  dispatch(setPanel(false))
                }}
              >
                <Text style={styles.muro1Typo}>Ajustes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 15,
    width: 15
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  muro1Typo: {
    textAlign: 'left',
    color: Color.white,
    fontFamily: FontFamily.lato,
    fontWeight: '900',
    fontSize: FontSize.size_sm
  },
  menPrincipalChild: {
    borderTopRightRadius: Border.br_3xs,
    width: '100%',
    backgroundColor: Color.linearBoton,
    height: '100%',
    zIndex: 0,
    paddingBottom: 50
  },
  muro: {
    marginLeft: 12
  },
  iconlylightOutlinecalendarParent: {
    marginTop: 20
  },
  frameItem: {
    width: '85%',
    marginTop: 20,
    height: 2
  },
  frameParent1: {
    marginTop: 20
  },
  iconlylightOutlinebookmark: {
    height: 18,
    width: 15
  },
  frameParent: {
    top: 20,
    left: 20,
    width: '100%',
    height: '100%',
    zIndex: 100
  },
  menPrincipal: {
    maxWidth: '70%',
    height: '100%'
  }
})

export default MenuPrincipal
