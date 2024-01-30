import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const REGISTROPRIVACIDAD = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.registroPrivacidad}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require('../assets/vector71.png')}
      />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.frameChildLayout}>
          <LinearGradient
            style={[styles.frameChild, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={['#7ec18c', '#dee274']}
          />
          <View style={styles.rectangleGroup}>
            <Pressable
              style={styles.frameItem}
              onPress={() => navigation.navigate('REGISTROTELFONO')}
            />
            <Image
              style={[styles.backButtonIcon, styles.iconPosition]}
              contentFit="cover"
              source={require('../assets/back-button1.png')}
            />
          </View>
          <View style={styles.registrateParent}>
            <Text style={[styles.registrate, styles.registrateTypo]}>
              ¡REGISTRATE!
            </Text>
            <Text style={[styles.laFamiliaEs, styles.registrateTypo]}>
              La familia es el primer equipo al que pertenecemos, donde
              aprendemos a cuidar, compartir y crecer juntos, forjando un lazo
              que perdurará toda la vida
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.lineParent}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require('../assets/line-71.png')}
              />
              <View
                style={[styles.ellipseParent, styles.ellipseParentShadowBox]}
              >
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require('../assets/ellipse-7158.png')}
                />
                <Image
                  style={[styles.groupIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require('../assets/group-1171275003.png')}
                />
              </View>
              <View
                style={[styles.ellipseGroup, styles.ellipseParentShadowBox]}
              >
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require('../assets/ellipse-7158.png')}
                />
                <Image
                  style={[styles.vectorIcon1, styles.iconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector72.png')}
                />
              </View>
              <View
                style={[styles.ellipseContainer, styles.ellipseParentShadowBox]}
              >
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require('../assets/ellipse-7158.png')}
                />
                <Image
                  style={[styles.vectorIcon2, styles.iconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector73.png')}
                />
              </View>
              <View style={[styles.frameView, styles.ellipseParentShadowBox]}>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require('../assets/ellipse-7158.png')}
                />
                <Image
                  style={[styles.vectorIcon3, styles.iconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector74.png')}
                />
              </View>
              <View
                style={[styles.ellipseParent1, styles.ellipseParentShadowBox]}
              >
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require('../assets/ellipse-7158.png')}
                />
                <Image
                  style={[styles.vectorIcon4, styles.iconPosition]}
                  contentFit="cover"
                  source={require('../assets/vector75.png')}
                />
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View style={styles.frameContainer}>
                <Text style={[styles.labelled, styles.labelledTypo]}>
                  Aceptación de Privacidad en MyTree
                </Text>
              </View>
              <View style={[styles.checkParent, styles.parentFlexBox]}>
                <View style={styles.check}>
                  <View style={styles.checkChild} />
                </View>
                <View
                  style={[
                    styles.aceptoLosTrminosYCondicioParent,
                    styles.parentFlexBox
                  ]}
                >
                  <Pressable
                    onPress={() =>
                      navigation.navigate('REGISTROTRMINOSYCONDICIO')
                    }
                  >
                    <Text style={[styles.text, styles.textLayout]}>
                      <Text style={[styles.aceptoLos, styles.labelledClr]}>
                        {'Acepto los '}
                      </Text>
                      <Text
                        style={[
                          styles.trminosYCondiciones,
                          styles.continuarClr
                        ]}
                      >
                        términos y condiciones
                      </Text>
                      <Text
                        style={[styles.aceptoLos, styles.labelledClr]}
                      >{` de MyTree,
`}</Text>
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('REGISTROPOLTICASDEPRIVAC')
                    }
                  >
                    <Text style={styles.textLayout}>
                      <Text style={[styles.aceptoLos, styles.labelledClr]}>
                        {'así como también el '}
                      </Text>
                      <Text
                        style={[
                          styles.trminosYCondiciones,
                          styles.continuarClr
                        ]}
                      >
                        acuerdo de privacidad
                      </Text>
                      <Text style={[styles.aceptoLos, styles.labelledClr]}>
                        .
                      </Text>
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.labelled1}
            onPress={() => navigation.navigate('Success')}
          >
            <Text style={[styles.continuar, styles.continuarClr]}>
              {'Continuar >'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  framePosition: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  frameChildLayout: {
    height: 243,
    width: 428
  },
  iconPosition: {
    zIndex: 1,
    position: 'absolute'
  },
  registrateTypo: {
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.lato
  },
  ellipseParentShadowBox: {
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    flexDirection: 'row',
    top: 0,
    position: 'absolute'
  },
  labelledTypo: {
    textAlign: 'left',
    lineHeight: 41,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  parentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLayout: {
    width: 323,
    lineHeight: 27,
    fontSize: FontSize.size_base,
    textAlign: 'left'
  },
  labelledClr: {
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  continuarClr: {
    color: Color.primario1,
    fontFamily: FontFamily.lato
  },
  vectorIcon: {
    height: '37.33%',
    width: '77.1%',
    top: '-5.98%',
    right: '0%',
    bottom: '68.65%',
    left: '22.9%',
    opacity: 0.2,
    position: 'absolute'
  },
  frameChild: {
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  frameItem: {
    width: 29,
    height: 28,
    zIndex: 0
  },
  backButtonIcon: {
    top: 14,
    left: 5,
    width: 18,
    height: 0
  },
  rectangleGroup: {
    top: 26,
    left: 15,
    position: 'absolute'
  },
  registrate: {
    lineHeight: 24,
    transform: [
      {
        rotate: '-0.55deg'
      }
    ],
    fontWeight: '900',
    fontSize: FontSize.size_5xl,
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.lato
  },
  laFamiliaEs: {
    fontSize: FontSize.size_lg,
    width: 377,
    marginTop: 10,
    fontWeight: '500'
  },
  registrateParent: {
    top: 109,
    left: 26,
    alignItems: 'center',
    position: 'absolute'
  },
  frameInner: {
    top: 20,
    left: 30,
    width: 328,
    height: 1,
    position: 'absolute'
  },
  ellipseIcon: {
    width: 40,
    height: 40,
    zIndex: 0
  },
  groupIcon: {
    height: '60%',
    width: '40%',
    top: '20%',
    right: '30%',
    bottom: '20%',
    left: '30%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  ellipseParent: {
    left: 178,
    flexDirection: 'row'
  },
  vectorIcon1: {
    height: '42.5%',
    width: '60%',
    top: '30%',
    right: '20%',
    bottom: '27.5%',
    left: '20%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  ellipseGroup: {
    left: 267,
    flexDirection: 'row'
  },
  vectorIcon2: {
    height: '50%',
    width: '45%',
    top: '25%',
    right: '27.5%',
    bottom: '25%',
    left: '27.5%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  ellipseContainer: {
    left: 356,
    flexDirection: 'row'
  },
  vectorIcon3: {
    top: 8,
    left: 8,
    width: 24,
    height: 24
  },
  frameView: {
    flexDirection: 'row',
    left: 0
  },
  vectorIcon4: {
    top: 9,
    left: 9,
    width: 22,
    height: 22
  },
  ellipseParent1: {
    left: 89,
    flexDirection: 'row'
  },
  lineParent: {
    width: 396,
    height: 40
  },
  labelled: {
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  frameContainer: {
    alignItems: 'center'
  },
  checkChild: {
    height: '105%',
    width: '105%',
    top: '-2.5%',
    right: '-2.5%',
    bottom: '-2.5%',
    left: '-2.5%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    position: 'absolute',
    backgroundColor: Color.white
  },
  check: {
    width: 20,
    height: 20
  },
  aceptoLos: {
    fontWeight: '500'
  },
  trminosYCondiciones: {
    fontWeight: '700'
  },
  text: {
    height: 24
  },
  aceptoLosTrminosYCondicioParent: {
    marginLeft: 11
  },
  checkParent: {
    width: 388,
    flexDirection: 'row',
    marginTop: 20
  },
  frameParent1: {
    marginTop: 104,
    width: 388,
    alignItems: 'center'
  },
  continuar: {
    textAlign: 'left',
    lineHeight: 41,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  labelled1: {
    marginTop: 336
  },
  frameGroup: {
    marginTop: 20,
    alignItems: 'center'
  },
  frameParent: {
    alignItems: 'center',
    left: 0
  },
  registroPrivacidad: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
    backgroundColor: Color.white
  }
})

export default REGISTROPRIVACIDAD
