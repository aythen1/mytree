import React, { useState, useCallback } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Fecha5 from '../components/Fecha5'
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setPaper } from '../redux/slices/newspapersPublished.slices'

const Papers = () => {
  const { lastPapers } = useSelector((state) => state.papers)
  const dispatch = useDispatch()
  const [frameContainer25Visible, setFrameContainer25Visible] = useState(false)
  const navigation = useNavigation()

  const openFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(true)
  }, [])

  const closeFrameContainer25 = useCallback(() => {
    setFrameContainer25Visible(false)
  }, [])

  return (
    <>
      <View style={[styles.miDiarioEntradaTextoPl, styles.iconLayout]}>
        <View>
          <View style={styles.ltimasEntradasParent}>
            <Text style={[styles.ltimosDiariosFamiliares, styles.textTypo]}>
              Últimas entradas
            </Text>
            <Image
              style={styles.iconlyboldfilter2}
              contentFit="cover"
              source={require('../assets/iconlyboldfilter21.png')}
            />
          </View>
          {lastPapers.map((paper) => (
            <Pressable
              key={paper.id}
              style={styles.frameLayout}
              onPress={() => {
                dispatch(setPaper(paper))
                navigation.navigate('Paper')
              }}
            >
              <View
                style={[styles.frameContainer, styles.frameContainerFlexBox]}
              >
                <View style={styles.aatarWrapper}>
                  <Image
                    style={styles.aatarIcon}
                    contentFit="cover"
                    source={require('../assets/aatar7.png')}
                  />
                </View>
                <View style={styles.parent}>
                  <Text style={styles.text}>{paper.date.slice(0, 2)}</Text>
                  <Text style={styles.jul2023}>{paper.date.slice(2)}</Text>
                </View>
              </View>
              <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
                {paper.message.length >= 70
                  ? `${paper.message.slice(0, 70)}${'...'}`
                  : paper.message}
              </Text>
            </Pressable>
          ))}

          {/* <Pressable
            style={styles.frameLayout}
            onPress={() => navigation.navigate('MIDIARIOENTRADATEXTO')}
          >
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </Pressable>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.hoyHemosVisitado, styles.urielYYo2Typo]}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.urielYYo2, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.frameParent9}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <View style={styles.parent}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </View>
            </View>
            <Text style={[styles.urielYYo2, styles.urielYYo2Typo]}>
              Uriel y yo estamos muy contentos de empezar nuestro viaje a
              Japón...
            </Text>
          </View>
          <View style={styles.frameParent8}>
            <View style={styles.frameParent9}>
              <View style={styles.aatarWrapper}>
                <Image
                  style={styles.aatarIcon}
                  contentFit="cover"
                  source={require('../assets/aatar7.png')}
                />
              </View>
              <Pressable style={styles.parent} onPress={openFrameContainer25}>
                <Text style={styles.text}>07</Text>
                <Text style={styles.jul2023}>jul. 2023</Text>
              </Pressable>
            </View>
            <Text style={[styles.urielYYo2, styles.urielYYo2Typo]}>
              Hoy hemos visitado en Tokio un restaurante que nos ha encantado...
            </Text>
          </View> */}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    width: '100%',
    overflow: 'hidden'
  },
  ltimasEntradasParent: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    // backgroundColor: 'red'
  },
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  ltimosDiariosFamiliares: {
    color: Color.primario2,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl,
    // backgroundColor: 'red',

    width: '100%'
  },
  frameContainerFlexBox: {
    alignSelf: 'stretch',
    flex: 1
  },
  urielYYo2Typo: {
    display: 'flex',
    lineHeight: 27,
    fontSize: FontSize.size_lg,
    marginTop: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignItems: 'center'
  },
  frameLayout: {
    height: 150,
    alignSelf: 'stretch'
  },
  diarioLayout: {
    width: 428,
    position: 'absolute'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  aatarIcon7Position: {
    width: 70,
    left: 0,
    position: 'absolute'
  },
  marie1Typo: {
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    position: 'absolute'
  },
  faritaLayout: {
    height: 90,
    width: 70
  },
  aatarIcon: {
    width: 36,
    height: 36
  },
  aatarWrapper: {
    alignItems: 'center'
  },
  text: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    letterSpacing: 0
  },
  jul2023: {
    lineHeight: 30,
    marginLeft: 10,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  parent: {
    marginLeft: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  hoyHemosVisitado: {
    marginTop: 20,
    alignSelf: 'stretch',
    flex: 1
  },
  frameView: {
    marginTop: 20
  },
  urielYYo2: {
    marginTop: 20,
    width: 388
  },
  frameParent9: {
    flexDirection: 'row'
  },
  frameParent8: {
    marginTop: 20,
    width: 388
  },
  frameContainer25Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer25Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },

  miDiarioEntradaTextoPlChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 238,
    left: 0,
    width: 428,
    top: 0,
    backgroundColor: Color.white
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20,
    position: 'absolute'
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
  miDiarioEntradaTextoPlItem: {
    top: 64,
    height: 174,
    backgroundColor: Color.linearBoton,
    left: 0,
    width: 428
  },
  iconlyboldfilter2: {
    // right: 50,
    height: 24,
    width: 24
    // backgroundColor: 'blue'

    // height: '2.59%',
    // width: '5.61%',
    // top: '9.07%',
    // right: '4.67%',
    // bottom: '88.34%',
    // left: '89.72%',
    // maxWidth: '100%',
    // maxHeight: '100%',
    // position: 'absolute',
    // overflow: 'hidden'
  },
  icon: {
    height: '100%',
    overflow: 'hidden'
  },
  back: {
    width: 22,
    height: 22
  },
  ltimasEntradas: {
    color: Color.primario2,
    marginLeft: 20,
    textAlign: 'left',
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  backParent: {
    top: 84,
    alignItems: 'center',
    flexDirection: 'row',
    left: 20,
    position: 'absolute'
  },
  aatarIcon7: {
    height: 70,
    top: 0
  },
  benjamin1: {
    left: 10
  },
  benjaminWrapper: {
    top: 70,
    height: 20,
    overflow: 'hidden'
  },
  farita1: {
    left: 20
  },
  farita: {
    marginLeft: 20
  },
  marie1: {
    left: 19
  },
  stories: {
    top: 128,
    width: 408,
    flexDirection: 'row',
    left: 20,
    position: 'absolute'
  },
  miDiarioEntradaTextoPl: {
    // borderRadius: Border.br_31xl,
    top: 30,
    paddingHorizontal: 15,
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    backgroundColor: Color.white,
    paddingBottom: 200
  }
})

export default Papers
