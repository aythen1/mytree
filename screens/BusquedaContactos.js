import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { FontFamily, FontSize, Color } from '../GlobalStyles'

const BusquedaContactos = () => {
  return (
    <ScrollView style={[styles.bsquedaContactos, styles.iconLayout]}>
      <View style={styles.frameParent}>
        <View>
          <View>
            <View>
              <Text style={[styles.familiares, styles.retosLayout]}>
                Familiares
              </Text>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
            </View>
            <View style={styles.frameView}>
              <View style={styles.frameParent1}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
              <View style={styles.frameParent2}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
              <View style={styles.frameParent2}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent4}>
            <View>
              <Text style={[styles.familiares, styles.retosLayout]}>
                Amigos
              </Text>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
            </View>
            <View style={styles.frameView}>
              <View style={styles.frameParent1}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
              <View style={styles.frameParent2}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require('../assets/frame-1547754875.png')}
                />
                <Text style={[styles.brunoPham, styles.retosLayout]}>
                  Bruno Pham
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <View style={styles.userParent}>
          <Image
            style={styles.userIcon}
            contentFit="cover"
            source={require('../assets/3-user1.png')}
          />
          <Text style={[styles.invitaATu, styles.retosTypo]}>
            Invita a tu familia y tu familia elegida, y mantén una conexión
            duradera
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    width: '100%',
    overflow: 'hidden'
  },
  retosTypo: {
    textAlign: 'center',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato
  },
  retosLayout: {
    lineHeight: 19,
    letterSpacing: 0
  },
  frameChildLayout: {
    height: 1,
    width: 389,
    borderTopWidth: 1,
    borderColor: Color.secundario,
    borderStyle: 'solid'
  },
  familiares: {
    fontWeight: '500',
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    textAlign: 'left'
  },
  frameChild: {
    marginTop: 15
  },
  frameItem: {
    width: 30,
    height: 30
  },
  brunoPham: {
    color: Color.grisDiscord,
    textAlign: 'justify',
    marginLeft: 13,
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  frameParent1: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameParent2: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameView: {
    marginTop: 15
  },
  frameParent4: {
    marginTop: 30
  },
  frameChild3: {
    marginTop: 30
  },
  userIcon: {
    width: 82,
    height: 57,
    overflow: 'hidden'
  },
  invitaATu: {
    color: Color.colorDarkgray_100,
    marginTop: 30
  },
  userParent: {
    marginTop: 30,
    alignItems: 'center',
    width: '80%'
  },
  frameParent: {
    left: 18,
    alignItems: 'center'
  },
  bsquedaContactos: {
    overflow: 'hidden',
    flex: 1,
    backgroundColor: Color.white,
    top: '15%',
    paddingBottom: 100
  }
})

export default BusquedaContactos
