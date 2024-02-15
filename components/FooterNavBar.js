import React from 'react'
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Aadir1 from './Aadir1'
import { useDispatch, useSelector } from 'react-redux'
import { setPanelAddFooter } from '../redux/slices/panel.slices'
import { Color } from '../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const FooterNavBar = () => {
  const navigation = useNavigation()
  const { panelAddFooter } = useSelector((state) => state.panel)
  const dispatch = useDispatch()

  const showModalAdd = () => {
    dispatch(setPanelAddFooter(!panelAddFooter))
  }

  return (
    <>
      <View
        style={{
          height: 50,
          top: 0,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: 'white'
        }}
      >
        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          <Pressable onPress={() => navigation.navigate('Muro')}>
            <Image
              style={styles.IconlyLightHome}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f4476xb8sqq-I1289%3A80990%3B1289%3A80434?alt=media&token=f316ebaa-468b-4b0f-9864-55db36fab398'
              }}
            />
          </Pressable>
          <Image
            style={styles.IconlyLightHomeLeft}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/llu86d6qbs-I1289%3A80990%3B1289%3A80445?alt=media&token=1bcae7ea-b9a8-435b-8c95-5424f9b2cf03'
            }}
          />
        </View>

        <View style={{ flexDirection: 'row', marginRight: 20 }}>
          <Image
            style={styles.IconlyLightHomeRight}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7jmh0qdt16v-I1289%3A80990%3B1289%3A80437?alt=media&token=0c904029-64d9-444f-ba9b-c193b8c023bf'
            }}
          />
          <Image
            style={styles.IconlyLightHome}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/81845yt57sf-I1289%3A80990%3B1289%3A80430?alt=media&token=ebf69f4a-8ef7-4bee-b97c-c4ab102ed7d4'
            }}
          />
        </View>

        {/* este sera el vector del medio */}
        <Pressable
          style={{
            width: 60,
            height: 60,
            backgroundColor: Color.backgroundGreyBackground,
            position: 'absolute',
            top: -30, // Ajusta según sea necesario para centrar verticalmente
            left: '50%',
            marginLeft: -30,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={showModalAdd}
        >
          <LinearGradient
            style={styles.frameChild}
            locations={[0, 1]}
            colors={['#7ec18c', '#dee274']}
          >
            <View
              style={{
                width: 50,
                height: 50,
                // backgroundColor: 'green',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10
              }}
            >
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: 'white',
                  width: 25,
                  height: 25
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: '#7fc08b',
                    textAlign: 'center',
                    bottom: 5.5
                  }}
                >
                  +
                </Text>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      </View>

      {panelAddFooter && (
        <Modal transparent={true} animationType="slide">
          {/* </Modal> */}

          <TouchableWithoutFeedback onPress={showModalAdd}>
            <View style={{ height: '100%' }}>
              <Aadir1 />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  IconlyLightHome: {
    width: 24,
    height: 24
  },
  frameChild: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    zIndex: 0
  },

  IconlyLightHomeLeft: {
    width: 23,
    height: 23,
    marginLeft: 25
  },
  IconlyLightHomeRight: {
    width: 21,
    height: 24,
    marginRight: 25,
    overflow: 'hidden'
  }
})

export default FooterNavBar
