import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'
import { Path, Svg } from 'react-native-svg'
import NameRegister from '../components/NameRegister'
import FechaRegister from '../components/FechaRegister'
import NumberPhoneRegister from '../components/NumberPhoneRegister'
import CheckRegister from '../components/CheckRegister'
import AcceptRegister from '../components/AcceptRegister'

const Register = () => {
  const navigation = useNavigation()
  const [nextField, setNextField] = useState(1)

  const next = () => {
    if (nextField < 5) {
      setNextField((prev) => prev + 1)
    } else {
      navigation.navigate('Splash')
    }
  }

  const previous = () => {
    if (nextField > 1) {
      setNextField((prev) => prev - 1)
    } else {
      navigation.navigate('Splash')
    }
  }

  return (
    <View style={styles.registroNombre}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require('../assets/vector71.png')}
      />
      <View style={styles.frameParent}>
        <LinearGradient
          style={styles.frameChild}
          locations={[0, 1]}
          colors={['#7ec18c', '#dee274']}
        >
          <View style={[styles.rectangleGroup, styles.groupIconPosition]}>
            <Pressable
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => previous()}
            >
              <Image
                contentFit="cover"
                source={require('../assets/Back Button.png')}
              />
            </Pressable>
          </View>
          <View style={styles.registrateParent}>
            <Text style={[styles.registrate, styles.registrateTypo]}>
              ¡REGISTRATE!
            </Text>
            <Text style={[styles.laFamiliaEs, styles.registrateTypo]}>
              La familia es el cimiento de la sociedad, donde el amor y el apoyo
              mutuo crean un hogar lleno de calor y seguridad.
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.frameGroup}>
          <View style={styles.lineParent}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require('../assets/line-711.png')}
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                top: 10
              }}
            >
              <View
                style={{
                  backgroundColor: Color.secundario,
                  width: 42,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 21
                }}
              >
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z"
                    fill="#7EC18C"
                  />
                </Svg>
              </View>
              <View
                style={{
                  backgroundColor:
                    nextField >= 2 ? Color.secundario : Color.grisHome,
                  width: 42,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 21
                }}
              >
                <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <Path
                    d="M10.4922 0C10.9922 0.244444 11.9922 1.85778 11.9922 2.93333C11.9922 4.00889 11.3222 4.4 10.4922 4.4C9.66219 4.4 8.99219 4.25333 8.99219 3.17778C8.99219 2.10222 9.99219 1.46667 10.4922 0ZM17.4922 8.31111C19.9922 8.31111 21.9922 10.2667 21.9922 12.7111C21.9922 14.2364 21.2022 15.576 19.9922 16.368V22H1.99219V16.368C0.782187 15.576 -0.0078125 14.2364 -0.0078125 12.7111C-0.0078125 10.2667 1.99219 8.31111 4.49219 8.31111H8.99219V5.37778H11.9922V8.31111H17.4922ZM10.9922 15.1556C11.6552 15.1556 12.2911 14.898 12.76 14.4396C13.2288 13.9812 13.4922 13.3594 13.4922 12.7111H14.9922C14.9922 13.3594 15.2556 13.9812 15.7244 14.4396C16.1933 14.898 16.8291 15.1556 17.4922 15.1556C18.1552 15.1556 18.7911 14.898 19.26 14.4396C19.7288 13.9812 19.9922 13.3594 19.9922 12.7111C19.9922 12.0628 19.7288 11.4411 19.26 10.9826C18.7911 10.5242 18.1552 10.2667 17.4922 10.2667H4.49219C3.82915 10.2667 3.19326 10.5242 2.72442 10.9826C2.25558 11.4411 1.99219 12.0628 1.99219 12.7111C1.99219 13.3594 2.25558 13.9812 2.72442 14.4396C3.19326 14.898 3.82915 15.1556 4.49219 15.1556C5.15523 15.1556 5.79111 14.898 6.25995 14.4396C6.7288 13.9812 6.99219 13.3594 6.99219 12.7111H8.49219C8.49219 13.3594 8.75558 13.9812 9.22442 14.4396C9.69326 14.898 10.3291 15.1556 10.9922 15.1556Z"
                    fill="#BCBCBC"
                  />
                </Svg>
              </View>

              <View
                style={{
                  backgroundColor:
                    nextField >= 3 ? Color.secundario : Color.grisHome,
                  width: 42,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 21
                }}
              >
                <Svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                  <Path
                    d="M12.8 1.5C13.2243 1.5 13.6313 1.65804 13.9314 1.93934C14.2314 2.22064 14.4 2.60218 14.4 3V21C14.4 21.3978 14.2314 21.7794 13.9314 22.0607C13.6313 22.342 13.2243 22.5 12.8 22.5H3.2C2.77565 22.5 2.36869 22.342 2.06863 22.0607C1.76857 21.7794 1.6 21.3978 1.6 21V3C1.6 2.60218 1.76857 2.22064 2.06863 1.93934C2.36869 1.65804 2.77565 1.5 3.2 1.5H12.8ZM3.2 0C2.35131 0 1.53737 0.316071 0.937258 0.87868C0.337142 1.44129 0 2.20435 0 3V21C0 21.7956 0.337142 22.5587 0.937258 23.1213C1.53737 23.6839 2.35131 24 3.2 24H12.8C13.6487 24 14.4626 23.6839 15.0627 23.1213C15.6629 22.5587 16 21.7956 16 21V3C16 2.20435 15.6629 1.44129 15.0627 0.87868C14.4626 0.316071 13.6487 0 12.8 0L3.2 0Z"
                    fill="#BCBCBC"
                  />
                  <Path
                    d="M7.99844 21C8.42278 21 8.82975 20.842 9.12981 20.5607C9.42987 20.2794 9.59844 19.8978 9.59844 19.5C9.59844 19.1022 9.42987 18.7206 9.12981 18.4393C8.82975 18.158 8.42278 18 7.99844 18C7.57409 18 7.16713 18.158 6.86707 18.4393C6.56701 18.7206 6.39844 19.1022 6.39844 19.5C6.39844 19.8978 6.56701 20.2794 6.86707 20.5607C7.16713 20.842 7.57409 21 7.99844 21Z"
                    fill="#BCBCBC"
                  />
                </Svg>
              </View>
              <View
                style={{
                  backgroundColor:
                    nextField >= 4 ? Color.secundario : Color.grisHome,
                  width: 42,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 21
                }}
              >
                <Svg width="24" height="17" viewBox="0 0 24 17" fill="none">
                  <Path
                    d="M8.05301 17C7.91489 16.9953 7.77918 16.9625 7.6542 16.9034C7.52921 16.8443 7.41758 16.7603 7.32615 16.6564L0.469008 9.78537C0.338267 9.70043 0.228494 9.58684 0.147975 9.45317C0.0674572 9.3195 0.0182989 9.16924 0.00421219 9.01375C-0.00987456 8.85826 0.0114785 8.70159 0.066659 8.55557C0.12184 8.40956 0.209405 8.27802 0.322745 8.17087C0.436084 8.06373 0.572235 7.98379 0.720918 7.93709C0.869601 7.89039 1.02693 7.87815 1.18102 7.90129C1.33512 7.92444 1.48195 7.98235 1.61044 8.07068C1.73893 8.15901 1.84571 8.27543 1.92272 8.41116L8.05301 14.5127L22.4119 0.165863C22.6052 0.0402724 22.835 -0.016649 23.0644 0.00422188C23.2939 0.0250928 23.5097 0.122548 23.6773 0.280966C23.8448 0.439385 23.9545 0.649593 23.9886 0.8779C24.0228 1.10621 23.9795 1.33939 23.8656 1.54008L8.77987 16.6564C8.68844 16.7603 8.57681 16.8443 8.45182 16.9034C8.32683 16.9625 8.19112 16.9953 8.05301 17Z"
                    fill="#BCBCBC"
                  />
                </Svg>
              </View>
              <View
                style={{
                  backgroundColor:
                    nextField >= 5 ? Color.secundario : Color.grisHome,
                  width: 42,
                  height: 42,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 21
                }}
              >
                <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <Path
                    d="M3 20C2.16667 20 1.45833 19.7083 0.875 19.125C0.291667 18.5417 0 17.8333 0 17V14H3V0H18V17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20H3ZM15 18C15.2833 18 15.521 17.904 15.713 17.712C15.905 17.52 16.0007 17.2827 16 17V2H5V14H14V17C14 17.2833 14.096 17.521 14.288 17.713C14.48 17.905 14.7173 18.0007 15 18ZM6 7V5H15V7H6ZM6 10V8H15V10H6ZM3 18H12V16H2V17C2 17.2833 2.096 17.521 2.288 17.713C2.48 17.905 2.71733 18.0007 3 18ZM3 18H2H12H3Z"
                    fill="#BCBCBC"
                  />
                </Svg>
              </View>
            </View>
            <View
              style={[styles.ellipseGroup, styles.ellipseParentShadowBox]}
            ></View>
            <View
              style={[styles.ellipseContainer, styles.ellipseParentShadowBox]}
            ></View>

            <View
              style={[styles.ellipseParent1, styles.ellipseParentShadowBox]}
            ></View>
          </View>

          <View style={{ top: -50 }}>
            {nextField === 1 && <NameRegister />}
            {nextField === 2 && <FechaRegister />}
            {nextField === 3 && <NumberPhoneRegister />}
            {nextField === 4 && <CheckRegister />}
            {nextField === 5 && <AcceptRegister />}
          </View>

          {/* <View style={styles.labelledParent}>
            <Text style={[styles.labelled, styles.labelledTypo]}>
              Nombre Completo
            </Text>
            <View style={styles.baseBackgroundParent}>
              <View
                style={[styles.baseBackground, styles.ellipseParentShadowBox]}
              />
              <View style={[styles.frameParent1, styles.groupIconPosition]}>
                <View style={styles.vectorParent}>
                  <Image
                    style={[styles.vectorIcon5, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require('../assets/vector81.png')}
                  />
                  <TextInput
                    style={[styles.placeholder, styles.labelledTypo]}
                    placeholder="Nombre"
                  ></TextInput>
                </View>
                <Image
                  style={[styles.vectorIcon5, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require('../assets/icons--error-circle.png')}
                />
              </View>
            </View>
          </View> */}
          <Pressable style={styles.labelled1} onPress={() => next()}>
            <Text style={[styles.continuar, styles.labelledTypo]}>
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
  groupIconPosition: {
    zIndex: 100,
    position: 'absolute'
  },
  registrateTypo: {
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.lato
  },
  ellipseParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)'
  },
  vectorIconLayout: {
    width: 24,
    height: 24
  },
  labelledTypo: {
    textAlign: 'left',
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
    width: '100%',
    height: '30%',
    // backgroundColor: Color.linearBoton,
    zIndex: 0
  },
  frameItem: {
    width: 29,
    height: 28,
    zIndex: 0
  },
  backButtonIcon: {
    top: 300,
    left: -50,
    width: 18,
    height: 0,
    backgroundColor: 'red',
    zIndex: 100
  },
  rectangleGroup: {
    top: 26,
    left: 15
  },
  registrate: {
    lineHeight: 24,
    // transform: [
    //   {
    //     rotate: '-0.55deg'
    //   }
    // ],
    fontWeight: '900',
    fontSize: FontSize.size_5xl,
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.lato
  },
  laFamiliaEs: {
    fontSize: FontSize.size_lg,
    fontWeight: '500',
    // width: 323
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 16,
    zIndex: 5
  },
  registrateParent: {
    top: 100,
    // left: 52,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    zIndex: 2

    // position: 'absolute'
  },
  frameInner: {
    top: 30,
    // left: 30,
    // width: '100%',
    height: 1
    // position: 'absolute'
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
    flexDirection: 'row',
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    top: 0,
    position: 'absolute'
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
    flexDirection: 'row',
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    top: 0,
    position: 'absolute'
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
    flexDirection: 'row',
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    top: 0,
    position: 'absolute'
  },
  vectorIcon3: {
    top: 8,
    left: 8,
    height: 24,
    zIndex: 1,
    position: 'absolute'
  },
  frameView: {
    flexDirection: 'row',
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    top: 0,
    position: 'absolute',
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
    flexDirection: 'row',
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    top: 0,
    position: 'absolute'
  },
  lineParent: {
    width: '100%',
    height: 40
  },
  labelled: {
    color: Color.negro,
    textAlign: 'left',
    lineHeight: 41,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  baseBackground: {
    borderRadius: Border.br_5xs,
    shadowRadius: 14,
    elevation: 14,
    borderStyle: 'solid',
    borderColor: Color.primario1,
    borderWidth: 1,
    width: 325,
    height: 51,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowColor: 'rgba(244, 105, 76, 0.15)',
    zIndex: 0,
    backgroundColor: Color.white
  },
  vectorIcon5: {
    height: 24
  },
  placeholder: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    display: 'flex',
    width: 211,
    marginLeft: 16,
    color: Color.negro,
    textAlign: 'left',
    height: 24,
    alignItems: 'center'
  },
  vectorParent: {
    width: 251,
    flexDirection: 'row'
  },
  frameParent1: {
    top: 13,
    left: 16,
    width: 286,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  baseBackgroundParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    marginTop: 20
  },
  labelledParent: {
    alignItems: 'center'
  },
  continuar: {
    color: Color.primario1,
    lineHeight: 41,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  labelled1: {
    alignSelf: 'center',
    top: 30,
    zIndex: 10
  },
  frameContainer: {
    alignItems: 'center'
  },
  frameGroup: {
    marginTop: 10,
    height: '66%',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15
  },
  frameParent: {
    alignItems: 'center',
    left: 0,
    top: 0
    // height: '100%'
  },
  registroNombre: {
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Color.white,
    height: '100%'
  }
})

export default Register
