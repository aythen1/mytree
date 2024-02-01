import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Color, Border, FontSize, FontFamily, Padding } from '../GlobalStyles'

const RETOSMSVOTADOS = () => {
  const navigation = useNavigation()

  return (
    <LinearGradient
      style={[styles.retosMsVotados, styles.retosMsVotadosBg]}
      locations={[0, 1]}
      colors={['#7ec18c', '#dee274']}
    >
      <View style={[styles.retosMsVotadosChild]} />
      <View style={styles.frameParent}>
        <View>
          <View style={styles.parentFlexBox}>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/back1.png')}
              />
            </Pressable>
            <Text style={styles.retosMsVotados1}>Retos más votados</Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.groupParent}>
              <View style={styles.starParent}>
                <Image
                  style={styles.groupChild}
                  contentFit="cover"
                  source={require('../assets/star-8.png')}
                />
                <Image
                  style={[styles.groupItem, styles.starLayout]}
                  contentFit="cover"
                  source={require('../assets/star-6.png')}
                />
                <Text style={[styles.text, styles.textTypo2]}>2</Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require('../assets/vector2.png')}
                />
              </View>
              <View>
                <Text style={styles.andrewTypo}>Andrew B.</Text>
                <View style={[styles.vectorParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require('../assets/vector3.png')}
                  />
                  <Text style={[styles.text1, styles.textTypo1]}>52</Text>
                </View>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupLayout}>
                <View style={[styles.starGroup, styles.groupLayout]}>
                  <Image
                    style={styles.groupInner}
                    contentFit="cover"
                    source={require('../assets/star-5.png')}
                  />
                  <View style={[styles.star, styles.starLayout]}>
                    <Image
                      style={[styles.starChild, styles.starLayout]}
                      contentFit="cover"
                      source={require('../assets/star-61.png')}
                    />
                    <Text style={[styles.text2, styles.textTypo2]}>1</Text>
                  </View>
                </View>
                <Image
                  style={[styles.vectorIcon2, styles.frameParentPosition]}
                  contentFit="cover"
                  source={require('../assets/vector4.png')}
                />
              </View>
              <View style={styles.andrewBGroup}>
                <Text style={[styles.andrewB1, styles.andrewTypo]}>
                  Andrew B.
                </Text>
                <View style={[styles.vectorGroup, styles.parentFlexBox]}>
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require('../assets/vector5.png')}
                  />
                  <Text style={[styles.text1, styles.textTypo1]}>70</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.starParent}>
                <Image
                  style={styles.groupChild}
                  contentFit="cover"
                  source={require('../assets/star-8.png')}
                />
                <Image
                  style={[styles.groupItem, styles.starLayout]}
                  contentFit="cover"
                  source={require('../assets/star-62.png')}
                />
                <Text style={[styles.text, styles.textTypo2]}>3</Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require('../assets/vector2.png')}
                />
              </View>
              <View>
                <Text style={[styles.bradT, styles.andrewTypo]}>Brad T.</Text>
                <View style={[styles.vectorParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require('../assets/vector3.png')}
                  />
                  <Text style={[styles.text1, styles.textTypo1]}>40</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={[styles.frameChild, styles.childShadowBox]} />
          <View style={styles.frameParent2}>
            <LinearGradient
              style={[styles.mdichessQueenParent, styles.tabsFlexBox]}
              locations={[0, 1]}
              colors={['#e2e57a', '#7fc08b']}
            >
              <Image
                style={styles.mdichessQueenIcon}
                contentFit="cover"
                source={require('../assets/mdichessqueen.png')}
              />
              <Text style={styles.todos}>Todos</Text>
            </LinearGradient>
            <View style={[styles.tabs, styles.tabsFlexBox]}>
              <Image
                style={styles.mdichessQueenIcon}
                contentFit="cover"
                source={require('../assets/mdichessqueen1.png')}
              />
              <Text style={[styles.semanal, styles.amigosTypo]}>Semanal</Text>
            </View>
            <View style={[styles.tabs1, styles.tabsFlexBox]}>
              <Image
                style={styles.mdichessQueenIcon}
                contentFit="cover"
                source={require('../assets/mdichessqueen2.png')}
              />
              <Text style={[styles.amigos, styles.amigosTypo]}>Amigos</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowParent}>
          <View style={styles.rowLayout}>
            <View style={styles.rowChildShadowBox} />
            <Text style={[styles.sarahG, styles.sarahTypo]}>Sarah G.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text6, styles.textTypo]}>4</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={styles.rowChildShadowBox} />
            <Text style={[styles.sarahG, styles.sarahTypo]}>Jason R.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text6, styles.textTypo]}>5</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={styles.rowChildShadowBox} />
            <Text style={[styles.sarahG, styles.sarahTypo]}>Oscar W.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text6, styles.textTypo]}>6</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={styles.rowChildShadowBox} />
            <Text style={styles.sarahTypo}>Melinda H.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text6, styles.textTypo]}>7</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={styles.rowChildShadowBox} />
            <Text style={[styles.sarahG, styles.sarahTypo]}>Lucas S.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text6, styles.textTypo]}>8</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={styles.rowChildShadowBox} />
            <Text style={styles.sarahTypo}>Ramon M.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text6, styles.textTypo]}>9</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
          <View style={[styles.row1, styles.rowLayout]}>
            <View style={styles.rowChildShadowBox} />
            <Text style={[styles.sarahG, styles.sarahTypo]}>Elliot K.</Text>
            <View style={styles.rowItem} />
            <View style={styles.star1}>
              <Image
                style={styles.starItem}
                contentFit="cover"
                source={require('../assets/star-63.png')}
              />
              <Text style={[styles.text18, styles.textTypo]}>10</Text>
            </View>
            <View style={styles.vectorParent1}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require('../assets/vector6.png')}
              />
              <Text style={[styles.text7, styles.textTypo1]}>10</Text>
            </View>
            <Image
              style={styles.vectorIcon7}
              contentFit="cover"
              source={require('../assets/vector2.png')}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require('../assets/navigation2.png')}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  retosMsVotadosBg: {
    backgroundColor: Color.linearBoton
    // overflow: 'hidden'
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    borderRadius: Border.br_8xs,
    // width: 388,
    backgroundColor: Color.white
  },

  starLayout: {
    height: 55,
    width: 55,
    top: 0
    // position: 'absolute'
  },
  textTypo2: {
    color: Color.negro,
    lineHeight: 16,
    letterSpacing: 0.8,
    fontSize: FontSize.size_base,
    top: 19,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    position: 'absolute'
  },
  parentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textTypo1: {
    marginLeft: 4,
    fontWeight: '600',
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.lato
  },
  groupLayout: {
    height: 150,
    width: 125
  },
  andrewTypo: {
    lineHeight: 21,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.lato
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  amigosTypo: {
    color: Color.gris,
    marginLeft: 10,
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato
  },
  sarahTypo: {
    lineHeight: 13,
    fontSize: FontSize.footnote_size,
    left: '34.22%',
    top: '37.5%',
    color: Color.negro,
    textAlign: 'left',
    fontFamily: FontFamily.lato
    // position: 'absolute'
  },
  textTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    marginTop: -6,
    fontWeight: '600',
    textAlign: 'center',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    left: '50%',
    top: '50%',
    position: 'absolute'
  },
  rowLayout: {
    height: 56,
    width: 348
  },
  retosMsVotadosChild: {
    top: 281,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 30,
    elevation: 30,
    height: 624,
    width: 388,
    left: 20,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    marginLeft: 10
  },
  back: {
    width: 24,
    height: 24
  },
  retosMsVotados1: {
    fontSize: FontSize.size_5xl,
    marginLeft: 20,
    width: '100%',
    textAlign: 'left',
    color: Color.white,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  groupChild: {
    height: 95,
    borderRadius: Border.br_5xs,
    top: 25,
    left: 0,
    width: 95,
    position: 'absolute'
  },
  groupItem: {
    borderRadius: Border.br_9xs,
    width: 55,
    left: 20
  },
  text: {
    left: 42,
    textAlign: 'center'
  },
  vectorIcon: {
    marginTop: 6,
    marginLeft: -9.5,
    height: 13,
    width: 18,
    left: '50%',
    top: '50%'
    // position: 'absolute'
  },
  starParent: {
    height: 120,
    width: 95
  },
  vectorIcon1: {
    height: 16,
    width: 14
  },
  text1: {
    color: Color.secundario
  },
  vectorParent: {
    width: 68
  },
  groupParent: {
    alignItems: 'center'
  },
  groupInner: {
    height: 125,
    width: 125,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 25,
    position: 'absolute'
  },
  starChild: {
    borderRadius: Border.br_9xs,
    width: 55,
    left: 0
  },
  text2: {
    left: 22,
    textAlign: 'center'
  },
  star: {
    left: 35
  },
  starGroup: {
    top: 0,
    height: 150,
    left: 0
    // position: 'absolute'
  },
  vectorIcon2: {
    marginTop: -1,
    marginLeft: -17.5,
    width: 36,
    height: 26
  },
  andrewB1: {
    width: 124
  },
  vectorGroup: {
    width: 124
  },
  andrewBGroup: {
    width: 124
  },
  groupContainer: {
    marginLeft: 37
  },
  bradT: {
    width: 68
  },
  frameView: {
    marginLeft: 37,
    alignItems: 'center'
  },
  frameContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    flexDirection: 'row',
    width: 388
  },
  frameChild: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 25,
    elevation: 25,
    height: 79,
    zIndex: 0
    // backgroundColor: 'red'
    // width: 388
  },
  mdichessQueenIcon: {
    height: 14,
    width: 14
  },
  todos: {
    marginLeft: 10,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    fontSize: FontSize.size_base,
    color: Color.white,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  mdichessQueenParent: {
    width: 117,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.linearBoton,
    overflow: 'hidden'
  },
  semanal: {
    textAlign: 'left'
  },
  tabs: {
    width: 115,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs
  },
  amigos: {
    textAlign: 'center'
  },
  tabs1: {
    width: 117,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_7xs
  },
  frameParent2: {
    top: 20,
    zIndex: 1,
    flexDirection: 'row',
    left: 20,
    position: 'absolute'
  },
  rowChildShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: '#e8e8e8',
    bottom: '0%',
    right: '0%',
    left: '0%',
    top: '0%',
    height: '100%',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0
    },
    backgroundColor: Color.white,
    position: 'absolute',
    width: '100%'
  },
  sarahG: {
    width: '15.23%'
  },
  rowItem: {
    height: '71.43%',
    width: '11.49%',
    top: '14.29%',
    right: '71.26%',
    bottom: '14.29%',
    left: '17.24%',
    borderRadius: Border.br_xs,
    backgroundColor: Color.secundario,
    position: 'absolute'
  },
  starItem: {
    height: '101%',
    width: '101.01%',
    right: '-1.01%',
    bottom: '-1%',
    borderRadius: Border.br_11xs,
    maxWidth: '100%',
    maxHeight: '100%',
    left: '0%',
    top: '0%',
    // position: 'absolute',
    overflow: 'hidden'
  },
  text6: {
    marginLeft: -2.85
  },
  star1: {
    height: '53.57%',
    width: '8.53%',
    top: '23.21%',
    right: '88.59%',
    bottom: '23.21%',
    left: '2.87%',
    position: 'absolute'
  },
  text7: {
    color: Color.primario1
  },
  vectorParent1: {
    top: 17,
    left: 303,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  vectorIcon7: {
    marginLeft: -103,
    marginTop: -6,
    height: 13,
    width: 18,
    left: '50%',
    top: '50%',
    position: 'absolute'
  },
  row1: {
    marginTop: 1
  },
  text18: {
    marginLeft: -5.85
  },
  rowParent: {
    height: 545,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    backgroundColor: Color.white
  },
  frameParent1: {
    marginTop: 20
  },
  frameParent: {
    // marginTop: 0,
    // marginLeft: -214,
    padding: Padding.p_xl,
    justifyContent: 'center',
    top: 50
  },
  navigationIcon: {
    top: 821,
    width: 428,
    height: 105,
    left: 0,
    position: 'absolute'
  },
  retosMsVotados: {
    borderRadius: Border.br_11xl,
    flex: 1,
    // height: 926,
    width: '100%',
    backgroundColor: Color.linearBoton,
    overflow: 'hidden'
  }
})

export default RETOSMSVOTADOS
