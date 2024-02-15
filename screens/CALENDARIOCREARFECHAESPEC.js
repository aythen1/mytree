import React, { useState, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, Color, Border, FontSize } from '../GlobalStyles'
import Calendario from '../components/Calendario'
import ENTRADACREADA from '../components/ENTRADACREADA'
import OpcionesModal from '../components/OpcionesModal'

const CALENDARIOCREARFECHAESPEC = () => {
  const navigation = useNavigation()

  const [nuevaDescripcion, setNuevaDescripcion] = useState('')
  const [openCalendar, setOpenCalendar] = useState(false)
  const [modalCreate, setModalCreate] = useState(false)
  const [modalOpcionesVisible, setModalOpcionesVisible] = useState(false)
  const [category, setCategory] = useState([
    'Aniversario',
    'Graduación',
    'Compra de primer coche'
  ])

  const onCloseModalCreate = () => {
    setModalCreate(false)
  }

  const handlePress = useCallback(() => {
    setOpenCalendar((prevState) => !prevState)
  }, [])

  return (
    <ScrollView
      style={styles.calendarioCrearFechaEspec}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.paddingBottom}>
        <View>
          <View style={[styles.image6Wrapper, styles.framePosition]}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require('../assets/image-6.png')}
            />
          </View>
          <View style={[styles.backParent, styles.buttonBarFlexBox]}>
            <Pressable
              style={styles.backLayout}
              onPress={() => navigation.navigate('CALENDARIO')}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Text style={[styles.crearFechaEspecial, styles.titleTypo]}>
              Crear fecha especial
            </Text>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.frameChild, styles.framePosition]} />
          <View style={[styles.frameItem, styles.framePosition]} />
          <View style={[styles.fieldWithTitleParent]}>
            <View style={styles.innerContainer}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>Categoría</Text>
              </View>
              <Pressable
                style={[styles.field, styles.fieldSpaceBlock]}
                onPress={() => setModalOpcionesVisible(true)}
              >
                <View style={styles.placeholderInput}>
                  <Text style={[styles.search, styles.searchLayout]}>
                    Selecione la categoría de la fecha especial
                  </Text>
                  <Image
                    style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown24.png')}
                  />
                </View>
              </Pressable>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Descripción
                </Text>
              </View>
              <View style={[styles.field1, styles.fieldSpaceBlock]}>
                <View style={styles.placeholderInput}>
                  <TextInput
                    placeholder="Describa la fecha especial"
                    value={nuevaDescripcion}
                    onChangeText={(text) => setNuevaDescripcion(text)}
                    style={[styles.search, styles.searchLayout]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>Fecha</Text>
              </View>
              <Pressable
                style={[styles.field, styles.fieldSpaceBlock]}
                onPress={handlePress}
              >
                <View style={styles.placeholderInput}>
                  <Text style={[styles.search, styles.searchLayout]}>
                    21/02/2023
                  </Text>
                </View>
                <Image
                  style={[styles.iconlylightOutlinecalendar, styles.backLayout]}
                  contentFit="cover"
                  source={require('../assets/iconlylightoutlinecalendar.png')}
                />
              </Pressable>
            </View>
            {openCalendar ? (
              <View style={styles.modalCalendar}>
                <Calendario />
              </View>
            ) : null}
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>Ubicación</Text>
              </View>
              <View style={[styles.field, styles.fieldSpaceBlock]}>
                <Text style={[styles.search, styles.searchLayout]}>
                  Ubicación
                </Text>
                <View style={styles.placeholderInput3} />
                <Pressable
                  style={styles.iconlybulklocation}
                  // onPress={openIconlyBulkLocation}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require('../assets/iconlybulklocation3.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.titleBaseParent}>
              <View style={styles.titleBase}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Etiqueta a tus invitados
                </Text>
              </View>
              <Pressable
                style={[styles.field, styles.fieldSpaceBlock]}
                // onPress={openFieldContainer4}
              >
                <View style={styles.placeholderInput}>
                  <Text style={[styles.search, styles.searchLayout]}>
                    Agrega invitados
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconlyboldaddUser,
                    styles.arrowDown2IconLayout
                  ]}
                  contentFit="cover"
                  source={require('../assets/iconlyboldadduser1.png')}
                />
              </Pressable>
            </View>
            <View style={styles.frameGroup}>
              <Text style={[styles.title, styles.titleTypo]}>
                Opciones de Privacidad
              </Text>
              <Image
                style={styles.arrowDown2Icon1}
                contentFit="cover"
                source={require('../assets/arrowdown210.png')}
              />
            </View>
            <View style={styles.buttonBarParent}>
              <View style={[styles.buttonBar, styles.buttonBarFlexBox]}>
                <Pressable
                  style={[styles.button, styles.buttonSpaceBlock]}
                  onPress={() => navigation.navigate('CALENDARIO')}
                >
                  <Text style={styles.signIn}>Cancelar</Text>
                </Pressable>
                <LinearGradient
                  style={[styles.button1, styles.button1FlexBox]}
                  locations={[0, 1]}
                  colors={['#dee274', '#7ec18c']}
                >
                  <Text style={[styles.signIn1, styles.signTypo]}>
                    Programar Envío
                  </Text>
                </LinearGradient>
              </View>
              <LinearGradient
                style={styles.button2}
                locations={[0, 1]}
                colors={['#dee274', '#7ec18c']}
              >
                <Pressable
                  style={[styles.pressable, styles.button1FlexBox]}
                  onPress={() => setModalCreate(true)}
                >
                  <Text style={[styles.signIn2, styles.signTypo]}>Enviar</Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </View>

        {modalCreate && (
          <Modal animationType="fade" transparent={true} visible={modalCreate}>
            <TouchableWithoutFeedback onPress={() => setModalCreate(false)}>
              <View style={styles.modalOverlay}>
                <View>
                  <ENTRADACREADA
                    onClose={onCloseModalCreate}
                    message={'Enviado!'}
                    isNavigate={'CALENDARIO'}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}

        {/* {modalOpcionesVisible && (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalOpcionesVisible}
          >
            <TouchableWithoutFeedback
              onPress={() => setModalOpcionesVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View>
                  <OpcionesModal
                    opciones={category}
                    visible={modalOpcionesVisible}
                    onClose={() => setModalOpcionesVisible(false)}
                    onAddOption={(nuevaOpcion) => {
                      setCategory((prevCategory) => [
                        ...prevCategory,
                        nuevaOpcion
                      ])
                      setModalOpcionesVisible(false)
                    }}
                    isAdd={true}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )} */}

        <Modal animationType="slide" transparent visible={modalOpcionesVisible}>
          <View style={styles.arrowDown2Icon1Overlay}>
            <Pressable
              style={styles.arrowDown2Icon1Bg}
              onPress={() => setModalOpcionesVisible(false)}
            />
            <OpcionesModal
              opciones={category}
              visible={modalOpcionesVisible}
              onClose={() => setModalOpcionesVisible(false)}
              onAddOption={(nuevaOpcion) => {
                setCategory((prevCategory) => [...prevCategory, nuevaOpcion])
                setModalOpcionesVisible(false)
              }}
              isAdd={true}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  framePosition: {
    left: 20
  },
  arrowDown2Icon1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  arrowDown2Icon1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  titleTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  fieldSpaceBlock: {
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.fAFAFA,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: 'row',
    width: '100%'
  },
  searchLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_sm
  },
  arrowDown2IconLayout: {
    width: 24
  },
  backLayout: {
    height: 24,
    width: 24
  },
  buttonBarFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    flex: 1
  },
  button1FlexBox: {
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  signTypo: {
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frameChild: {
    alignItems: 'center',
    backgroundColor: Color.white
  },
  frameItem: {
    alignItems: 'center',
    backgroundColor: Color.white
  },
  title: {
    lineHeight: 19,
    fontWeight: '500',
    color: Color.textTextPrimary,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base
  },
  titleBase: {
    paddingBottom: Padding.p_7xs,
    flexDirection: 'row'
  },
  search: {
    color: Color.textPlaceholder,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  placeholderInput: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  arrowDown2Icon: {
    height: 12,
    marginLeft: '6%'
  },
  field: {
    alignItems: 'center'
  },
  field1: {
    height: 129
  },
  titleBaseParent: {
    marginTop: 22,
    zIndex: 0
  },
  iconlylightOutlinecalendar: {
    marginLeft: 24
  },
  placeholderInput3: {
    marginLeft: 24,
    flexDirection: 'row',
    flex: 1
  },
  iconlybulklocation: {
    width: 21,
    height: 29,
    marginLeft: 24
  },
  iconlyboldaddUser: {
    height: 21,
    left: 5
  },
  arrowDown2Icon1: {
    width: 9,
    height: 16,
    marginLeft: 20
  },
  frameGroup: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center'
  },
  signIn: {
    textAlign: 'center',
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  button: {
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    borderRadius: Border.br_11xl,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white
  },
  signIn1: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    color: Color.white,
    letterSpacing: 0
  },
  button1: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    flex: 1,
    marginLeft: 20
  },
  buttonBar: {
    paddingVertical: Padding.p_3xs,
    justifyContent: 'center',
    backgroundColor: Color.white
  },
  signIn2: {
    letterSpacing: 1,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    flex: 1
  },
  pressable: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    width: '100%'
  },
  button2: {
    marginTop: 10,
    borderRadius: Border.br_11xl
  },
  buttonBarParent: {
    marginTop: 22,
    alignItems: 'center'
  },
  fieldWithTitleParent: {
    alignItems: 'center'
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  image6Wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon1: {
    overflow: 'hidden'
  },
  crearFechaEspecial: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.negro,
    marginLeft: 20
  },
  backParent: {
    marginBottom: 15
  },
  calendarioCrearFechaEspec: {
    flex: 1,
    backgroundColor: Color.white,
    padding: Padding.p_xl
  },
  innerContainer: {
    width: '100%'
  },
  paddingBottom: {
    paddingBottom: 60
  },
  modalCalendar: {
    position: 'absolute',
    zIndex: 1,
    top: '20%',
    width: '80%',
    right: '20%'
  },
  modalOverlay: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CALENDARIOCREARFECHAESPEC
