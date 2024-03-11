import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Border, Padding } from '../GlobalStyles'
import ENTRADACREADA from '../components/ENTRADACREADA'
import OpcionesModal from '../components/OpcionesModal'

const PerfilConfiguracion = () => {
  const navigation = useNavigation()

  const [modalCreate, setModalCreate] = useState(false)
  const [modalOpcionesVisible, setModalOpcionesVisible] = useState(false)
  const [currentOptionsIndex, setCurrentOptionsIndex] = useState(0)

  const options = [
    ['Inglés', 'Español', 'Francés'],
    ['España', 'Argentina', 'Uruguay'],
    [
      'MM/dd/aaaa hh:mm:ss tt',
      'M/d/yy h:m:s tt',
      'ddd:MMM:dd:aaaa',
      'dddd,MMMM:dd:aaaa'
    ],
    ['GMT -6', 'GMT -5', 'GMT -4', 'GMT -3'],
    ['Sábado', 'Domingo', 'Lunes'],
    ['Anglosajona', 'Latina', 'Otra']
  ]

  const showOptionsArray = (index) => {
    setCurrentOptionsIndex(index)
    setModalOpcionesVisible(true)
  }

  const onCloseModalCreate = () => {
    setModalCreate(false)
  }

  return (
    <ScrollView style={styles.frameParent} showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <View>
          <View style={styles.parentIcons}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require('../assets/image-6.png')}
            />
            <View style={styles.iconlylightOutlinecalendarParent}>
              <Image
                style={styles.iconlylightOutlinecalendar}
                contentFit="cover"
                source={require('../assets/iconlylightoutlinecalendar5.png')}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require('../assets/document9.png')}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require('../assets/iconlylightoutlinesetting7.png')}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.iconlylightOutlinecalendar}
              onPress={() => navigation.navigate('CALENDARIO')}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Text style={styles.ajustes}>Ajustes del calendario</Text>
          </View>
        </View>

        <View style={styles.centralContainer}>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Idioma
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Español
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(0)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Región
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                España
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(1)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Formato de Fecha y Hora
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                MM/DD/AAAA hh:mm:ss tt
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(2)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View>
          {/* <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Formato de hora
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                HH:MM:SS: TT
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(3)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View> */}
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Zona horaria
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                GMT -3
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(3)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Inicio de semana
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Domingo
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(4)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Cultura
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Anglosajona
              </Text>
            </View>
            <Pressable onPress={() => showOptionsArray(5)}>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require('../assets/vector47.png')}
              />
            </Pressable>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Color de fondo
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Por defecto
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Añadir calendario laboral según población
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Desactivado
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Notificación con dos semanas previas
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Desactivado
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
        </View>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Pressable
            style={[styles.pressable, styles.pressableFlexBox]}
            onPress={() => setModalCreate(true)}
          >
            <Text style={styles.signIn}>Guardar</Text>
          </Pressable>
        </LinearGradient>
        {/* 
        {modalCreate && (
          <Modal animationType="fade" transparent={true} visible={modalCreate}>
            <TouchableWithoutFeedback onPress={() => setModalCreate(false)}>
              <View style={styles.modalOverlay}>
                <View>
                  <ENTRADACREADA
                    onClose={onCloseModalCreate}
                    message={'Guardado!'}
                    isNavigate={'CALENDARIO'}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )} */}

        <Modal animationType="slide" transparent visible={modalCreate}>
          <View style={styles.buttonContainer2Overlay}>
            <Pressable
              style={styles.buttonContainer2Bg}
              onPress={() => setModalCreate(false)}
            />
            <ENTRADACREADA
              onClose={onCloseModalCreate}
              message={'Guardado!'}
              isNavigate={'CALENDARIO'}
            />
          </View>
        </Modal>

        <Modal animationType="slide" transparent visible={modalOpcionesVisible}>
          <View style={styles.arrowDown2Icon1Overlay}>
            <Pressable
              style={styles.arrowDown2Icon1Bg}
              onPress={() => setModalOpcionesVisible(false)}
            />
            <OpcionesModal
              opciones={options[currentOptionsIndex]}
              visible={modalOpcionesVisible}
              onClose={() => setModalOpcionesVisible(false)}
              onAddOption={(nuevaOpcion) => {
                options[currentOptionsIndex].push(nuevaOpcion)
                onCloseModalOpciones()
              }}
              isAdd={false}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  frameParent: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  },
  viewContainer: {
    paddingHorizontal: Padding.p_xl,
    paddingBottom: 60
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  brunoPhamTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  vectorIconLayout: {
    height: 21,
    width: 21
  },
  frameContainerFlexBox: {
    flexDirection: 'row'
  },
  pressableFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  cambiarFotoDe: {
    color: Color.negro,
    textAlign: 'left',
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  brunoPham: {
    color: Color.grisGeneral,
    marginTop: 10,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  nombreCompletoParent: {
    width: '80%'
  },
  vectorIcon1: {
    marginLeft: 20
  },
  frameContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  frameChild: {
    height: '0.5%',
    width: 388,
    marginTop: 20
  },
  deleteIcon: {
    width: 18,
    height: 20,
    overflow: 'hidden'
  },
  eliminarDatos: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    marginLeft: 15,
    color: Color.negro,
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0
  },
  deleteParent: {
    marginTop: 38,
    alignItems: 'center'
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton
  },
  button: {
    marginTop: 38,
    borderRadius: Border.br_11xl
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  documentIcon: {
    overflow: 'hidden'
  },
  parentIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '5%'
  },
  iconlylightOutlinecalendarParent: {
    width: '100%',
    left: '35%',
    flexDirection: 'row'
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  backParent: {
    marginTop: 30
  },
  icon: {
    height: '100%',
    overflow: 'hidden'
  },
  iconLayout1: {
    width: '100%',
    overflow: 'hidden'
  },
  ajustes: {
    fontSize: FontSize.size_5xl,
    marginLeft: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  centralContainer: {
    left: '3%'
  },
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
  buttonContainer2Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  buttonContainer2Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  }
})

export default PerfilConfiguracion
