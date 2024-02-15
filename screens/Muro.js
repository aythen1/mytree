import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import { setPanel } from '../redux/slices/panel.slices'
import { Image } from 'expo-image'
import { Border, Padding, FontFamily, FontSize, Color } from '../GlobalStyles'
import Post from '../components/Post'
import Stories from '../components/Stories'
import RetosModal from './RetosModal'
import VotacionDeRetos from './VotacionDeRetos'
import MenuPrincipal from '../components/MenuPrincipal'
import HeaderIcons from '../components/HeaderIcons'
import LupaSVG from '../components/svgs/LupaSVG'
import MessageSVG from '../components/svgs/MessageSVG'
import NotificationsMuroSVG from '../components/svgs/NotificationsMuroSVG'
import CalendarSVG from '../components/svgs/CalendarSVG'
import CalendarMuroSVG from '../components/svgs/CalendarMuroSVG'
import SettingSVG from '../components/svgs/SettingSVG'
import SettingMuroSVG from '../components/svgs/SettingMuroSVG'

const Muro = () => {
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)
  // const navigation = useNavigation()
  const [showModalRetos, setShowModalRetos] = useState(false)
  const [colorClick, setColorClick] = useState(true)
  const [showRetos, setShowRetos] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const handleShowRetos = () => {
    setShowModalRetos(!showModalRetos)
  }

  const handleMenu = () => {
    dispatch(setPanel(false))
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15
          }}
        >
          <Pressable
            style={[styles.menuIcon, styles.menuPosition]}
            onPress={() => dispatch(setPanel(!menuVisible))}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require('../assets/ionmenu1.png')}
            />
          </Pressable>
          <View style={[styles.messageParent, styles.buttonPosition]}>
            <HeaderIcons
              icons={
                !showRetos
                  ? [<LupaSVG />, <MessageSVG />, <NotificationsMuroSVG />]
                  : [<MessageSVG />, <CalendarMuroSVG />, <SettingMuroSVG />]
              }
            />
          </View>
        </View>

        <View style={{ minHeight: 900, paddingBottom: 100 }}>
          <View style={styles.instanceParent}>
            <View
              style={{
                backgroundColor: !colorClick
                  ? Color.backgroundPrimaryBackground
                  : Color.secundario
              }}
            >
              <Pressable
                style={[styles.tabs, styles.tabsFlexBox]}
                onPress={() => {
                  setColorClick(true)
                  setShowRetos(false)
                }}
              >
                <Text
                  style={{
                    fontWeight: colorClick ? '700' : '300',
                    width: 110,
                    textAlign: 'center',
                    fontFamily: FontFamily.lato,
                    lineHeight: 19,
                    letterSpacing: 0,
                    fontSize: FontSize.size_base,
                    color: !colorClick ? Color.textPlaceholder : Color.black1
                  }}
                >
                  Familia
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                backgroundColor: colorClick
                  ? Color.backgroundPrimaryBackground
                  : Color.secundario
              }}
            >
              <Pressable
                style={[styles.tabs, styles.tabsFlexBox]}
                onPress={() => {
                  setColorClick(false)
                  handleShowRetos()
                }}
              >
                <Text
                  style={{
                    fontWeight: !colorClick ? '700' : '300',
                    width: 110,
                    textAlign: 'center',
                    fontFamily: FontFamily.lato,
                    lineHeight: 19,
                    letterSpacing: 0,
                    fontSize: FontSize.size_base,
                    color: colorClick ? Color.textPlaceholder : Color.black1
                  }}
                >
                  Retos
                </Text>
              </Pressable>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={showModalRetos}
          >
            <View style={styles.modalOverlay}>
              <RetosModal
                setShowRetos={setShowRetos}
                setShowModalRetos={setShowModalRetos}
              />
            </View>
          </Modal>

          <Stories />

          {showRetos ? <VotacionDeRetos /> : <Post />}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showPanel}
          onRequestClose={() => dispatch(setPanel(false))}
        >
          <TouchableWithoutFeedback onPress={handleMenu}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <MenuPrincipal setMenuVisible={setMenuVisible} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_xl,
    // height: 732,
    width: 388,
    position: 'absolute'
  },
  vectorIconLayout: {
    height: 63,
    position: 'absolute'
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 194,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  itemLayout: {
    height: 53,
    width: 53,
    borderRadius: Border.br_4xl,
    position: 'absolute'
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
  iconlyboldchatLayout: {
    height: 40,
    width: 40
  },
  frameChild: {
    backgroundColor: Color.mytreeClarito,
    left: 0,
    top: 0
  },
  vectorIcon: {
    marginTop: -29,
    marginLeft: -40,
    width: 78,
    left: '50%',
    top: '50%'
  },
  rectangleParent: {
    width: 388,
    left: 20,
    top: 139,
    position: 'absolute'
  },
  muroInformacinChild: {
    backgroundColor: Color.linearBoton,
    // left: 20,
    // top: 139,
    borderRadius: Border.br_xl
  },

  popularWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    overflow: 'hidden'
  },
  tabs: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs
  },
  instanceParent: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
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
    marginTop: -7.5,
    marginLeft: -10.5,
    width: 20,
    height: 15,
    position: 'absolute'
  },
  rectangleGroup: {
    top: 159,
    width: 59,
    height: 59,
    left: 40,
    position: 'absolute'
  },
  messageIcon: {
    height: 24
  },
  iconlylightOutlineplus: {
    marginLeft: 30,
    height: 24
  },
  messageParent: {
    // left: 276,
    // justifyContent: 'center',
    // alignItems: 'center',
    // top: 36
    // flexDirection: 'row'
  },
  yendoALa: {
    top: 813,
    color: Color.white,
    textAlign: 'left',
    left: 40,
    fontSize: FontSize.size_base
  },
  camila: {
    top: 764,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: 'left',
    left: 40,
    fontWeight: '700'
  },
  iconlyboldsend: {
    marginTop: 39
  },
  navigationIcon: {
    top: 857,
    width: 428,
    height: 105,
    left: 0,
    position: 'absolute'
  },
  modalOverlay: {
    top: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  muroInformacin: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    flex: 1,
    width: '100%'
  },
  icon: {
    overflow: 'hidden'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  menuIcon: {
    width: 26,
    height: 20
  },
  menuPosition: {
    top: 36
    // position: 'absolute',
    // left: 10
  }
})

export default Muro
