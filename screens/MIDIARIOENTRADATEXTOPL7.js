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
      <LinearGradient
        style={[
          styles.miDiarioEntradaTextoPlChild,
          styles.navigationIconLayout
        ]}
        locations={[0, 1]}
        colors={['rgba(221, 219, 246, 0.37)', 'rgba(245, 245, 247, 0)']}
      />
      <NavBarDiario setIsSection={setIsSection} isSection={isSection} />

      <Pressable
        style={[styles.frameParent, styles.image6IconPosition]}
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
                  <Text style={[styles.signIn, styles.ttTypo]}>Guardar</Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        )}

        {modalCreate && (
          <Modal animationType="fade" transparent={true} visible={modalCreate}>
            <TouchableWithoutFeedback onPress={() => setModalCreate(false)}>
              <View style={styles.modalOverlay}>
                <View>
                  <ENTRADACREADA
                    onClose={onCloseModalCreate}
                    message={'Entrada Creada'}
                    isNavigate={'MIDIARIOPANTALLAPERSONAL'}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}

        {!showEdit && (
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
        )}

        {/* renderizado de secciones */}
        {renderSection(isSection)}
        {/* -------------------- */}
      </Pressable>

      <NavMedia />

      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require('../assets/image-6.png')}
      />
      <View
        style={[styles.iconlylightOutlinesearchParent, styles.parentFlexBox]}
      >
        <Image
          style={styles.iconlylightOutlinesearch}
          contentFit="cover"
          source={require('../assets/iconlylightoutlinesearch5.png')}
        />
        <Image
          style={[styles.documentIcon, styles.documentIconLayout]}
          contentFit="cover"
          source={require('../assets/document3.png')}
        />
        <Image
          style={styles.documentIconLayout}
          contentFit="cover"
          source={require('../assets/iconlylightoutlinesetting1.png')}
        />
      </View>
      <Image
        style={[styles.navigationIcon, styles.navigationIconLayout]}
        contentFit="cover"
        source={require('../assets/navigation25.png')}
      />

      <Modal animationType="fade" transparent visible={groupIcon1Visible}>
        <View style={styles.groupIcon1Overlay}>
          <Pressable style={styles.groupIcon1Bg} onPress={closeGroupIcon1} />
          <Humor onClose={closeGroupIcon1} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationIconLayout: {
    position: 'absolute'
  },
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  groupFlexBox: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  pressable: {
    borderRadius: Border.br_11xl,
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
  image6IconPosition: {
    left: 20,
    position: 'absolute'
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
    height: 390,
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 64,
    width: 428
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
    alignItems: 'center',
    flex: 1
  },
  frameParent: {
    top: 133,
    width: 388,
    height: 301
  },
  image6Icon: {
    top: 3,
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
  frameGroup: {
    backgroundColor: Color.colorHoneydew_100,
    height: 49,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_xl,
    borderRadius: Border.br_8xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 428,
    left: 0,
    top: 64,
    position: 'absolute'
  },
  miDiarioEntradaTextoPl: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    width: '100%',
    height: 926,
    overflow: 'hidden',
    flex: 1
  }
})

export default MIDIARIOENTRADATEXTOPL7
