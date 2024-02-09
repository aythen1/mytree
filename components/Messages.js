import React from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/slices/chats.slices'

const Messages = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { messages } = useSelector((state) => state.chats)

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: 400, paddingBottom: 100 }}
      >
        {messages.map((message) => (
          <Pressable
            key={message.id}
            style={styles.frameLayout}
            onPress={() => {
              navigation.navigate('Bsqueda')
              dispatch(setMessage(message))
            }}
          >
            <View style={styles.unsplashilip77sbmoeParent}>
              <Image
                style={[styles.unsplashilip77sbmoeIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require('../assets/unsplashilip77sbmoe.png')}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require('../assets/vector15.png')}
              />
            </View>
            <View style={styles.brunoPhamParent}>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                {message.name}
              </Text>
              <Text style={[styles.vendrnLuegoA, styles.searchTypo]}>
                {message.message}
              </Text>
            </View>
            <View style={[styles.hace2HorasWrapper, styles.hace2FlexBox]}>
              <Text style={[styles.hace2Minutos, styles.searchClr]}>
                {message.sendAgo}
              </Text>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require('../assets/ellipse-7159.png')}
                />
                <Text style={[styles.text, styles.textPosition]}>
                  {message.notRead}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      {/* <Pressable
        style={[styles.newMessage, styles.vectorIconPosition]}
        onPress={() => {
          navigation.navigate('Bsqueda')
        }}
      >
        <LinearGradient
          style={[styles.surface, styles.iconLayout]}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        />
      </Pressable>
      <Image
        style={styles.iconlyboldedit}
        contentFit="cover"
        source={require('../assets/iconlyboldedit1.png')}
      /> */}
    </>
  )
}

const styles = StyleSheet.create({
  iconlyboldedit: {
    height: '2.48%',
    width: '5.37%',
    top: '83.5%',
    left: '90%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  iconLayout: {
    height: 60,
    width: 60
  },
  surface: {
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: Border.br_21xl,
    backgroundColor: Color.linearBoton,
    position: 'absolute'
  },
  newMessage: {
    height: '6.48%',
    marginLeft: 133,
    top: '80.24%',
    bottom: '13.28%',
    width: 60
  },
  vectorIconPosition: {
    left: '50%',
    position: 'absolute'
  },
  iconLayout1: {
    height: 44,
    width: 44
  },
  brunoPhamTypo: {
    textAlign: 'justify',
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontWeight: '700',
    letterSpacing: 0
  },
  searchTypo: {
    textAlign: 'left',
    lineHeight: 21,
    fontSize: FontSize.size_sm
  },
  searchClr: {
    color: Color.textPlaceholder,
    letterSpacing: 0
  },
  textPosition: {
    top: 3,
    position: 'absolute'
  },
  frameLayout: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Color.colorWhitesmoke_200,
    flexDirection: 'row'
  },
  hace2FlexBox: {
    alignItems: 'flex-end',
    height: 44
  },
  // frameParent16Position: {
  //   left: 0,
  //   position: 'absolute'
  // },
  iconlylightsendCopyLayout: {
    width: 24,
    height: 24
  },
  aatarIconPosition: {
    width: 70,
    left: 0,
    position: 'absolute'
  },
  signTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  youLayout: {
    height: 90,
    width: 70
  },
  storiesLayout: {
    width: 408,
    flexDirection: 'row'
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    // paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 48,
    width: 108,
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 388,
    height: 85,
    zIndex: 0,
    borderRadius: Border.br_3xs
  },
  unsplashilip77sbmoeIcon: {
    zIndex: 0
  },
  vectorIcon: {
    marginTop: -20,
    marginLeft: -10,
    top: '50%',
    height: 15,
    width: 20,
    zIndex: 1
  },
  unsplashilip77sbmoeParent: {
    flexDirection: 'row'
  },
  brunoPham: {
    alignSelf: 'stretch'
  },
  vendrnLuegoA: {
    marginTop: 4,
    color: Color.textTextSecondary,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignSelf: 'stretch'
  },
  brunoPhamParent: {
    marginLeft: 16,
    width: 210
  },
  hace2Minutos: {
    fontWeight: '300',
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    textAlign: 'justify',
    fontFamily: FontFamily.lato
  },
  frameItem: {
    width: 23,
    height: 23,
    zIndex: 0
  },
  text: {
    left: 8,
    color: Color.grisHome,
    display: 'flex',
    width: 7,
    height: 17,
    alignItems: 'center',
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    textAlign: 'justify',
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    letterSpacing: 0,
    top: 3,
    zIndex: 1
  },
  ellipseParent: {
    marginTop: 4,
    flexDirection: 'row'
  },
  frameContainer: {
    zIndex: 1,
    flexDirection: 'row'
  },
  marieGarca: {
    width: 210
  },
  vectorIcon2: {
    width: 19,
    height: 11
  },
  valeNosVemos: {
    marginLeft: 2,
    color: Color.textTextSecondary,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  vectorParent: {
    alignItems: 'center',
    marginTop: 4,
    flexDirection: 'row'
  },
  marieGarcaParent: {
    marginLeft: 16
  },
  frameParent2: {
    width: 266,
    flexDirection: 'row'
  },
  hace2HorasWrapper: {
    width: 82
  },
  frameParent1: {
    width: 348,
    zIndex: 1,
    top: 20,
    left: 20,
    position: 'absolute'
  },
  rectangleGroup: {
    marginTop: 20
  },

  frameParent: {
    // top: 150
    // height: 529,
    // left: 20,
    // position: 'absolute'
  },
  mensajeraChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 353,
    width: 428,
    top: 0,
    backgroundColor: Color.white
  },
  image6Icon: {
    width: 87,
    height: 55,
    left: 20
  },
  iconlylightOutline3User: {
    width: 35,
    height: 24
  },
  notification: {
    width: 17,
    marginLeft: 30,
    height: 20
  },
  iconlylightOutlinecalendar: {
    marginLeft: 30
  },
  iconlylightOutline3UserParent: {
    left: 219,
    width: 189,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: 20
    // position: 'absolute'
  },
  videodiarios: {
    top: 35,
    fontSize: FontSize.size_5xl,
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    left: 20
    // position: 'absolute'
  },
  aatarIcon: {
    height: 70,
    top: 0
  },
  you1: {
    left: 25,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    color: Color.negro,
    position: 'absolute'
  },
  youWrapper: {
    top: 70,
    height: 20,
    overflow: 'hidden'
  },
  benjamin1: {
    left: 10,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    color: Color.negro,
    position: 'absolute'
  },
  benjamin: {
    marginLeft: 20
  },
  farita1: {
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    color: Color.negro,
    position: 'absolute',
    left: 20
  },
  marie1: {
    left: 19,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: FontSize.footnote_size,
    top: -1,
    textAlign: 'center',
    color: Color.negro,
    position: 'absolute'
  },
  signIn: {
    color: Color.white,
    textAlign: 'center',
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: '700'
  },
  button: {
    backgroundColor: Color.linearBoton
  },
  signIn1: {
    textAlign: 'center',
    lineHeight: 21,
    fontSize: FontSize.size_sm
  },
  button1: {
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    marginLeft: 10,
    backgroundColor: Color.white
  },
  buttonParent: {
    marginTop: 20
  },
  iconlylightOutlinesearch: {
    height: 20,
    width: 20
  },
  search: {
    fontStyle: 'italic',
    fontWeight: '200',
    fontFamily: FontFamily.nunito,
    textAlign: 'left',
    lineHeight: 21,
    fontSize: FontSize.size_sm
  },
  placeholderInput: {
    marginLeft: 6,
    flexDirection: 'row',
    flex: 1
  },
  searchBar: {
    backgroundColor: Color.fAFAFA,
    width: 341,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Border.br_3xs
  },
  iconlylightsendCopyWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundGreyBackground,
    padding: Padding.p_7xs,
    marginLeft: 15,
    flexDirection: 'row'
  },
  header: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    marginTop: 8,
    width: 428,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.white
  },
  frameParent16: {
    // top: 113,
    alignItems: 'center'
  },

  mensajera: {
    // borderRadius: Border.br_31xl,
    height: '100%',
    // overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  }
})

export default Messages
