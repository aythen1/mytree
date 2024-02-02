import * as React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Border, Padding } from '../GlobalStyles'

const PERFILCREARIDINFANTEANCE = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.perfilCrearIdInfanteance, styles.iconLayout]}>
      <View
        style={[
          styles.perfilCrearIdInfanteanceChild,
          styles.navigationIconLayout
        ]}
      />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require('../assets/image-6.png')}
      />
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <Pressable
          style={styles.backLayout}
          onPress={() => navigation.navigate('MUROINFORMACIN')}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/back.png')}
          />
        </Pressable>
        <Text style={[styles.crearId, styles.aadir1Typo]}>Crear ID</Text>
      </View>
      <View style={[styles.vectorParent, styles.parentFlexBox]}>
        <Image
          style={styles.backLayout}
          contentFit="cover"
          source={require('../assets/vector7.png')}
        />
        <View style={[styles.iconly, styles.backLayout]}>
          <Image
            style={styles.notificationIcon}
            contentFit="cover"
            source={require('../assets/notification4.png')}
          />
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require('../assets/ellipse-2263.png')}
            />
            <Text style={styles.text}>1</Text>
          </View>
        </View>
        <Image
          style={[styles.iconly, styles.backLayout]}
          contentFit="cover"
          source={require('../assets/iconlylightoutlinesetting.png')}
        />
      </View>
      <View style={styles.div2CardsParent}>
        <View style={styles.div2ShadowBox}>
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.content}>
                <View
                  style={[
                    styles.idInfanteParent,
                    styles.idInfanteParentFlexBox
                  ]}
                >
                  <Text style={[styles.idInfante, styles.creaATuTypo]}>
                    ID infante
                  </Text>
                  <Pressable
                    onPress={() => navigation.navigate('AADIRAADIRINFANTE')}
                  >
                    <Text style={[styles.aadir1, styles.aadir1Typo]}>
                      Añadir
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={[styles.divider, styles.dividerSpaceBlock]} />
              <View style={styles.dividerSpaceBlock}>
                <View
                  style={[
                    styles.creaATuHijoYEmpiezaAAaWrapper,
                    styles.idInfanteParentFlexBox
                  ]}
                >
                  <Text style={[styles.creaATu, styles.creaATuTypo]}>
                    Crea a tu hijo y empieza a añadir todos sus recuerdos
                    organizados, para que en un futuro le puedas regalar su
                    libro de vida para que lo siga creando y dejando su legado
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.div2Cards1, styles.div2ShadowBox]}>
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.content}>
                <View
                  style={[
                    styles.idInfanteParent,
                    styles.idInfanteParentFlexBox
                  ]}
                >
                  <Text style={[styles.idInfante, styles.creaATuTypo]}>
                    ID ancestro
                  </Text>
                  <Pressable
                    onPress={() => navigation.navigate('AADIRAADIRANCESTRO')}
                  >
                    <Text style={[styles.aadir1, styles.aadir1Typo]}>
                      Añadir
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={[styles.divider, styles.dividerSpaceBlock]} />
              <View style={styles.dividerSpaceBlock}>
                <View
                  style={[
                    styles.creaATuHijoYEmpiezaAAaWrapper,
                    styles.idInfanteParentFlexBox
                  ]}
                >
                  <Text style={[styles.creaATu, styles.creaATuTypo]}>
                    Crea a tus ancestros que ya no están con nosotros, guarda
                    todos sus recuerdos y etiquétalo en todas las fotos y
                    vídeos, y deja un recuerdo para siempre serán recordados
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.navigationIcon, styles.navigationIconLayout]}
        contentFit="cover"
        source={require('../assets/navigation21.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    width: '100%',
    overflow: 'hidden'
  },
  navigationIconLayout: {
    width: 428,
    position: 'absolute'
  },
  parentFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  aadir1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  backLayout: {
    height: 24,
    width: 24
  },
  groupChildLayout: {
    height: 16,
    width: 16,
    position: 'absolute'
  },
  idInfanteParentFlexBox: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  creaATuTypo: {
    color: Color.grisTextosWeb,
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  dividerSpaceBlock: {
    marginTop: 16,
    alignSelf: 'stretch'
  },
  div2ShadowBox: {
    shadowColor: 'rgba(221, 219, 246, 0.25)',
    width: 388,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 5
    }
  },
  perfilCrearIdInfanteanceChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    height: 126,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 5
    },
    width: 428,
    left: 0,
    top: 1,
    backgroundColor: Color.white
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    overflow: 'hidden'
  },
  crearId: {
    color: Color.negro,
    marginLeft: 20,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.lato
  },
  backParent: {
    top: 78,
    left: 20
  },
  notificationIcon: {
    height: '83.33%',
    width: '70.83%',
    top: '8.33%',
    right: '14.58%',
    bottom: '8.33%',
    left: '14.58%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupChild: {
    top: 0,
    left: 0,
    width: 16
  },
  text: {
    left: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    fontWeight: '800',
    fontFamily: FontFamily.nunitoSans,
    color: Color.white,
    textAlign: 'right',
    top: 1,
    position: 'absolute'
  },
  ellipseParent: {
    top: -6,
    left: 13
  },
  iconly: {
    marginLeft: 20
  },
  vectorParent: {
    top: 21,
    left: 296
  },
  idInfante: {
    fontWeight: '700',
    color: Color.grisTextosWeb,
    fontSize: FontSize.size_5xl
  },
  aadir1: {
    fontSize: FontSize.size_lg,
    color: Color.primario2
  },
  idInfanteParent: {
    alignItems: 'flex-end'
  },
  content: {
    alignSelf: 'stretch'
  },
  divider: {
    borderStyle: 'solid',
    borderColor: Color.secundario,
    borderTopWidth: 1,
    height: 1
  },
  creaATu: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    width: 348
  },
  creaATuHijoYEmpiezaAAaWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    borderRadius: Border.br_3xs,
    padding: Padding.p_xl,
    width: 388,
    backgroundColor: Color.white
  },
  div2Cards1: {
    marginTop: 20
  },
  div2CardsParent: {
    top: 147,
    height: 412,
    width: 388,
    left: 20,
    position: 'absolute'
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    left: '50%',
    height: 105
  },
  perfilCrearIdInfanteance: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: 'hidden',
    backgroundColor: Color.white
  }
})

export default PERFILCREARIDINFANTEANCE
