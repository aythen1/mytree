import React, { useState, useCallback } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import OpcionesFamiliar from '../components/OpcionesFamiliar'
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles'

const MisFamiliares1 = () => {
  const navigation = useNavigation()
  const [frameContainer3Visible, setFrameContainer3Visible] = useState(false)

  const openFrameContainer3 = useCallback(() => {
    setFrameContainer3Visible(true)
  }, [])

  const closeFrameContainer3 = useCallback(() => {
    setFrameContainer3Visible(false)
  }, [])

  return (
    <>
      <View style={styles.misFamiliares}>
        <Image
          style={[styles.navigationIcon, styles.navigationIconPosition]}
          contentFit="cover"
          source={require('../assets/navigation10.png')}
        />
        <View
          style={[styles.misFamiliaresChild, styles.navigationIconPosition]}
        />
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
        <View style={[styles.backParent, styles.parentFlexBox]}>
          <Pressable
            style={styles.backLayout}
            onPress={() => navigation.navigate('PERFILMIINFO')}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require('../assets/back.png')}
            />
          </Pressable>
          <Text style={styles.misFamiliares1}>Mis familiares</Text>
        </View>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.backLayout}
            contentFit="cover"
            source={require('../assets/vector7.png')}
          />
          <Image
            style={[styles.iconlylightOutlineplus, styles.backLayout]}
            contentFit="cover"
            source={require('../assets/iconlylightoutlineplus.png')}
          />
          <Pressable
            style={[styles.iconlylightOutlineplus, styles.backLayout]}
            onPress={() => navigation.navigate('PerfilAjustes')}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require('../assets/iconlylightoutlinesetting.png')}
            />
          </Pressable>
        </View>
        <View style={styles.frameParent}>
          <View>
            <View>
              <Text style={styles.pendientes}>Pendientes</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require('../assets/mask-group16.png')}
              />
              <View style={styles.juanPrezParent}>
                <Text style={styles.pendientes}>Juan Pérez</Text>
                <Pressable
                  style={styles.seleccionarParentescoParent}
                  onPress={openFrameContainer3}
                >
                  <Text style={styles.hermanaTypo}>Seleccionar parentesco</Text>
                  <Image
                    style={styles.pathIcon}
                    contentFit="cover"
                    source={require('../assets/path.png')}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require('../assets/mask-group16.png')}
              />
              <View style={styles.juanPrezParent}>
                <Text style={styles.pendientes}>Martín Garcia</Text>
                <View style={styles.seleccionarParentescoParent}>
                  <Text style={styles.hermanaTypo}>Seleccionar parentesco</Text>
                  <Image
                    style={styles.pathIcon}
                    contentFit="cover"
                    source={require('../assets/path.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View>
              <Text style={styles.pendientes}>Mi familia actual</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require('../assets/mask-group16.png')}
              />
              <View style={styles.juanPrezParent}>
                <Text style={styles.pendientes}>Maty Ruiz</Text>
                <Text style={[styles.hermana, styles.hermanaTypo]}>
                  Hermana
                </Text>
              </View>
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require('../assets/mask-group16.png')}
              />
              <View style={styles.juanPrezParent}>
                <Text style={styles.pendientes}>Uriel Arnau</Text>
                <Text style={[styles.hermana, styles.hermanaTypo]}>
                  Sobrino
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View>
              <Text style={styles.pendientes}>Familia de los Ruiz</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require('../assets/mask-group16.png')}
              />
              <View style={styles.juanPrezParent}>
                <Text style={styles.pendientes}>Isabel Ruiz</Text>
                <Text style={[styles.hermana, styles.hermanaTypo]}>
                  Hermana de tu Padre
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View>
              <Text style={styles.pendientes}>Familia de los Sánchez</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/line-78.png')}
              />
            </View>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require('../assets/mask-group16.png')}
              />
              <View style={styles.juanPrezParent}>
                <Text style={styles.pendientes}>Tomasa Sánchez</Text>
                <Text style={[styles.hermana, styles.hermanaTypo]}>
                  Hermana de tu Madre
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require('../assets/vector18.png')}
        />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer3Visible}>
        <View style={styles.frameContainer3Overlay}>
          <Pressable
            style={styles.frameContainer3Bg}
            onPress={closeFrameContainer3}
          />
          <OpcionesFamiliar onClose={closeFrameContainer3} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: 'absolute'
  },
  parentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  backLayout: {
    height: 24,
    width: 24
  },
  hermanaTypo: {
    fontWeight: '300',
    fontStyle: 'italic',
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  navigationIcon: {
    top: 821,
    height: 105
  },
  misFamiliaresChild: {
    top: 0,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
    backgroundColor: Color.white,
    width: 428,
    left: 0
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20,
    position: 'absolute'
  },
  icon: {
    overflow: 'hidden'
  },
  misFamiliares1: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    marginLeft: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  backParent: {
    top: 78,
    left: 20
  },
  iconlylightOutlineplus: {
    marginLeft: 20
  },
  vectorParent: {
    top: 20,
    left: 296
  },
  pendientes: {
    fontWeight: '500',
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  frameChild: {
    maxHeight: '100%',
    width: 388,
    marginTop: 10
  },
  maskGroupIcon: {
    width: 54,
    height: 54
  },
  frameContainer3Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  frameContainer3Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  pathIcon: {
    width: 16,
    height: 16
  },
  seleccionarParentescoParent: {
    width: 314,
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  juanPrezParent: {
    marginLeft: 20
  },
  maskGroupParent: {
    marginTop: 20,
    flexDirection: 'row'
  },
  hermana: {
    marginTop: 5
  },
  frameContainer: {
    marginTop: 20
  },
  frameParent: {
    top: 148,
    left: 20,
    position: 'absolute'
  },
  vectorIcon1: {
    top: 87,
    left: 381,
    width: 20,
    height: 20,
    position: 'absolute'
  },
  misFamiliares: {
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.white
  }
})

export default MisFamiliares1
