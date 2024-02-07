import * as React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Padding, Border, FontSize, FontFamily, Color } from '../GlobalStyles'

const Valorar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.valorar}>
      <Text style={styles.enhorabuenaSloTe}>
        ¡Enhorabuena, sólo te falta un paso para ser un perfil verificado!
      </Text>
      <Text style={styles.valoraLaAplicacin}>
        Valora la aplicación en Play Store
      </Text>
      <LinearGradient
        style={[styles.button, styles.buttonPosition]}
        locations={[0, 1]}
        colors={['#dee274', '#7ec18c']}
      >
        <Text style={[styles.signIn, styles.signTypo]}>Valorar</Text>
      </LinearGradient>
      <Pressable
        style={[styles.button1, styles.buttonPosition]}
        onPress={() => navigation.navigate('PerfilVerificacion')}
      >
        <Text style={styles.signTypo}>Más tarde</Text>
      </Pressable>
      <View style={styles.starsParent}>
        <Image
          style={styles.starsIconLayout}
          contentFit="cover"
          source={require('../assets/stars.png')}
        />
        <Image
          style={[styles.starsIcon1, styles.starsIconLayout]}
          contentFit="cover"
          source={require('../assets/stars.png')}
        />
        <Image
          style={[styles.starsIcon1, styles.starsIconLayout]}
          contentFit="cover"
          source={require('../assets/stars.png')}
        />
        <Image
          style={[styles.starsIcon1, styles.starsIconLayout]}
          contentFit="cover"
          source={require('../assets/stars1.png')}
        />
        <Image
          style={[styles.starsIcon1, styles.starsIconLayout]}
          contentFit="cover"
          source={require('../assets/stars2.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonPosition: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    flexDirection: 'row',
    width: 388,
    left: 20,
    position: 'absolute',
    borderRadius: Border.br_11xl
  },
  signTypo: {
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  starsIconLayout: {
    height: 31,
    width: 33,
    overflow: 'hidden'
  },
  enhorabuenaSloTe: {
    top: 20,
    color: Color.negro,
    width: 388,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    fontSize: FontSize.size_xl,
    left: 20,
    position: 'absolute'
  },
  valoraLaAplicacin: {
    marginLeft: -144,
    top: 88,
    color: Color.gris,
    textAlign: 'left',
    left: '50%',
    fontFamily: FontFamily.lato,
    fontWeight: '500',
    fontSize: FontSize.size_xl,
    position: 'absolute'
  },
  signIn: {
    color: Color.white
  },
  button: {
    top: 341,
    backgroundColor: Color.linearBoton
  },
  button1: {
    top: 269,
    borderStyle: 'solid',
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    backgroundColor: Color.white,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: 'center',
    alignItems: 'center',
    height: 52
  },
  starsIcon1: {
    marginLeft: 20
  },
  starsParent: {
    marginLeft: -127,
    top: 132,
    width: 255,
    flexDirection: 'row',
    left: '50%',
    position: 'absolute'
  },
  valorar: {
    flex: 1,
    width: '100%',
    height: 413,
    overflow: 'hidden',
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white
  }
})

export default Valorar
