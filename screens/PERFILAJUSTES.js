import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontSize, Color, FontFamily, Padding, Border } from '../GlobalStyles'

const PERFILAJUSTES = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        style={[styles.perfilAjustes, styles.iconLayout1]}
        locations={[0, 1]}
        colors={['#fff', '#7ec18c']}
      >
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.image6Icon}
                  contentFit="cover"
                  source={require('../assets/image-6.png')}
                />
                <View style={styles.iconlylightOutlinecalendarParent}>
                  <Image
                    style={styles.iconlylightOutlinecalendar}
                    contentFit="cover"
                    source={require('../assets/iconlylightoutlinecalendar5.png')}
                  />
                  <Image
                    style={[styles.documentIcon, styles.documentIconLayout]}
                    contentFit="cover"
                    source={require('../assets/document9.png')}
                  />
                  <Image
                    style={styles.documentIconLayout}
                    contentFit="cover"
                    source={require('../assets/iconlylightoutlinesetting7.png')}
                  />
                </View>
              </View>
              <View style={[styles.backParent, styles.parentFlexBox]}>
                <Pressable
                  style={styles.iconlylightOutlinecalendar}
                  onPress={() => navigation.navigate('PERFILMIINFO')}
                >
                  <Image
                    style={[styles.icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require('../assets/back.png')}
                  />
                </Pressable>
                <Text style={styles.ajustes}>Ajustes</Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.parentFlexBox}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/frame-15477548756.png')}
                />
                <View style={styles.brunoPhamWrapper}>
                  <Text style={styles.brunoPham}>Bruno Pham</Text>
                </View>
              </View>
              <View style={styles.frameParent2}>
                <Pressable
                  style={styles.parentFlexBox}
                  onPress={() =>
                    navigation.navigate('PERFILAJUSTESCONFIGURACI')
                  }
                >
                  <View style={styles.settingParent}>
                    <Image
                      style={[styles.settingIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require('../assets/setting1.png')}
                    />
                    <Text style={[styles.configuracin, styles.mytreeTypo]}>
                      Configuración
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon, styles.arrowIconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown29.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.frameParent3, styles.parentFlexBox]}
                  onPress={() => navigation.navigate('PERFILAJUSTESSEGURIDAD')}
                >
                  <View style={styles.settingParent}>
                    <Image
                      style={styles.shieldDoneIcon}
                      contentFit="cover"
                      source={require('../assets/shield-done.png')}
                    />
                    <Text style={[styles.configuracin, styles.mytreeTypo]}>
                      Seguridad
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon1, styles.arrowIconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown29.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.frameParent3, styles.parentFlexBox]}
                  onPress={() => navigation.navigate('PERFILAJUSTESPRIVACIDAD')}
                >
                  <View style={styles.settingParent}>
                    <Image
                      style={styles.iconlyboldlock}
                      contentFit="cover"
                      source={require('../assets/iconlyboldlock.png')}
                    />
                    <Text style={[styles.configuracin, styles.mytreeTypo]}>
                      Privacidad
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon2, styles.arrowIconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown29.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.frameParent3, styles.parentFlexBox]}
                  onPress={() =>
                    navigation.navigate('PERFILAJUSTESPREVISUALIZ')
                  }
                >
                  <View style={styles.parentFlexBox}>
                    <Image
                      style={[styles.showIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require('../assets/show.png')}
                    />
                    <Text
                      style={[styles.visualizacinDeMytree, styles.mytreeTypo]}
                    >
                      Visualización de MyTree
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon3, styles.arrowIconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown29.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.frameParent3, styles.parentFlexBox]}
                  onPress={() => navigation.navigate('Suscripciones')}
                >
                  <View style={styles.parentFlexBox}>
                    <Image
                      style={styles.starIcon}
                      contentFit="cover"
                      source={require('../assets/star.png')}
                    />
                    <Text style={[styles.suscripciones, styles.mytreeTypo]}>
                      Suscripciones
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon4, styles.arrowIconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown29.png')}
                  />
                </Pressable>
                <Pressable
                  style={[styles.frameParent3, styles.parentFlexBox]}
                  onPress={() =>
                    navigation.navigate('PERFILAJUSTESVERIFICACIO')
                  }
                >
                  <View style={styles.parentFlexBox}>
                    <Image
                      style={[styles.settingIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require('../assets/tick-square.png')}
                    />
                    <Text style={[styles.verificacinMytree, styles.mytreeTypo]}>
                      Verificación MyTree
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowDown2Icon5, styles.arrowIconLayout]}
                    contentFit="cover"
                    source={require('../assets/arrowdown29.png')}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent8, styles.parentLayout]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.shieldDoneIcon}
                contentFit="cover"
                source={require('../assets/document8.png')}
              />
              <Text style={[styles.configuracin, styles.mytreeTypo]}>
                Términos y condiciones
              </Text>
            </View>
            <View style={styles.categoryParent}>
              <Image
                style={[styles.settingIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/category.png')}
              />
              <Text style={[styles.polticaDePrivacidad, styles.mytreeTypo]}>
                Política de Privacidad
              </Text>
            </View>
            <View style={[styles.frameParent3, styles.parentFlexBox]}>
              <Image
                style={[styles.settingIcon, styles.iconLayout]}
                contentFit="cover"
                source={require('../assets/call1.png')}
              />
              <Text style={[styles.polticaDePrivacidad, styles.mytreeTypo]}>
                Contacta con MyTree
              </Text>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={[styles.logoutParent, styles.parentLayout]}>
              <Image
                style={styles.starIcon}
                contentFit="cover"
                source={require('../assets/logout.png')}
              />
              <Text style={[styles.suscripciones, styles.mytreeTypo]}>
                Cerrar sesión
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  iconLayout1: {
    width: '100%',
    overflow: 'hidden'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconLayout: {
    width: 20,
    overflow: 'hidden'
  },
  mytreeTypo: {
    fontWeight: '500',
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  arrowIconLayout: {
    width: 9,
    height: 16
  },
  parentLayout: {
    padding: Padding.p_xl,
    borderRadius: Border.br_3xs,
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  navigationIcon: {
    top: 821,
    left: 0,
    width: 428,
    height: 105
  },
  image6Icon: {
    width: 87,
    height: 55
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24
  },
  documentIcon: {
    overflow: 'hidden'
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    justifyContent: 'flex-end',
    marginLeft: 112,
    flexDirection: 'row'
  },
  icon: {
    height: '100%',
    overflow: 'hidden'
  },
  ajustes: {
    fontSize: FontSize.size_5xl,
    marginLeft: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  backParent: {
    marginTop: 20,
    justifyContent: 'center'
  },
  frameChild: {
    width: 50,
    height: 50
  },
  brunoPham: {
    fontSize: FontSize.size_base,
    lineHeight: 19,
    color: Color.grisDiscord,
    textAlign: 'justify',
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
    fontWeight: '700'
  },
  brunoPhamWrapper: {
    marginLeft: 15
  },
  settingIcon: {
    height: 20
  },
  configuracin: {
    marginLeft: 15
  },
  settingParent: {
    flexDirection: 'row'
  },
  arrowDown2Icon: {
    marginLeft: 194,
    height: 16
  },
  shieldDoneIcon: {
    width: 18,
    height: 20,
    overflow: 'hidden'
  },
  arrowDown2Icon1: {
    marginLeft: 227,
    height: 16
  },
  frameParent3: {
    marginTop: 20
  },
  iconlyboldlock: {
    width: 17,
    height: 20
  },
  arrowDown2Icon2: {
    marginLeft: 225,
    height: 16
  },
  showIcon: {
    height: 16
  },
  visualizacinDeMytree: {
    marginLeft: 14
  },
  arrowDown2Icon3: {
    marginLeft: 117,
    height: 16
  },
  starIcon: {
    width: 21,
    height: 20,
    overflow: 'hidden'
  },
  suscripciones: {
    marginLeft: 11
  },
  arrowDown2Icon4: {
    marginLeft: 200,
    height: 16
  },
  verificacinMytree: {
    marginLeft: 16
  },
  arrowDown2Icon5: {
    marginLeft: 148,
    height: 16
  },
  frameParent2: {
    marginTop: 20
  },
  frameView: {
    padding: Padding.p_xl,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: Border.br_3xs,
    marginTop: 20
  },
  frameGroup: {
    justifyContent: 'center'
  },
  polticaDePrivacidad: {
    marginLeft: 13
  },
  categoryParent: {
    alignItems: 'flex-end',
    marginTop: 20,
    flexDirection: 'row'
  },
  frameParent8: {
    height: 152,
    marginTop: 19,
    justifyContent: 'center'
  },
  logoutParent: {
    borderRadius: Border.br_3xs,
    alignItems: 'center',
    flexDirection: 'row'
  },
  frameWrapper: {
    marginTop: 19
  },
  frameParent: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0
  },
  perfilAjustes: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.linearBoton
  }
})

export default PERFILAJUSTES
