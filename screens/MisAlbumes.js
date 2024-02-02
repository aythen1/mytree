import React from 'react'
import { Text, StyleSheet, Pressable, View } from 'react-native'
import { Image } from 'expo-image'
// import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Color, FontFamily, Padding, Border, FontSize } from '../GlobalStyles'

const MisAlbumes = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.frameParent, styles.iconPosition]}>
      <View style={styles.frameGroup}>
        <View style={[styles.tYYoParent, styles.parentFlexBox]}>
          <Text style={styles.tYYo}>Tú y yo</Text>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector53.png')}
            />
            <Pressable
              style={styles.vectorIcon}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/iconlyboldedit.png')}
              />
            </Pressable>
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.faritaParent, styles.parentFlexBox]}>
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita3.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/marie.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita4.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/claire.png')}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={[styles.tYYoParent, styles.parentFlexBox]}>
          <Text style={styles.tYYo}>Familiares</Text>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector53.png')}
            />
            <Pressable
              style={styles.vectorIcon}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/iconlyboldedit.png')}
              />
            </Pressable>
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.faritaParent, styles.parentFlexBox]}>
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita3.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/marie.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita4.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/claire.png')}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={[styles.tYYoParent, styles.parentFlexBox]}>
          <Text style={styles.tYYo}>Amigos</Text>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require('../assets/vector53.png')}
            />
            <Pressable
              style={styles.vectorIcon}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/iconlyboldedit.png')}
              />
            </Pressable>
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.faritaParent, styles.parentFlexBox]}>
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita3.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/marie.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita4.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/claire.png')}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={[styles.tYYoParent, styles.parentFlexBox]}>
          <Text style={styles.tYYo}>Fotos con quien aparezco</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require('../assets/iconlyboldedit.png')}
          />
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/line-78.png')}
        />
        <View style={[styles.faritaParent, styles.parentFlexBox]}>
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita3.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/marie.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/farita4.png')}
          />
          <Image
            style={styles.faritaIcon}
            contentFit="cover"
            source={require('../assets/claire.png')}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require('../assets/vector54.png')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconPosition: {
    left: 20,
    position: 'absolute'
  },
  parentFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  vectorIcon7Layout: {
    width: 24,
    height: 24
  },
  miInfoTypo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  misPosition: {
    left: '50%',
    position: 'absolute'
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: 'center',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  miInfoLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  signInTypo: {
    color: Color.white,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabsPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.backgroundPrimaryBackground,
    borderStyle: 'solid',
    top: 39,
    position: 'absolute'
  },
  groupIconLayout: {
    height: 50,
    width: 50,
    top: 139,
    position: 'absolute'
  },
  tYYo: {
    fontWeight: '500',
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl
  },
  vectorIcon: {
    width: 20,
    height: 20
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  vectorParent: {
    width: 59,
    height: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tYYoParent: {
    width: 388
  },
  frameChild: {
    marginTop: 20,
    maxHeight: '100%',
    width: 388
  },
  faritaIcon: {
    width: 70,
    height: 70
  },
  vectorIcon1: {
    width: 30,
    height: 30
  },
  faritaParent: {
    width: 387,
    marginTop: 20,
    alignItems: 'center'
  },
  frameGroup: {
    alignItems: 'center',
    width: 388
  },
  frameContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: 388
  },
  frameParent: {
    top: 400,
    height: 376
  },
  misAlbumesChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 380,
    width: 428,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: Color.white
  },
  ionmenuIcon: {
    top: 64,
    width: 26,
    height: 20,
    overflow: 'hidden'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  iconlylightOutlineplus: {
    marginLeft: 20
  },
  vectorParent1: {
    top: 20,
    left: 296
  },
  brunoPham: {
    top: 244,
    left: 159,
    textAlign: 'center',
    fontWeight: '700',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    position: 'absolute'
  },
  daNangVietnam: {
    top: 274,
    left: 153,
    fontWeight: '300',
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    position: 'absolute'
  },
  miLegado: {
    width: 110,
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs: {
    width: 142,
    left: 0
  },
  misLbumes: {
    marginTop: -9.5,
    marginLeft: -44,
    top: '50%',
    lineHeight: 19,
    fontSize: FontSize.size_base,
    left: '50%',
    position: 'absolute',
    fontWeight: '700',
    color: Color.white
  },
  misLbumesWrapper: {
    left: 142,
    backgroundColor: Color.secundario,
    height: 39,
    width: 142,
    borderRadius: Border.br_7xs,
    top: 0,
    position: 'absolute',
    overflow: 'hidden'
  },
  miInfo: {
    color: Color.gris,
    letterSpacing: 0,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  tabs1: {
    left: 284,
    width: 144
  },
  tabsBarChild: {
    width: 148,
    left: 0
  },
  tabsBarItem: {
    left: 279,
    width: 150
  },
  tabsBar: {
    marginLeft: -214,
    top: 320,
    height: 40,
    width: 428,
    backgroundColor: Color.white
  },
  signIn: {
    fontSize: FontSize.size_xs,
    lineHeight: 18
  },
  button: {
    top: 272,
    left: 328,
    borderRadius: Border.br_11xl,
    width: 80,
    height: 28,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_6xs,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.linearBoton
  },
  misAlbumesItem: {
    height: '12.96%',
    marginLeft: -60,
    top: '11.23%',
    bottom: '75.81%',
    width: 120,
    maxHeight: '100%'
  },
  misAlbumesInner: {
    left: 40
  },
  groupIcon: {
    left: 338
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428,
    left: 0,
    position: 'absolute'
  },
  misAlbumes: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    width: '100%',
    backgroundColor: Color.white
  }
})

export default MisAlbumes
