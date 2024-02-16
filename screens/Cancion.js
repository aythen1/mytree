import * as React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Border, FontSize, FontFamily, Color, Padding } from '../GlobalStyles'
import Checkbox from 'expo-checkbox'

const Cancion = ({ onClose }) => {
  return (
    <View style={[styles.cancion, styles.buttonFlexBox1]}>
      <View style={styles.seleccionarCancinParent}>
        <Text style={[styles.seleccionarCancin, styles.musica1Typo]}>
          Seleccionar canción
        </Text>
        <View style={styles.frameParent}>
          <View style={styles.frameFlexBox}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group.png')}
              />
              <Text style={[styles.musica1, styles.signInTypo]}>Musica 1</Text>
            </View>
            <View style={styles.check}>
              <Checkbox />
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group.png')}
              />
              <Text style={[styles.musica1, styles.signInTypo]}>Musica 2</Text>
            </View>
            <View style={styles.check}>
              <Checkbox />
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group.png')}
              />
              <Text style={[styles.musica1, styles.signInTypo]}>Musica 3</Text>
            </View>
            <View style={styles.check}>
              <Checkbox />
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group.png')}
              />
              <Text style={[styles.musica1, styles.signInTypo]}>Musica 4</Text>
            </View>
            <View style={styles.check}>
              <Checkbox />
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.buttonFlexBox}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group.png')}
              />
              <Text style={[styles.musica1, styles.signInTypo]}>Musica 5</Text>
            </View>
            <View style={styles.check}>
              <Checkbox />
            </View>
          </View>
        </View>
      </View>
      <Pressable onPress={onClose}>
        <LinearGradient
          style={[styles.button, styles.buttonFlexBox]}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Guardar</Text>
        </LinearGradient>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonFlexBox1: {
    justifyContent: 'center'
  },
  musica1Typo: {
    textAlign: 'left',
    fontWeight: '500'
  },
  signInTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato
  },
  frameFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  buttonFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  seleccionarCancin: {
    fontSize: FontSize.size_xl,
    color: Color.negro,
    fontFamily: FontFamily.lato,
    textAlign: 'left',
    fontWeight: '500'
  },
  groupIcon: {
    width: 16,
    height: 16
  },
  musica1: {
    letterSpacing: 0,
    lineHeight: 19,
    color: Color.gris,
    marginLeft: 16,
    textAlign: 'left',
    fontWeight: '500',
    fontSize: FontSize.size_base
  },
  checkChild: {
    position: 'absolute',
    height: '105%',
    width: '105%',
    top: '-2.5%',
    right: '-2.5%',
    bottom: '-2.5%',
    left: '-2.5%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    backgroundColor: Color.white
  },
  check: {
    width: 20,
    height: 20
  },
  frameContainer: {
    marginTop: 20
  },
  frameParent: {
    marginTop: 20,
    width: '100%'
  },
  seleccionarCancinParent: {
    alignSelf: 'stretch',
    flex: 1
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: 'center',
    flex: 1
  },
  button: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 97,
    width: 388,
    justifyContent: 'center',
    borderRadius: Border.br_11xl,
    flexDirection: 'row'
  },
  cancion: {
    width: '100%',
    height: 413,
    padding: Padding.p_xl,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.white,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl
  }
})

export default Cancion
