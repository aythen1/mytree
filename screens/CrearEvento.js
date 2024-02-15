import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Padding, FontSize, Color, Border } from '../GlobalStyles'
import ENTRADACREADA from '../components/ENTRADACREADA'
import OpcionesModal from '../components/OpcionesModal'

const CrearEvento = () => {
  const navigation = useNavigation()

  const [modalCreate, setModalCreate] = useState(false)
  const [modalOpcionesVisible, setModalOpcionesVisible] = useState(false)
  const [currentOptionsIndex, setCurrentOptionsIndex] = useState(0)

  const options = [
    ['Opcion 1', 'Opcion 2', 'Opcion 3'],
    ['Lugar 1', 'Lugar 2', 'Lugar 3'],
    ['Mensajeria MyTree', 'Correo postal', 'QR'],
    ['Invitado 1', 'Invitado 2', 'Invitado 3'],
    ['Diseño 1', 'Diseño 2', 'Diseño 3']
  ]

  // const [title, setTitle] = useState(['Opcion 1', 'Opcion 2', 'Opcion 3'])
  // const [sendForm, setSendForm] = useState([
  //   'Mensajeria MyTree',
  //   'Correo postal',
  //   'QR'
  // ])

  const showOptionsArray = (index) => {
    setCurrentOptionsIndex(index)
    setModalOpcionesVisible(true)
  }

  const onCloseModalCreate = () => {
    setModalCreate(false)
  }

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={[styles.crearEvento]}>
        <View>
          <View style={styles.image6Wrapper}>
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
                style={styles.iconLayout}
                contentFit="cover"
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Text style={[styles.crearEventoText, styles.titleTypo]}>
              Crear evento
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>
              Titulo del evento
            </Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            onPress={() => showOptionsArray(0)}
          >
            <View style={styles.placeholderInput}>
              <Image
                style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                contentFit="cover"
                source={require('../assets/arrowdown24.png')}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>Fecha y hora</Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            // onPress={() => showOptionsArray(1)}
          >
            <View style={styles.placeholderInput}>
              <Image
                style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                contentFit="cover"
                source={require('../assets/arrowdown24.png')}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>Lugar</Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            onPress={() => showOptionsArray(1)}
          >
            <View style={styles.placeholderInput}>
              <Image
                style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                contentFit="cover"
                source={require('../assets/arrowdown24.png')}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>
              Diseño de la invitación
            </Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            onPress={() => showOptionsArray(4)}
          >
            <View style={styles.placeholderInput}>
              <Image
                style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                contentFit="cover"
                source={require('../assets/arrowdown24.png')}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>Forma de envío</Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            onPress={() => showOptionsArray(2)}
          >
            <View style={styles.placeholderInput}>
              <Image
                style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                contentFit="cover"
                source={require('../assets/arrowdown24.png')}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>Invitados</Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            onPress={() => showOptionsArray(3)}
          >
            <View style={styles.placeholderInput}>
              <Image
                style={[styles.arrowDown2Icon, styles.arrowDown2IconLayout]}
                contentFit="cover"
                source={require('../assets/arrowdown24.png')}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>
              Código del evento
            </Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            onPress={() => setModalOpcionesVisible(true)}
          >
            <View style={styles.placeholderInput}>
              <TextInput placeholder="Añadir #Codigo" />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>
              ¿Fiesta sorpresa?
            </Text>
          </View>
          <Pressable
            style={[styles.field, styles.fieldSpaceBlock]}
            // onPress={() => showOptionsArray(4)}
          >
            <View style={styles.placeholderInput}>
              <Text>Si / No</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.privacyContainer}>
          <View style={styles.titleBase}>
            <Text style={[styles.title, styles.titleTypo]}>
              Opciones de privacidad
            </Text>
            <Image
              style={[styles.arrowDown2Icon2, styles.arrowDown2IconLayout]}
              contentFit="cover"
              source={require('../assets/arrowdown24.png')}
            />
          </View>
        </View>

        <View style={[styles.buttonBar, styles.fieldFlexBox]}>
          <Pressable
            style={[styles.button, styles.buttonSpaceBlock]}
            onPress={() => navigation.navigate('CALENDARIO')}
          >
            <Text style={[styles.signIn, styles.signTypo]}>Cancelar</Text>
          </Pressable>
          <LinearGradient
            style={styles.button1}
            locations={[0, 1]}
            colors={['#dee274', '#7ec18c']}
          >
            <Pressable
              style={[styles.pressable, styles.pressableFlexBox]}
              // onPress={openButtonContainer1}
            >
              <Text style={[styles.signIn1, styles.signTypo]}>
                Programar Envío
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
        <LinearGradient
          style={styles.button2}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Pressable
            style={[styles.pressable1, styles.pressableFlexBox]}
            onPress={() => setModalCreate(true)}
          >
            <Text style={[styles.signIn2, styles.signTypo]}>Enviar</Text>
          </Pressable>
        </LinearGradient>

        <View style={styles.frameChild} />
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

      {modalOpcionesVisible && (
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
                  opciones={options[currentOptionsIndex]}
                  visible={modalOpcionesVisible}
                  onClose={() => setModalOpcionesVisible(false)}
                  onAddOption={(nuevaOpcion) => {
                    options[currentOptionsIndex].push(nuevaOpcion)
                    onCloseModalOpciones()
                  }}
                  isAdd={true}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTypo: {
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  fieldFlexBox: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    flex: 1
  },
  signTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  pressableFlexBox: {
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: Color.textTextPrimary,
    fontWeight: '500',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    letterSpacing: 0
  },
  search: {
    color: Color.textPlaceholder,
    textAlign: 'left',
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
    lineHeight: 24
  },
  placeholderInput: {
    flexDirection: 'row',
    flex: 1
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  arrowDown2: {
    height: 12,
    marginLeft: 24,
    width: 24
  },
  field: {
    alignItems: 'center'
  },
  fieldSpaceBlock: {
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.fAFAFA,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: 'row',
    width: '100%'
  },
  text: {
    color: Color.white
  },
  arrowDown2Icon: {
    width: 9,
    height: 16,
    marginLeft: '90%'
  },
  arrowDown2Icon2: {
    width: 9,
    height: 16,
    marginLeft: '33.7%'
  },
  signIn: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    letterSpacing: 0
  },
  button: {
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    height: 52,
    borderRadius: Border.br_11xl,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white
  },

  signIn1: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    letterSpacing: 0,
    color: Color.white
  },
  pressable: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    height: '100%'
  },
  button1: {
    height: 52,
    marginLeft: 20,
    borderRadius: Border.br_11xl
  },
  buttonBar: {
    paddingVertical: Padding.p_3xs,
    marginTop: 8,
    justifyContent: 'center'
  },
  signIn2: {
    letterSpacing: 1,
    color: Color.white,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    flex: 1
  },
  pressable1: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    width: '100%'
  },
  button2: {
    marginTop: 8,
    borderRadius: Border.br_11xl
  },
  frameChild: {
    padding: Padding.p_3xs,
    height: 105,
    marginTop: 8,
    backgroundColor: Color.white
  },
  back: {
    height: 24,
    width: 24
  },
  backParent: {
    marginBottom: 15
  },
  navigationIcon: {
    height: 105,
    left: 0
  },
  crearEvento: {
    flex: 1,
    backgroundColor: Color.white,
    padding: Padding.p_xl
  },
  titleBase: {
    paddingBottom: Padding.p_7xs,
    flexDirection: 'row'
  },
  arrowDown2IconLayout: {
    width: 24
  },
  privacyContainer: {
    marginTop: '6%'
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  image6Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3
  },
  buttonBarFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backLayout: {
    height: 24,
    width: 24
  },
  crearEventoText: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.negro,
    marginLeft: 20
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  modalOverlay: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CrearEvento
