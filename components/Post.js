import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Border, Padding, FontFamily, FontSize, Color } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const Post = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.rectangleParent}>
      <LinearGradient
        style={styles.frameChild}
        locations={[0.77, 1]}
        colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
      >
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: Color.colorLavender_100,
            height: 60,
            width: 60,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: 15,
            left: 15
          }}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Image
            // style={[styles.vectorIcon, styles.vectorIconLayout]}
            style={{ width: 30, height: 30 }}
            contentFit="cover"
            source={require('../assets/vector39.png')}
          />
        </Pressable>

        <View style={{ padding: 15, top: 340 }}>
          <Text style={styles.camila}>Camila</Text>
          <Text style={styles.yendoALa}>
            Yendo a la casa de la tía Elisa! Los esperamos allá, familia!
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.frameChild}
        locations={[0.77, 1]}
        colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
      >
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require('../assets/vector39.png')}
        />

        <View style={{ padding: 15, top: 300 }}>
          <Text style={styles.camila}>Camila</Text>
          <Text style={styles.yendoALa}>
            Yendo a la casa de la tía Elisa! Los esperamos allá, familia!
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.frameChild}
        locations={[0.77, 1]}
        colors={['rgba(183, 228, 192, 0.8)', 'rgba(41, 42, 43, 0.8)']}
      >
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require('../assets/vector39.png')}
        />

        <View style={{ padding: 15, top: 300 }}>
          <Text style={styles.camila}>Camila</Text>
          <Text style={styles.yendoALa}>
            Yendo a la casa de la tía Elisa! Los esperamos allá, familia!
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_xl,
    height: '100%'
  },
  nameState: {
    left: 25,
    position: 'absolute'
  },
  you1Typo: {
    color: Color.negro,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  aatarIcon: {
    height: 70,
    top: 0,
    width: 70
  },
  aatarIconPosition: {
    width: 70
  },
  youLayout: {
    height: 90,
    width: 70,
    marginLeft: 10,
    alignItems: 'center'
  },
  vectorIconLayout: {
    height: 45,
    width: 45,
    left: 60,
    top: 50
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 194,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  popularTypo: {
    width: 110,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base
  },
  itemLayout: {
    height: 53,
    width: 53,
    borderRadius: Border.br_4xl
    // position: 'absolute'
  },
  vectorIconPosition: {
    left: '50%',
    top: '50%'
  },
  buttonPosition: {
    top: 36
    // position: 'absolute'
  },
  messageIconLayout: {
    width: 24,
    height: 24
  },
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
    // position: 'absolute'
  },
  iconlyboldchatLayout: {
    height: 40,
    width: 40
  },
  frameChild: {
    backgroundColor: Color.mytreeClarito,
    left: 0,
    top: 15,
    height: 500,
    marginBottom: 30
    // position: 'relative'
  },
  vectorIcon: {
    marginTop: -29,
    marginLeft: -40,
    width: 78,
    left: '50%',
    top: '50%'
  },
  rectangleParent: {
    height: '100%',
    top: 15,
    marginBottom: 120
  },
  muroInformacinChild: {
    backgroundColor: Color.linearBoton,
    // left: 20,
    top: 139,
    borderRadius: Border.br_xl
  },
  popular: {
    fontWeight: '700'
  },
  popularWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.backgroundPrimaryBackground,
    overflow: 'hidden'
  },
  trending: {
    fontWeight: '300',
    color: Color.textPlaceholder
  },
  tabs: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA
  },
  instanceParent: {
    top: 80,
    flexDirection: 'row',
    left: 20
    // position: 'absolute'
  },
  groupChild: {
    top: -2,
    left: -2,
    borderRadius: Border.br_6xl,
    borderStyle: 'solid',
    borderColor: '#7f77fe',
    borderWidth: 2,
    width: 63
  },
  groupItem: {
    top: 3,
    left: 3
  },
  frameItem: {
    backgroundColor: '#dedcee',
    left: 0,
    top: 0
  },
  vectorIcon1: {
    // marginTop: -7.5,
    // marginLeft: -10.5,
    // width: 20,
    // height: 15
    // position: 'absolute'
    backgroundColor: 'red'
  },
  rectangleGroup: {
    top: 159,
    width: 59,
    height: 59,
    left: 40
    // position: 'absolute'
  },
  messageIcon: {
    height: 24
  },
  iconlylightOutlineplus: {
    marginLeft: 30,
    height: 24
  },
  messageParent: {
    left: 276,
    justifyContent: 'center',
    alignItems: 'center',
    top: 36,
    flexDirection: 'row'
  },

  camila: {
    // top: 764,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    // textAlign: 'left',
    // left: 40,
    fontWeight: '700'
  },
  yendoALa: {
    marginTop: 20,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    color: Color.white
  },
  iconlyboldsend: {
    marginTop: 39
  },
  iconlyboldchatParent: {
    top: 595,
    left: 348
    // position: 'absolute'
  },
  navigationIcon: {
    top: 857,
    width: 428,
    height: 105,
    left: 0
    // position: 'absolute'
  },
  text: {
    marginTop: -8,
    marginLeft: -14,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: '500',
    textAlign: 'left',
    letterSpacing: 0,
    left: '50%',
    top: '50%'
  },
  button: {
    borderRadius: Border.br_7xs,
    width: 62,
    height: 24,
    backgroundColor: Color.mytreeClarito,
    left: 20
  },
  muroInformacin: {
    borderRadius: Border.br_31xl,
    backgroundColor: 'red',
    top: 150,
    flex: 1,
    width: '100%',
    height: 964,
    overflow: 'hidden'
  }
})

export default Post
