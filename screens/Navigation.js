import React, { useState, useCallback } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Pressable, View, Modal } from 'react-native'
import Aadir1 from '../components/Aadir1'
import { useNavigation } from '@react-navigation/native'

const Navigation = () => {
  const [
    fieldNavigationBarrGroup70Visible,
    setFieldNavigationBarrGroup70Visible
  ] = useState(false)
  const navigation = useNavigation()

  const openFieldNavigationBarrGroup70 = useCallback(() => {
    setFieldNavigationBarrGroup70Visible(true)
  }, [])

  const closeFieldNavigationBarrGroup70 = useCallback(() => {
    setFieldNavigationBarrGroup70Visible(false)
  }, [])

  return (
    <>
      <View style={styles.navigation}>
        <Image
          style={[styles.surfaceIcon, styles.surfaceIconPosition]}
          contentFit="cover"
          source={require('../assets/surface.png')}
        />
        <Pressable
          style={[
            styles.fieldnavigationBarrgroup70,
            styles.surfaceIconPosition
          ]}
          onPress={openFieldNavigationBarrGroup70}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/fieldnavigation-barrgroup-70101.png')}
          />
        </Pressable>
        <Pressable
          style={styles.document}
          onPress={() => navigation.navigate('MIDIARIOPANTALLAPERSONAL')}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/document10.png')}
          />
        </Pressable>
        <Pressable
          style={[
            styles.iconlytwoTonecalendar,
            styles.iconlylightprofilePosition
          ]}
          onPress={() => navigation.navigate('CALENDARIO')}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/iconlytwotonecalendar1.png')}
          />
        </Pressable>
        <Pressable
          style={[
            styles.iconlylighthomeCopy,
            styles.iconlylightprofilePosition
          ]}
          onPress={() => navigation.navigate('Muro')}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/iconlylighthome-copy1.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.iconlylightprofile, styles.iconlylightprofilePosition]}
          onPress={() => navigation.navigate('Perfil1')}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/iconlylightprofile.png')}
          />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={fieldNavigationBarrGroup70Visible}
      >
        <View style={styles.fieldNavigationBarrGroup70Overlay}>
          <Pressable
            style={styles.fieldNavigationBarrGroup70Bg}
            onPress={closeFieldNavigationBarrGroup70}
          />
          <Aadir1 onClose={closeFieldNavigationBarrGroup70} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  surfaceIconPosition: {
    left: '50%',
    position: 'absolute'
  },
  iconlylightprofilePosition: {
    height: '22.86%',
    width: '5.61%',
    bottom: '33.33%',
    top: '43.81%',
    position: 'absolute'
  },
  iconLayout: {
    overflow: 'hidden',
    height: '100%',
    width: '100%'
  },
  surfaceIcon: {
    height: '71.43%',
    marginLeft: -214,
    top: '28.57%',
    bottom: '0%',
    width: 428,
    maxHeight: '100%'
  },
  fieldNavigationBarrGroup70Overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  fieldNavigationBarrGroup70Bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  icon: {
    marginLeft: -30,
    height: '100%',
    maxHeight: '100%',
    width: '100%'
  },
  fieldnavigationBarrgroup70: {
    top: '0%',
    bottom: '42.86%',
    width: 60,
    height: '57.14%'
  },
  document: {
    left: 290,
    top: 46,
    width: 24,
    height: 24,
    position: 'absolute'
  },
  icon2: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  iconlytwoTonecalendar: {
    left: '26.64%',
    right: '67.76%'
  },
  iconlylighthomeCopy: {
    left: '11.68%',
    right: '82.71%'
  },
  iconlylightprofile: {
    left: '82.71%',
    right: '11.68%'
  },
  navigation: {
    flex: 1,
    height: 105,
    width: '100%'
  }
})

export default Navigation
