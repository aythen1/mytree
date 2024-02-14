import React, { useState, useCallback } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  ScrollView,
  TextInput
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Cancion1 from '../components/Cancion1'
import Etiquetar from '../components/Etiquetar'
import Lugar3 from '../components/Lugar3'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'

const CrearAlbum = () => {
  const [buttonContainer1Visible, setButtonContainer1Visible] = useState(false)
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false)
  const [frameContainer4Visible, setFrameContainer4Visible] = useState(false)
  const navigation = useNavigation()

  const openButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(true)
  }, [])

  const closeButtonContainer1 = useCallback(() => {
    setButtonContainer1Visible(false)
  }, [])

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true)
  }, [])

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false)
  }, [])

  const openFrameContainer4 = useCallback(() => {
    setFrameContainer4Visible(true)
  }, [])

  const closeFrameContainer4 = useCallback(() => {
    setFrameContainer4Visible(false)
  }, [])

  return (
    <>
      <ScrollView>
        <View style={styles.crearAlbum}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require('../assets/image-6.png')}
          />

          <View style={styles.crearLbumParent}>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Text style={[styles.crearLbum, styles.eventoTypo]}>
              Crear álbum
            </Text>
            <Text style={[styles.crear, styles.crearTypo]}>Crear</Text>
          </View>

          <View style={styles.field}>
            <TextInput
              style={styles.describeLoQue}
              placeholder="Describe lo que sientes..."
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 15
              }}
            >
              <Text style={[styles.evento, styles.eventoTypo]}>Evento:</Text>
              <View style={styles.button}>
                <Text style={[styles.miPrimeraBicicleta, styles.aadirClr]}>
                  #Mi primera bicicleta
                </Text>
              </View>
              <Pressable style={styles.button1} onPress={openButtonContainer1}>
                <Text style={[styles.aadir, styles.aadirClr]}>Añadir #</Text>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 15
            }}
          />
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.iconlybolddocument}
              contentFit="cover"
              source={require('../assets/iconlybolddocument.png')}
            />
            <Text style={[styles.anexoArchivo, styles.etiquetarTypo]}>
              Anexo archivo
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 20
            }}
          />

          <Pressable style={styles.parentFlexBox} onPress={openFrameContainer1}>
            <Image
              style={styles.iconlyboldaddUser}
              contentFit="cover"
              source={require('../assets/iconlyboldadduser.png')}
            />
            <Text style={[styles.etiquetar, styles.etiquetarTypo]}>
              Etiquetar
            </Text>
          </Pressable>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 20
            }}
          />

          <View style={styles.parentFlexBox}>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require('../assets/group.png')}
            />
            <Text style={[styles.aadirAudio, styles.etiquetarTypo]}>
              Añadir audio
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 20
            }}
          />

          <View style={styles.parentFlexBox}>
            <Image
              style={styles.iconlybolddocument}
              contentFit="cover"
              source={require('../assets/vector14.png')}
            />
            <Text style={[styles.anexoArchivo, styles.etiquetarTypo]}>
              Fecha
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 20
            }}
          />

          <Pressable style={styles.parentFlexBox} onPress={openFrameContainer4}>
            <Image
              style={styles.iconlybulklocation}
              contentFit="cover"
              source={require('../assets/iconlybulklocation.png')}
            />
            <Text style={[styles.aadirAudio, styles.etiquetarTypo]}>Lugar</Text>
          </Pressable>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 20
            }}
          />

          <View style={styles.parentFlexBox}>
            <View style={[styles.imageParent, styles.backPosition]}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require('../assets/image3.png')}
              />
              <Text style={[styles.aadirAudio, styles.etiquetarTypo]}>
                Añadir a un álbum
              </Text>
            </View>
            <Image
              style={[styles.arrowDown2Icon1, styles.iconChildLayout]}
              contentFit="cover"
              source={require('../assets/arrowdown21.png')}
            />
          </View>

          <View
            style={{
              borderWidth: 0.2,
              backgroundColor: 'black',
              marginVertical: 20
            }}
          />

          <View style={styles.parentFlexBox}>
            <View style={styles.opcionesDePrivacidadWrapper}>
              <Text style={[styles.opcionesDePrivacidad, styles.crearTypo]}>
                Opciones de Privacidad
              </Text>
            </View>
            <Image
              style={styles.arrowDown2Icon}
              contentFit="cover"
              source={require('../assets/arrowdown2.png')}
            />
          </View>

          <LinearGradient
            style={styles.button2}
            locations={[0, 1]}
            colors={['#dee274', '#7ec18c']}
          >
            <Pressable
              style={[styles.pressable, styles.parentFlexBox]}
              onPress={() => navigation.navigate('CrearLbum')}
            >
              <Text style={styles.signIn}>Subir</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={buttonContainer1Visible}>
        <View style={styles.buttonContainer1Overlay}>
          <Pressable
            style={styles.buttonContainer1Bg}
            onPress={closeButtonContainer1}
          />
          <Cancion1 onClose={closeButtonContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <Etiquetar onClose={closeFrameContainer1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameContainer4Visible}>
        <View style={styles.frameContainer4Overlay}>
          <Pressable
            style={styles.frameContainer4Bg}
            onPress={closeFrameContainer4}
          />
          <Lugar3 onClose={closeFrameContainer4} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%'
  },

  eventoTypo: {
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  buttonLayout: {
    height: 29,
    position: 'absolute'
  },
  aadirClr: {
    color: Color.primario1,
    position: 'absolute'
  },
  parentFlexBox: {
    // marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  etiquetarTypo: {
    lineHeight: 19,
    color: Color.gris,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '500'
  },
  iconChildLayout: {
    maxHeight: '100%',
    position: 'absolute'
  },
  crearTypo: {
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    fontSize: FontSize.size_lg
  },

  image6Icon: {
    width: 87,
    height: 55,
    left: 20,
    top: 3,
    position: 'absolute'
  },
  describeLoQue: {
    // top: 20,
    color: Color.grisClaro,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    fontSize: FontSize.size_lg
  },
  evento: {
    // top: 62,
    fontWeight: '500',
    fontSize: FontSize.size_lg,
    color: Color.negro
    // left: 20
  },
  miPrimeraBicicleta: {
    left: 10,
    lineHeight: 14,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: 7,
    color: Color.primario1,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '500'
  },
  button: {
    // left: 86,
    width: 140,
    backgroundColor: Color.secundario,
    // top: 58,
    height: 29,
    borderRadius: Border.br_11xl
  },
  buttonContainer1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  buttonContainer1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  aadir: {
    marginLeft: -22.5,
    lineHeight: 14,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    top: 7,
    color: Color.primario1,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    left: '50%'
  },
  button1: {
    // left: 160,
    width: 75,
    backgroundColor: Color.secundario,
    // top: 54,
    height: 29,
    borderRadius: Border.br_11xl
  },
  field: {
    marginTop: 30,
    borderRadius: Border.br_xl,
    borderStyle: 'solid',
    borderColor: Color.primario1,
    borderWidth: 1.5,
    paddingVertical: 30,
    paddingHorizontal: 15,
    width: '100%',

    backgroundColor: Color.white
  },
  iconlybolddocument: {
    width: 22,
    height: 22
  },
  anexoArchivo: {
    marginLeft: 13,
    color: Color.gris
  },

  crearAlbumChild: {
    top: 282,
    width: 388,
    left: 20
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer1Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlyboldaddUser: {
    width: 18,
    height: 16
  },
  etiquetar: {
    marginLeft: 12,
    color: Color.gris
  },
  iconlyboldaddUserParent: {
    top: 297,
    left: 20,
    position: 'absolute'
  },
  crearAlbumItem: {
    top: 331,
    width: 388,
    left: 20
  },
  groupIcon: {
    width: 16,
    height: 16
  },
  aadirAudio: {
    marginLeft: 16,
    color: Color.gris
  },
  groupParent: {
    top: 346,
    left: 20,
    position: 'absolute'
  },
  crearAlbumInner: {
    top: 380,
    width: 388,
    left: 20
  },
  vectorParent: {
    top: 395,
    left: 20,
    position: 'absolute'
  },
  lineIcon: {
    top: 432,
    width: 388,
    left: 20
  },
  frameContainer4Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer4Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  iconlybulklocation: {
    width: 16,
    height: 22
  },
  iconlybulklocationParent: {
    top: 447,
    left: 20,
    position: 'absolute'
  },
  crearAlbumChild1: {
    top: 484,
    width: 388,
    left: 20
  },
  crearAlbumChild2: {
    top: 537,
    width: 388,
    left: 20
  },
  crearAlbumChild3: {
    top: 230,
    width: 388,
    left: '50%',
    marginLeft: -194
  },
  opcionesDePrivacidad: {
    color: Color.gris
  },
  opcionesDePrivacidadWrapper: {
    width: 359
  },
  arrowDown2Icon: {
    marginLeft: 20,
    width: 9,
    height: 16
  },
  frameParent: {
    top: 552,
    justifyContent: 'flex-end',
    width: 388,
    left: '50%',
    marginLeft: -194,
    position: 'absolute'
  },
  imageIcon: {
    width: 23,
    height: 24
  },
  imageParent: {
    top: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  arrowDown2Icon1: {
    height: '67.39%',
    marginLeft: 184.7,
    top: '16.52%',
    bottom: '16.09%',
    width: 9,
    left: '50%'
  },
  frameGroup: {
    top: 499,
    height: 23,
    width: 388,
    left: 20,
    position: 'absolute'
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: 'center',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    flex: 1
  },
  pressable: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
    flexDirection: 'row',
    // marginLeft: -194,
    width: '100%'
  },
  button2: {
    borderRadius: 100,
    marginTop: 30,
    width: '100%'
  },
  crearLbum: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700'
  },
  crear: {
    color: Color.primario1
  },
  icon: {
    height: '100%'
  },
  back: {
    width: 24,
    height: 24
    // top: 3
  },
  crearLbumParent: {
    marginTop: 64,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  crearAlbum: {
    // borderRadius: Border.br_31xl,
    // height: 926,
    paddingHorizontal: 15,
    flex: 1,
    marginBottom: 100,
    width: '100%',
    backgroundColor: Color.white
  }
})

export default CrearAlbum
