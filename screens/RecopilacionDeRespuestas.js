import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize, FontFamily, Color, Border, Padding } from '../GlobalStyles'

const RecopilacionDeRespuestas = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.recopilacionDeRespuestas, styles.iconLayout]}>
      <View style={[styles.image6Wrapper, styles.frameParentPosition]}>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require('../assets/image-6.png')}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frameGroupFlexBox}>
          <View style={[styles.backParent, styles.backParentPosition]}>
            <Pressable
              style={styles.back}
              onPress={() => navigation.navigate('CALENDARIO')}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/back4.png')}
              />
            </Pressable>
            <Text style={styles.respuestas}>Respuestas</Text>
          </View>
        </View>
        <View style={styles.frameChild} />
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/frame-15477548751.png')}
            />
            <Text style={styles.brunoPham}>Bruno Pham</Text>
          </View>
          <View style={styles.frameInner}>
            <View style={[styles.vectorParent, styles.parentPosition]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector31.png')}
              />
              <Text style={[styles.confirmoAsistencia, styles.asistenciaTypo]}>
                Confirmo asistencia
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/frame-15477548752.png')}
            />
            <Text style={styles.brunoPham}>Bruno Pham</Text>
          </View>
          <View style={styles.frameInner}>
            <View style={[styles.vectorParent, styles.parentPosition]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector31.png')}
              />
              <Text style={[styles.confirmoAsistencia, styles.asistenciaTypo]}>
                Confirmo asistencia
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/frame-15477548751.png')}
            />
            <Text style={styles.brunoPham}>Bruno Pham</Text>
          </View>
          <View style={styles.frameInner}>
            <View style={[styles.groupParent, styles.parentPosition]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require('../assets/group-7035.png')}
              />
              <Text style={[styles.declinoAsistencia, styles.asistenciaTypo]}>
                Declino asistencia
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/frame-15477548752.png')}
            />
            <Text style={styles.brunoPham}>Bruno Pham</Text>
          </View>
          <View style={styles.frameInner}>
            <View
              style={[styles.noEstoyAnSeguroWrapper, styles.parentPosition]}
            >
              <Text style={[styles.noEstoyAn, styles.asistenciaTypo]}>
                No estoy aún seguro
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameItem}
              contentFit="cover"
              source={require('../assets/frame-15477548751.png')}
            />
            <Text style={styles.brunoPham}>Bruno Pham</Text>
          </View>
          <View style={styles.frameInner}>
            <View
              style={[styles.noEstoyAnSeguroWrapper, styles.parentPosition]}
            >
              <Text style={[styles.noEstoyAn, styles.asistenciaTypo]}>
                No estoy aún seguro
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%'
  },
  frameParentPosition: {
    left: 10
  },
  backParentPosition: {
    left: 0
  },
  frameGroupFlexBox: {
    alignSelf: 'stretch',
    flex: 1,
    marginTop: '6%'
  },
  parentPosition: {
    zIndex: 1,
    top: 6,
    alignItems: 'center',
    flexDirection: 'row'
  },
  asistenciaTypo: {
    textAlign: 'center',
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: '700',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  image6Wrapper: {
    top: '5%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconlyboldfilter2: {
    height: '91.75%',
    width: '5.98%',
    top: '0%',
    right: '0%',
    bottom: '8.25%',
    left: '94.02%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  icon: {
    height: '100%'
  },
  back: {
    width: 24,
    height: 24
  },
  respuestas: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 12,
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  backParent: {
    flexDirection: 'row'
  },
  frameChild: {
    borderStyle: 'solid',
    borderColor: Color.secundario,
    borderTopWidth: 1,
    height: 1,
    marginTop: 20
  },
  frameItem: {
    width: 30,
    height: 30
  },
  brunoPham: {
    fontSize: FontSize.size_sm,
    lineHeight: 19,
    color: Color.grisDiscord,
    textAlign: 'justify',
    marginLeft: 13,
    fontWeight: '700',
    fontFamily: FontFamily.lato,
    letterSpacing: 0
  },
  frameContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    width: 165,
    height: 33
  },
  vectorIcon: {
    width: 18,
    height: 14
  },
  confirmoAsistencia: {
    marginLeft: 8,
    color: Color.primario1
  },
  vectorParent: {
    left: 7
  },
  frameGroup: {
    gap: 50,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  groupIcon: {
    width: 12,
    height: 12
  },
  declinoAsistencia: {
    color: '#ee3900',
    marginLeft: 15
  },
  groupParent: {
    left: 12
  },
  noEstoyAn: {
    color: Color.grisGeneral
  },
  noEstoyAnSeguroWrapper: {
    left: 17
  },
  rectangleParent1: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameParent: {
    height: 309
  },
  recopilacionDeRespuestas: {
    backgroundColor: Color.white,
    flex: 1,
    width: '100%'
  }
})

export default RecopilacionDeRespuestas
