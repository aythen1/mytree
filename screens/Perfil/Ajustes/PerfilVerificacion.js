import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize, FontFamily, Color, Padding } from '../../../GlobalStyles'
import Checkbox from 'expo-checkbox'
import HeaderIcons from '../../../components/HeaderIcons'
import CalendarMuroSVG from '../../../components/svgs/CalendarMuroSVG'
import BookSVG from '../../../components/svgs/BookSVG'
import NotificationsMuroSVG from '../../../components/svgs/NotificationsMuroSVG'

const PerfilVerificacion = () => {
  const navigation = useNavigation()

  const [isChecked, setChecked] = useState(false)

  return (
    <ScrollView
      style={[styles.perfilAjustesVerificacio, styles.iconLayout1]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.parentIcons}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require('../../../assets/image-6.png')}
            />
            <View style={styles.iconlylightOutlinecalendarParent}>
              <HeaderIcons
                icons={[
                  <CalendarMuroSVG />,
                  <BookSVG />,
                  <NotificationsMuroSVG />
                ]}
              />
            </View>
          </View>
          <View style={[styles.backParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.userIconLayout}
              onPress={() => navigation.navigate('PerfilAjustes')}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require('../../../assets/back.png')}
              />
            </Pressable>
            <Text style={styles.verificacinMytree}>Verificación MyTree</Text>
          </View>
        </View>
        <View
          style={[styles.tienes7DasParaConseguirTParent, styles.parentFlexBox]}
        >
          <Text style={styles.tienes7Das}>
            ¡Tienes 7 días para conseguir tu cuenta verificada!
          </Text>
          <View style={styles.lineParent}>
            <Image
              style={styles.lineasIcon}
              contentFit="cover"
              source={require('../../../assets/lineas.png')}
            />
          </View>
          <View style={styles.lineasParent}>
            <View style={[styles.ellipseParent]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7156.png')}
              />
              <Text style={[styles.text, styles.textPosition]}>1</Text>
            </View>
            <View style={[styles.ellipseGroup, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7156.png')}
              />
              <Text style={[styles.text, styles.textPosition]}>2</Text>
            </View>
            <View style={[styles.ellipseContainer, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7156.png')}
              />
              <Text style={[styles.text, styles.textPosition]}>3</Text>
            </View>
            <View style={[styles.frameView, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7156.png')}
              />
              <Text style={[styles.text, styles.textPosition]}>4</Text>
            </View>
            <View style={[styles.ellipseParent1, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7156.png')}
              />
              <Text style={[styles.text, styles.textPosition]}>5</Text>
            </View>
            <View style={[styles.ellipseParent2, styles.frameParentPosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7156.png')}
              />
              <Text style={[styles.text, styles.textPosition]}>6</Text>
            </View>
            <View style={[styles.ellipseParent3]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../../../assets/ellipse-7162.png')}
              />
              <Text style={[styles.text6, styles.textPosition]}>7</Text>
            </View>
          </View>
          <View style={styles.pasosASeguirParent}>
            <Text style={styles.tienes7Das}>Pasos a seguir</Text>
            <View style={styles.pasosASeguirParent}>
              <View style={styles.image6Parent}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <View style={styles.userParent}>
                  <Image
                    style={[styles.userIcon, styles.userIconLayout]}
                    contentFit="cover"
                    source={require('../../../assets/3-user.png')}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo
                    ]}
                  >
                    15 familiares y/o amigos Añadiendo parentesco o grupo de
                    amistad
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require('../../../assets/image4.png')}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo
                    ]}
                  >
                    1 foto en mis etapas
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require('../../../assets/image4.png')}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo
                    ]}
                  >
                    1 foto biografía
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require('../../../assets/image4.png')}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo
                    ]}
                  >
                    1 foto con familiares y etiquetarlos
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require('../../../assets/image4.png')}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo
                    ]}
                  >
                    1 foto con amigos y etiquetarlos
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Image
                  style={styles.documentIcon1}
                  contentFit="cover"
                  source={require('../../../assets/document8.png')}
                />
                <View style={styles.userParent}>
                  <Text style={styles.crearUnaEntradaTypo}>
                    Crear una entrada al diario
                  </Text>
                </View>
              </View>
              <View style={styles.checkGroup}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <View style={styles.userParent}>
                  <Image
                    style={[styles.imageIcon, styles.checkLayout]}
                    contentFit="cover"
                    source={require('../../../assets/image4.png')}
                  />
                  <Text
                    style={[
                      styles.familiaresYoAmigos,
                      styles.crearUnaEntradaTypo
                    ]}
                  >
                    Añadir una foto de tu armario al álbum general
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: 'hidden'
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  parentFlexBox: {
    alignItems: 'center'
  },
  textPosition: {
    zIndex: 2,
    fontWeight: '500',
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: FontFamily.lato,
    bottom: 20,
    left: 9
  },
  checkLayout: {
    width: 20,
    height: 20
  },
  userIconLayout: {
    height: 24,
    width: 24
  },
  crearUnaEntradaTypo: {
    textAlign: 'justify',
    color: Color.gris,
    fontWeight: '500',
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontFamily: FontFamily.lato
  },
  image6Icon: {
    top: 3,
    left: 10,
    width: 87,
    height: 55
  },
  iconlylightOutlinecalendarParent: {
    width: '100%',
    left: '45%',
    flexDirection: 'row'
  },
  image6Parent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: '100%',
    overflow: 'hidden'
  },
  verificacinMytree: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    marginLeft: 20,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  backParent: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 20
  },
  frameGroup: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: Color.white
  },
  tienes7Das: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    color: Color.negro,
    fontFamily: FontFamily.lato
  },
  lineasIcon: {
    marginTop: -1.5,
    top: '50%',
    width: 242,
    height: 3
  },
  frameChild: {
    width: 25,
    height: 25
  },
  text: {
    color: Color.white
  },
  text6: {
    color: Color.grisGeneral
  },
  lineasParent: {
    height: 25,
    top: '18%',
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
    gap: 8
  },
  userIcon: {
    overflow: 'hidden'
  },
  familiaresYoAmigos: {
    marginLeft: 9
  },
  userParent: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageIcon: {
    height: 20,
    overflow: 'hidden'
  },
  checkGroup: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  documentIcon1: {
    width: 18,
    height: 20,
    marginLeft: 20,
    overflow: 'hidden'
  },
  pasosASeguirParent: {
    marginTop: 20
  },
  tienes7DasParaConseguirTParent: {
    padding: Padding.p_xl,
    marginTop: 3,
    backgroundColor: Color.white
  },
  frameParent: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: Padding.p_xl
  },
  perfilAjustesVerificacio: {
    flex: 1,
    backgroundColor: Color.white
  },
  parentIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '5%'
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24
  },
  lineParent: {
    marginTop: 20
  }
})

export default PerfilVerificacion
