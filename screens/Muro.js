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
import MENPRINCIPAL from '../components/MENPRINCIPAL'

const Muro = () => {
  const dispatch = useDispatch()

  const { showPanel } = useSelector((state) => state.panel)
  // const navigation = useNavigation()
  const [showModalRetos, setShowModalRetos] = useState(false)
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
      <ScrollView>
        <View style={{ minHeight: 900 }}>
          <View style={styles.instanceParent}>
            <View>
              <Pressable
                style={[styles.tabs, styles.tabsFlexBox]}
                onPress={() => {
                  setShowRetos(false)
                }}
              >
                <Text style={[styles.popular, styles.popularTypo]}>
                  Familia
                </Text>
              </Pressable>
            </View>
            <Pressable
              style={[styles.tabs, styles.tabsFlexBox]}
              onPress={() => {
                handleShowRetos()
              }}
            >
              <Text style={[styles.trending, styles.popularTypo]}>Retos</Text>
            </Pressable>
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

          <View style={[styles.messageParent, styles.buttonPosition]}>
            <Image
              style={[styles.messageIcon, styles.messageIconLayout]}
              contentFit="cover"
              source={require('../assets/message1.png')}
            />
            <Image
              style={[styles.iconlylightOutlineplus, styles.messageIconLayout]}
              contentFit="cover"
              source={require('../assets/iconlylightoutlineplus2.png')}
            />
            <Image
              style={[styles.iconlylightOutlineplus, styles.messageIconLayout]}
              contentFit="cover"
              source={require('../assets/iconlylightoutlinesetting5.png')}
            />
          </View>

          <Stories />

          {showRetos ? <VotacionDeRetos /> : <Post />}
        </View>

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
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPanel}
          onRequestClose={() => dispatch(setPanel(false))}
        >
          <TouchableWithoutFeedback onPress={handleMenu}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <MENPRINCIPAL setMenuVisible={setMenuVisible} />
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
    borderRadius: Border.br_4xl,
    position: 'absolute'
  },
  vectorIconPosition: {
    left: '50%',
    top: '50%'
  },
  buttonPosition: {
    top: 36,
    position: 'absolute'
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
  popular: {
    fontWeight: '700'
  },
  popularWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    overflow: 'hidden'
  },
  trending: {
    fontWeight: '300',
    color: Color.textPlaceholder
  },
  tabs: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs
  },
  instanceParent: {
    top: 80,
    flexDirection: 'row',
    left: 20,
    position: 'absolute'
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
    left: 276,
    justifyContent: 'center',
    alignItems: 'center',
    top: 36,
    flexDirection: 'row'
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
    top: 36,
    position: 'absolute',
    left: 10
  }
})

export default Muro
