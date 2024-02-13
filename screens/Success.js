import * as React from 'react'
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, Border, FontSize, Padding } from '../GlobalStyles'

const Success = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.success}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.frameGroup}>
              <Text style={[styles.bienvenidoA, styles.invitaATusTypo]}>
                Bienvenido a
              </Text>
              <View style={styles.image9Parent}>
                <Image
                  style={styles.image9Icon}
                  contentFit="cover"
                  source={require('../assets/image-9.png')}
                />
                <Text style={[styles.creaTuLegado, styles.invitaATusTypo]}>
                  Crea tu legado
                </Text>
              </View>
            </View>
            <View style={styles.imageCarousel}>
              <View style={[styles.imageCarouselSlider, styles.sliderPosition]}>
                <View style={styles.imageCard}>
                  <View style={styles.imageFlexBox}>
                    <LinearGradient
                      style={[styles.img1, styles.imgPosition]}
                      locations={[0, 1]}
                      colors={['#7ec18c', '#dee274']}
                    />
                  </View>
                </View>
                <View style={styles.imageCard1}>
                  <View style={[styles.image1, styles.imageFlexBox]}>
                    <LinearGradient
                      style={[styles.img1, styles.imgPosition]}
                      locations={[0, 1]}
                      colors={['#dee274', '#7ec18c']}
                    />
                  </View>
                </View>
                <View style={styles.imageCard1}>
                  <View style={styles.imageFlexBox}>
                    <LinearGradient
                      style={styles.imgPosition}
                      locations={[0, 1]}
                      colors={['#dee274', '#7ec18c']}
                    />
                  </View>
                </View>
                <View style={styles.imageCard1}>
                  <View style={styles.imageFlexBox}>
                    <View style={styles.dotPosition} />
                  </View>
                </View>
                <View style={styles.imageCard1}>
                  <View style={styles.imageFlexBox}>
                    <View style={styles.dotPosition} />
                  </View>
                </View>
                <View style={styles.imageCard1}>
                  <View style={styles.imageFlexBox}>
                    <View style={styles.dotPosition} />
                  </View>
                </View>
              </View>
              <View style={[styles.miniSlider, styles.sliderPosition]}>
                <View style={[styles.dot, styles.dotLayout]}>
                  <View style={[styles.dotChild, styles.dotPosition]} />
                </View>
                <View style={[styles.dot1, styles.dotLayout]}>
                  <View style={[styles.dotItem, styles.dotPosition]} />
                </View>
                <View style={[styles.dot1, styles.dotLayout]}>
                  <View style={[styles.dotItem, styles.dotPosition]} />
                </View>
                <View style={[styles.dot1, styles.dotLayout]}>
                  <View style={[styles.dotItem, styles.dotPosition]} />
                </View>
                <View style={[styles.dot1, styles.dotLayout]} />
                <View style={[styles.dot1, styles.dotLayout]} />
              </View>
              <View style={[styles.gradient, styles.buttonsPosition]}>
                <View style={[styles.gradientChild, styles.gradientLayout]} />
                <View style={[styles.gradientItem, styles.gradientLayout]} />
              </View>
              <View style={[styles.buttons, styles.buttonsPosition]}>
                <Image
                  style={styles.arrowLeftIcon}
                  contentFit="cover"
                  source={require('../assets/arrow-left2.png')}
                />
                <Image
                  style={styles.arrowLeftIcon}
                  contentFit="cover"
                  source={require('../assets/arrow-left3.png')}
                />
              </View>
              <Text
                style={[styles.invitaATus, styles.sliderPosition]}
              >{`Invita a tus 
familiares`}</Text>
            </View>
          </View>
          <Pressable onPress={() => navigation.navigate('Muro')}>
            <Text style={styles.continuar}>{`Continuar >`}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  invitaATusTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  sliderPosition: {
    left: '50%',
    position: 'absolute'
  },
  imgPosition: {
    backgroundColor: Color.linearBoton,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  imageFlexBox: {
    alignSelf: 'stretch',
    flex: 1
  },
  dotLayout: {
    height: 8,
    borderRadius: Border.br_14xl,
    overflow: 'hidden'
  },
  dotPosition: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  buttonsPosition: {
    left: 0,
    position: 'absolute',
    width: 390
  },
  gradientLayout: {
    width: 60,
    top: 0,
    position: 'absolute',
    height: 368,
    backgroundColor: Color.white
  },
  bienvenidoA: {
    color: Color.negro,
    fontWeight: '900',
    textAlign: 'center',
    fontSize: FontSize.size_5xl
  },
  image9Icon: {
    width: 325,
    height: 190
  },
  creaTuLegado: {
    fontSize: FontSize.size_13xl,
    marginTop: 4
  },
  image9Parent: {
    marginTop: 26,
    alignItems: 'center'
  },
  frameGroup: {
    alignItems: 'center'
  },
  img1: {
    borderRadius: Border.br_9xs
  },
  imageCard: {
    width: 192,
    height: 256,
    flexDirection: 'row'
  },
  image1: {
    backgroundColor: Color.white,
    alignSelf: 'stretch'
  },
  imageCard1: {
    width: 144,
    height: 192,
    marginLeft: 32,
    flexDirection: 'row'
  },
  imageCarouselSlider: {
    marginLeft: -96,
    top: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  dotChild: {
    backgroundColor: Color.primario1
  },
  dot: {
    width: 24
  },
  dotItem: {
    backgroundColor: Color.colorWhitesmoke_100
  },
  dot1: {
    width: 8,
    marginLeft: 4
  },
  miniSlider: {
    marginLeft: -32,
    top: 320,
    width: 64,
    flexDirection: 'row'
  },
  gradientChild: {
    left: -1
  },
  gradientItem: {
    left: 661
  },
  gradient: {
    top: 0,
    left: 0,
    height: 368,
    overflow: 'hidden'
  },
  arrowLeftIcon: {
    borderRadius: Border.br_9xl,
    width: 26,
    height: 49
  },
  buttons: {
    top: 160,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  invitaATus: {
    marginTop: -29,
    marginLeft: -61,
    top: '50%',
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_5xl,
    position: 'absolute'
  },
  imageCarousel: {
    marginTop: 15,
    height: 368,
    width: 390,
    overflow: 'hidden',
    backgroundColor: Color.white
  },
  continuar: {
    lineHeight: 41,
    color: Color.primario1,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    fontWeight: '900',
    fontSize: FontSize.size_5xl
  },
  frameParent: {
    height: 906,
    justifyContent: 'center',
    alignItems: 'center'
  },
  success: {
    borderRadius: Border.br_21xl,
    // height: 926,
    paddingHorizontal: 19,
    paddingVertical: Padding.p_xl,
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  }
})

export default Success
