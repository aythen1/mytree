import React, { useState } from 'react'
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Color, FontSize, Border, Padding } from '../GlobalStyles'
import Checkbox from 'expo-checkbox'

const PerfilConfiguracion = () => {
  const navigation = useNavigation()
  const [isChecked, setChecked] = useState(false)

  return (
    <ScrollView style={styles.frameParent}>
      <View style={styles.viewContainer}>
        <View>
          <View style={styles.parentIcons}>
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
                style={styles.documentIconLayout}
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
              onPress={() => navigation.navigate('PerfilAjustes')}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require('../assets/back.png')}
              />
            </Pressable>
            <Text style={styles.ajustes}>Privacidad</Text>
          </View>
        </View>

        <View style={styles.centralContainer}>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent1}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Quién puede ver tu información personal
              </Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Nombre completo
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Todos
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Fecha de nacimiento
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Todos
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Ubicación
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Todos
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Quién puede etiquetarte
              </Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Fotos
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Todos
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Videos
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>
                Sólo Amigos
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/line-802.png')}
          />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Familiares bloqueados
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>10</Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>

          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Familiares restringidos
              </Text>
              <Text style={[styles.brunoPham, styles.brunoPhamTypo]}>10</Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require('../assets/vector47.png')}
            />
          </View>

          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.nombreCompletoParent}>
              <Text style={[styles.cambiarFotoDe, styles.brunoPhamTypo]}>
                Deseo estar en los motores de búsqueda
              </Text>
            </View>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              style={styles.checkbox}
            />
          </View>
        </View>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={['#dee274', '#7ec18c']}
        >
          <Pressable style={[styles.pressable, styles.pressableFlexBox]}>
            <Text style={styles.signIn}>Guardar</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  frameParent: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Color.white
  },
  viewContainer: {
    paddingHorizontal: Padding.p_xl,
    paddingBottom: 60
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  brunoPhamTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.lato
  },
  vectorIconLayout: {
    height: 21,
    width: 21
  },
  frameContainerFlexBox: {
    flexDirection: 'row'
  },
  pressableFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  cambiarFotoDe: {
    color: Color.negro,
    textAlign: 'left',
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  brunoPham: {
    color: Color.grisGeneral,
    marginTop: 10,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 19,
    fontSize: FontSize.size_base
  },
  nombreCompletoParent: {
    width: '80%'
  },
  nombreCompletoParent1: {
    width: '100%'
  },
  checkbox: {
    left: '50%'
  },
  vectorIcon1: {
    marginLeft: 20
  },
  frameContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  frameChild: {
    height: '0.5%',
    width: 388,
    marginTop: 20
  },
  deleteIcon: {
    width: 18,
    height: 20,
    overflow: 'hidden'
  },
  eliminarDatos: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    marginLeft: 15,
    color: Color.negro,
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0
  },
  deleteParent: {
    marginTop: 38,
    alignItems: 'center'
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton
  },
  button: {
    marginTop: 38,
    borderRadius: Border.br_11xl
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55
  },
  documentIcon: {
    overflow: 'hidden'
  },
  parentIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '5%'
  },
  iconlylightOutlinecalendarParent: {
    width: '100%',
    left: '35%',
    flexDirection: 'row'
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24
  },
  backParent: {
    marginTop: 30
  },
  icon: {
    height: '100%',
    overflow: 'hidden'
  },
  iconLayout1: {
    width: '100%',
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
  centralContainer: {
    left: '3%'
  }
})

export default PerfilConfiguracion
