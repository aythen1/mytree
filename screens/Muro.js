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
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 194,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonPosition: {
    top: 36
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
  modalOverlay: {
    top: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
  }
})

export default Muro
