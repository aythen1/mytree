import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Pressable, Text, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import Humor from '../components/Humor'
// import ENTRADACREADA12 from "../components/ENTRADACREADA12";
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'

const MIDIARIOENTRADATEXTOPL3 = () => {
  const [groupIcon1Visible, setGroupIcon1Visible] = useState(false)
  const [frameContainerVisible, setFrameContainerVisible] = useState(false)
  const [frameContainer3Visible, setFrameContainer3Visible] = useState(false)
  const navigation = useNavigation()

  const openGroupIcon1 = useCallback(() => {
    setGroupIcon1Visible(true)
  }, [])

  const closeGroupIcon1 = useCallback(() => {
    setGroupIcon1Visible(false)
  }, [])

  const openFrameContainer = useCallback(() => {
    setFrameContainerVisible(true)
  }, [])

  const closeFrameContainer = useCallback(() => {
    setFrameContainerVisible(false)
  }, [])

  const openFrameContainer3 = useCallback(() => {
    setFrameContainer3Visible(true)
  }, [])

  const closeFrameContainer3 = useCallback(() => {
    setFrameContainer3Visible(false)
  }, [])

  return (
    <>
      <View style={styles.miDiarioEntradaTextoPl}>
        <LinearGradient
          style={[styles.miDiarioEntradaTextoPlChild, styles.diarioLayout]}
          locations={[0, 1]}
          colors={['rgba(221, 219, 246, 0.37)', 'rgba(245, 245, 247, 0)']}
        />
        <View style={styles.frameParent}>
          <View style={[styles.groupParent, styles.frameFlexBox]}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate('MIDIARIOPANTALLAPERSONAL')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/group-68462.png')}
              />
            </Pressable>
            <View style={styles.groupFlexBox}>
              <Pressable style={styles.wrapper} onPress={openGroupIcon1}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require('../assets/group2.png')}
                />
              </Pressable>
              <LinearGradient
                style={styles.container}
                locations={[0, 1]}
                colors={['#dee274', '#7ec18c']}
              >
                <Pressable
                  style={[styles.pressable, styles.groupFlexBox]}
                  onPress={openFrameContainer}
                >
                  <Text style={[styles.signIn, styles.ttTypo]}>Guardar</Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
          <Pressable
            style={[styles.parent, styles.parentSpaceBlock]}
            onPress={openFrameContainer3}
          >
            <Text style={[styles.text, styles.textTypo]}>07</Text>
            <Text style={[styles.jul2023, styles.jul2023Typo]}>jul. 2023</Text>
            <Image
              style={styles.iconlycurvedarrowDown2}
              contentFit="cover"
              source={require('../assets/iconlycurvedarrowdown2.png')}
            />
          </Pressable>
          <Text style={[styles.desafosSuperados, styles.textTypo]}>
            Desafíos Superados
          </Text>
          <Text
            style={[styles.hoyLoHe, styles.parentSpaceBlock]}
          >{`👥 Hoy lo he compartido con... 
😌 Hoy me siento/nos sentimos...

🏆 Desafío Superado
🤝 Cómo nos hemos apoyado...
📚 Lecciones aprendidas
💪 Mi momento de mayor fortaleza fue...`}</Text>
        </View>
        <View
          style={[styles.miDiarioEntradaTextoPlItem, styles.diarioLayout]}
        />
        <View style={[styles.iconlyboldimageParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconlyboldimage}
            contentFit="cover"
            source={require('../assets/iconlyboldimage1.png')}
          />
          <Image
            style={styles.iconlyboldcamera}
            contentFit="cover"
            source={require('../assets/iconlyboldcamera.png')}
          />
          <Image
            style={styles.iconlyboldvoice}
            contentFit="cover"
            source={require('../assets/iconlyboldvoice.png')}
          />
          <Image
            style={[styles.frameChild, styles.groupIconLayout]}
            contentFit="cover"
            source={require('../assets/group-1171276675.png')}
          />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require('../assets/group3.png')}
          />
          <Text style={[styles.tt, styles.ttTypo]}>Tt</Text>
          <Image
            style={styles.iconlyboldticketStar}
            contentFit="cover"
            source={require('../assets/iconlyboldticketstar.png')}
          />
        </View>
        <Image
          style={[styles.image6Icon, styles.image6IconPosition]}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <View
          style={[styles.iconlylightOutlinesearchParent, styles.groupFlexBox]}
        >
          <Image
            style={styles.wrapper}
            contentFit="cover"
            source={require('../assets/iconlylightoutlinesearch5.png')}
          />
          <Image
            style={styles.documentIcon}
            contentFit="cover"
            source={require('../assets/document12.png')}
          />
          <Image
            style={styles.iconlylightOutlinesetting}
            contentFit="cover"
            source={require('../assets/iconlylightoutlinesetting1.png')}
          />
        </View>
        <Image
          style={[styles.navigationIcon, styles.diarioLayout]}
          contentFit="cover"
          source={require('../assets/navigation23.png')}
        />
        <View style={styles.frameGroup}>
          <Pressable
            style={[styles.vectorWrapper, styles.vectorFlexBox]}
            onPress={() => navigation.navigate('MIDIARIOENTRADATEXTOPL5')}
          >
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector55.png')}
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('MIDIARIOENTRADATEXTOPL4')}
          >
            <View style={[styles.frameItem, styles.frameLayout]} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require('../assets/vector56.png')}
            />
          </Pressable>
          <View>
            <View style={[styles.frameInner, styles.frameLayout]} />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconPosition]}
              contentFit="cover"
              source={require('../assets/vector65.png')}
            />
          </View>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate('MIDIARIOENTRADATEXTOPL2')}
          >
            <View style={[styles.rectangleView, styles.frameLayout]} />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconPosition]}
              contentFit="cover"
              source={require('../assets/vector58.png')}
            />
          </Pressable>
          <Pressable
            style={styles.vectorFlexBox}
            onPress={() => navigation.navigate('MIDIARIOENTRADATEXTOPL1')}
          >
            <Image
              style={styles.vectorIcon4}
              contentFit="cover"
              source={require('../assets/vector59.png')}
            />
          </Pressable>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate('MIDIARIOENTRADATEXTOPL')}
          >
            <View style={[styles.rectangleView, styles.frameLayout]} />
            <Image
              style={[styles.vectorIcon5, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require('../assets/vector63.png')}
            />
          </Pressable>
        </View>
        <View style={[styles.privacidad, styles.groupFlexBox]}>
          <Image
            style={styles.iconlyboldunlock}
            contentFit="cover"
            source={require('../assets/iconlyboldunlock.png')}
          />
          <Text style={[styles.familiaYAmigos, styles.jul2023Typo]}>
            Familia y amigos
          </Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupIcon1Visible}>
        <View style={styles.groupIcon1Overlay}>
          <Pressable style={styles.groupIcon1Bg} onPress={closeGroupIcon1} />
          <Humor onClose={closeGroupIcon1} />
        </View>
      </Modal>

      {/* <Modal animationType="fade" transparent visible={frameContainerVisible}>
        <View style={styles.frameContainerOverlay}>
          <Pressable
            style={styles.frameContainerBg}
            onPress={closeFrameContainer}
          />
          <ENTRADACREADA12 onClose={closeFrameContainer} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={frameContainer3Visible}>
        <View style={styles.frameContainer3Overlay}>
          <Pressable
            style={styles.frameContainer3Bg}
            onPress={closeFrameContainer3}
          />
          <Fecha5 onClose={closeFrameContainer3} />
        </View>
      </Modal> */}
    </>
  )
}

const styles = StyleSheet.create({
  diarioLayout: {
    width: 428,
    position: 'absolute'
  },
  frameFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  groupFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  ttTypo: {
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  parentSpaceBlock: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  textTypo: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  jul2023Typo: {
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  groupIconLayout: {
    width: 30,
    marginLeft: 30
  },
  image6IconPosition: {
    left: 20,
    position: 'absolute'
  },
  vectorFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm,
    width: 40,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secundario,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  frameLayout: {
    zIndex: 0,
    height: 36,
    width: 40,
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
    height: 662,
    backgroundColor: Color.linearBoton,
    left: 0,
    width: 428,
    top: 64
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    height: 24,
    width: 24
  },
  groupIcon1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  groupIcon1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  signIn: {
    fontSize: FontSize.size_sm,
    lineHeight: 21
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton
  },
  container: {
    marginLeft: 20
  },
  groupParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 388
  },
  frameContainer3Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer3Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  text: {
    fontWeight: '700',
    color: Color.negro
  },
  jul2023: {
    marginLeft: 10,
    color: Color.negro
  },
  iconlycurvedarrowDown2: {
    width: 14,
    height: 7,
    marginLeft: 10
  },
  parent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  desafosSuperados: {
    color: Color.negro,
    marginTop: 20,
    alignSelf: 'stretch'
  },
  hoyLoHe: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignSelf: 'stretch'
  },
  frameParent: {
    top: 133,
    height: 357,
    width: 388,
    left: 20,
    position: 'absolute'
  },
  miDiarioEntradaTextoPlItem: {
    top: 726,
    height: 75,
    backgroundColor: Color.secundario,
    left: 0,
    width: 428
  },
  iconlyboldimage: {
    width: 32,
    height: 32
  },
  iconlyboldcamera: {
    width: 34,
    height: 33,
    marginLeft: 30
  },
  iconlyboldvoice: {
    width: 25,
    height: 34,
    marginLeft: 30
  },
  frameChild: {
    height: 21
  },
  groupIcon: {
    height: 30
  },
  tt: {
    fontSize: FontSize.size_15xl,
    lineHeight: 51,
    marginLeft: 30
  },
  iconlyboldticketStar: {
    width: 42,
    marginLeft: 30,
    height: 32
  },
  iconlyboldimageParent: {
    top: 738,
    left: 12,
    position: 'absolute'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  documentIcon: {
    marginLeft: 30,
    height: 24,
    width: 24,
    overflow: 'hidden'
  },
  iconlylightOutlinesetting: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  iconlylightOutlinesearchParent: {
    top: 20,
    left: 276,
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
    height: 36
  },
  frameItem: {
    backgroundColor: Color.secundario,
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
  frameInner: {
    backgroundColor: Color.colorLightcyan,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden'
  },
  vectorIcon2: {
    top: 4,
    height: 28
  },
  rectangleView: {
    backgroundColor: Color.secundario
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
    alignItems: 'center',
    flexDirection: 'row',
    width: 428,
    left: 0,
    top: 64,
    position: 'absolute'
  },
  iconlyboldunlock: {
    height: 30,
    width: 24
  },
  familiaYAmigos: {
    color: Color.primario1,
    marginLeft: 20
  },
  privacidad: {
    top: 676,
    left: 20,
    position: 'absolute'
  },
  miDiarioEntradaTextoPl: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: 'hidden',
    width: '100%'
  }
})

export default MIDIARIOENTRADATEXTOPL3
