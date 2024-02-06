import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles'

const PERFILANCESTROAJUSTES = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.perfilAncestroAjustes, styles.iconLayout]}>
      <View style={[styles.frameParent, styles.parentIconPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.aatarWrapper}>
              <Image
                style={styles.aatarIcon}
                contentFit="cover"
                source={require('../assets/aatar8.png')}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>02</Text>
              <Text style={[styles.mayo2008, styles.textTypo]}>mayo 2008</Text>
            </View>
          </View>
          <Text style={[styles.papFuisteUn, styles.frameViewSpaceBlock]}>
            Papá, fuiste un gran hombre, un gran esposo y sobre todo un gran
            padre. Te echaré mucho de menos
          </Text>
        </View>
        <View style={styles.frameViewSpaceBlock}>
          <View style={styles.frameContainer}>
            <View style={styles.aatarWrapper}>
              <Image
                style={styles.aatarIcon}
                contentFit="cover"
                source={require('../assets/aatar8.png')}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>02</Text>
              <Text style={[styles.mayo2008, styles.textTypo]}>mayo 2008</Text>
            </View>
          </View>
          <Text style={[styles.papFuisteUn, styles.frameViewSpaceBlock]}>
            Papá, nunca olvidaré como me hiciste sentir, has sido un ejemplo
            tanto para mi como para todos.
          </Text>
        </View>
        <View style={styles.frameViewSpaceBlock}>
          <View style={styles.frameContainer}>
            <View style={styles.aatarWrapper}>
              <Image
                style={styles.aatarIcon}
                contentFit="cover"
                source={require('../assets/aatar8.png')}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>02</Text>
              <Text style={[styles.mayo2008, styles.textTypo]}>mayo 2008</Text>
            </View>
          </View>
          <Text style={[styles.papFuisteUn, styles.frameViewSpaceBlock]}>
            Papá, nunca olvidaré como me hiciste sentir, has sido un ejemplo
            tanto para mi como para todos.
          </Text>
        </View>
        <View style={styles.frameViewSpaceBlock}>
          <View style={styles.frameContainer}>
            <View style={styles.aatarWrapper}>
              <Image
                style={styles.aatarIcon}
                contentFit="cover"
                source={require('../assets/aatar8.png')}
              />
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>02</Text>
              <Text style={[styles.mayo2008, styles.textTypo]}>mayo 2008</Text>
            </View>
          </View>
          <Text style={[styles.papFuisteUn, styles.frameViewSpaceBlock]}>
            Abuelo, nunca olvidaré cómo me hacías comer acelgas… me recuerdan a
            ti
          </Text>
        </View>
      </View>
      <View style={styles.perfilAncestroAjustesChild} />
      <View style={[styles.backParent, styles.parentIconPosition]}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate('PERFILIDANCESTRO')}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/back.png')}
          />
        </Pressable>
        <Text style={[styles.libroDeCondolencias, styles.papFuisteUnTypo]}>
          Libro de condolencias
        </Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.parentIconPosition]}
        contentFit="cover"
        source={require('../assets/image-6.png')}
      />
      <Image
        style={[styles.navigationIcon, styles.iconPosition]}
        contentFit="cover"
        source={require('../assets/navigation31.png')}
      />
      <Image
        style={[styles.maskGroupIcon, styles.parentIconPosition]}
        contentFit="cover"
        source={require('../assets/mask-group17.png')}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require('../assets/vector23.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%'
  },
  parentIconPosition: {
    left: 20,
    position: 'absolute'
  },
  textTypo: {
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  frameViewSpaceBlock: {
    marginTop: 20,
    width: 388
  },
  papFuisteUnTypo: {
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  iconPosition: {
    left: '50%',
    position: 'absolute'
  },
  aatarIcon: {
    width: 36,
    height: 36
  },
  aatarWrapper: {
    alignItems: 'center'
  },
  text: {
    lineHeight: 36,
    fontWeight: '700',
    fontSize: FontSize.size_5xl
  },
  mayo2008: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    marginLeft: 10
  },
  parent: {
    marginLeft: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameContainer: {
    flexDirection: 'row'
  },
  papFuisteUn: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    display: 'flex',
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    marginTop: 20,
    alignItems: 'center'
  },
  frameGroup: {
    width: 388
  },
  frameParent: {
    top: 406,
    height: 397
  },
  perfilAncestroAjustesChild: {
    top: 0,
    left: 0,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 386,
    width: 428,
    position: 'absolute',
    backgroundColor: Color.white
  },
  icon: {
    height: '100%'
  },
  back: {
    width: 24,
    height: 24
  },
  libroDeCondolencias: {
    marginLeft: 20,
    fontWeight: '700',
    fontSize: FontSize.size_5xl
  },
  backParent: {
    top: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    height: 105,
    width: 428
  },
  maskGroupIcon: {
    top: 133,
    height: 233,
    width: 388
  },
  vectorIcon: {
    marginTop: -243,
    marginLeft: -37.5,
    top: '50%',
    width: 75,
    height: 60
  },
  perfilAncestroAjustes: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    backgroundColor: Color.white,
    width: '100%'
  }
})

export default PERFILANCESTROAJUSTES
