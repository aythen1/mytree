import React, { useCallback, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, Border, FontSize } from '../GlobalStyles'
import NavBarDiario from '../components/NavBarDiario'
import Humor from '../components/Humor'
import ReflexionDiaria from '../components/ReflexionDiaria'
import DescubriendoElMundo from '../components/DescubriendoElMundo'
import CalebrandoLogros from '../components/CelebrandoLogros'
import DesafiosSuperados from '../components/DesafiosSuperados'
import RisaAnecdotas from '../components/RisaAnecdotas'
import Personalizada from '../components/Personalizada'
import NavMedia from '../components/NavMedia'
import ENTRADACREADA from '../components/ENTRADACREADA'
import LupaSVG from '../components/svgs/LupaSVG'
import BookSVG from '../components/svgs/BookSVG'
import SettingMuroSVG from '../components/svgs/SettingMuroSVG'
import HeaderIcons from '../components/HeaderIcons'

const MIDIARIOENTRADATEXTOPL7 = () => {
  const navigation = useNavigation()
  const [showEdit, setShowEdit] = useState(false)
  const [isSection, setIsSection] = useState('')
  const [modalCreate, setModalCreate] = useState(false)

  const [groupIcon1Visible, setGroupIcon1Visible] = useState(false)

  const openGroupIcon1 = useCallback(() => {
    setGroupIcon1Visible(true)
  }, [])

  const closeGroupIcon1 = useCallback(() => {
    setGroupIcon1Visible(false)
  }, [])

  function renderSection(isSection) {
    switch (isSection) {
      case 'mundo':
        return <DescubriendoElMundo />
      case 'reflexion':
        return <ReflexionDiaria />
      case 'logros':
        return <CalebrandoLogros />
      case 'desafios':
        return <DesafiosSuperados />
      case 'risas':
        return <RisaAnecdotas />
      case 'personalizada':
        return <Personalizada />
      default:
        return <DescubriendoElMundo />
    }
  }

  const onCloseModalCreate = () => {
    setModalCreate(false)
  }

  return (
    <View style={styles.miDiarioEntradaTextoPl}>
      <View
        style={{
          top: 10,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15
        }}
      >
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <HeaderIcons icons={[<LupaSVG />, <BookSVG />, <SettingMuroSVG />]} />
      </View>

      <NavBarDiario setIsSection={setIsSection} isSection={isSection} />

      <View style={{ flex: 1, marginTop: 20, width: '100%' }}>
        {!showEdit ? (
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => setShowEdit(!showEdit)}
          >
            <Text style={[styles.text, styles.textTypo]}>07</Text>
            <Text style={[styles.jul2023, styles.textTypo]}>jul. 2023</Text>
            <Image
              style={styles.iconlycurvedarrowDown2}
              contentFit="cover"
              source={require('../assets/iconlycurvedarrowdown2.png')}
            />
          </Pressable>
        ) : (
          <Pressable
            style={styles.frameParent}
            onPress={() => {
              setShowEdit(!showEdit)
              // navigation.navigate('MIDIARIOENTRADATEXTOPL1')
            }}
          >
            {showEdit && (
              <View style={styles.groupParent}>
                <Pressable
                  style={styles.wrapper}
                  onPress={() => setShowEdit(false)}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require('../assets/group-68463.png')}
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
                      style={[styles.pressable]}
                      onPress={() => setModalCreate(true)}
                    >
                      <Text style={[styles.signIn, styles.ttTypo]}>
                        Guardar
                      </Text>
                    </Pressable>
                  </LinearGradient>
                </View>
              </View>
            )}

            <Modal animationType="slide" transparent visible={modalCreate}>
              <View style={styles.arrowDown2Icon1Overlay}>
                <Pressable
                  style={styles.arrowDown2Icon1Bg}
                  onPress={() => setModalCreate(false)}
                />
                <ENTRADACREADA
                  onClose={() => setModalCreate(false)}
                  message={'Entrada Creada'}
                  isNavigate={'MIDIARIOPANTALLAPERSONAL'}
                />
              </View>
            </Modal>
          </Pressable>
        )}

        {/* renderizado de secciones */}
        {renderSection(isSection)}
        {/* -------------------- */}
      </View>

      {showEdit && <NavMedia />}

      <Modal animationType="slide" transparent visible={groupIcon1Visible}>
        <View style={styles.arrowDown2Icon1Overlay}>
          <Pressable
            style={styles.arrowDown2Icon1Bg}
            onPress={closeGroupIcon1}
          />
          <Humor onClose={closeGroupIcon1} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrowDown2Icon1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  arrowDown2Icon1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  groupParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  groupFlexBox: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pressable: {
    // borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton
  },
  wrapper: {
    height: 24,
    width: 24
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  container: {
    marginLeft: 20
  },
  signIn: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    textAlign: 'center'
  },
  ttTypo: {
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textTypo: {
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  hoyLoHeFlexBox: {
    marginTop: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignSelf: 'stretch'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  frameFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  vectorFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm,
    width: 40,
    justifyContent: 'space-between',
    borderRadius: Border.br_8xs,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  frameLayout: {
    zIndex: 0,
    height: 36,
    width: 40,
    backgroundColor: Color.secundario,
    borderRadius: Border.br_8xs
  },
  vectorIconPosition: {
    left: 7,
    zIndex: 1,
    width: 26,
    position: 'absolute'
  },
  miDiarioEntradaTextoPlChild: {
    height: 390,
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 64,
    width: '100%'
  },
  text: {
    fontWeight: '700',
    lineHeight: 36,
    fontSize: FontSize.size_5xl
  },
  jul2023: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    marginLeft: 10
  },
  iconlycurvedarrowDown2: {
    width: 14,
    height: 7,
    marginLeft: 10
  },
  parent: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  descubriendoElMundo: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl
  },
  hoyLoHe: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    display: 'flex',
    alignItems: 'center'
    // flex: 1
  },
  frameParent: {
    // top: 133,
    width: '100%'
    // height: 301
  },
  image6Icon: {
    // top: 3,
    width: 87,
    height: 55
  },
  iconlylightOutlinesearch: {
    height: 24,
    width: 24
  },
  documentIcon: {
    overflow: 'hidden'
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
    height: 36,
    backgroundColor: Color.secundario,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm
  },
  frameChild: {
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
  vectorIcon2: {
    top: 4,
    height: 28
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
  vectorContainer: {
    backgroundColor: Color.colorOldlace
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
  miDiarioEntradaTextoPl: {
    // borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    width: '100%',
    // overflow: 'hidden',
    flex: 1
  }
})

export default MIDIARIOENTRADATEXTOPL7
