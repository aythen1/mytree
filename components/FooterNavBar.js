import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const FooterNavBar = () => {
  return (
    <View
      style={{
        height: 50,
        top: 100,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#7f77fe',
        alignItems: 'center'
      }}
    >
      <View style={{ flexDirection: 'row', marginLeft: 20 }}>
        <Image
          style={styles.IconlyLightHome}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f4476xb8sqq-I1289%3A80990%3B1289%3A80434?alt=media&token=f316ebaa-468b-4b0f-9864-55db36fab398'
          }}
        />
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
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  IconlyLightHome: {
    width: 24,
    height: 24
  },
  IconlyLightHomeLeft: {
    width: 24,
    height: 24,
    marginLeft: 30
  },
  IconlyLightHomeRight: {
    width: 24,
    height: 24,
    marginRight: 30
  }
})

export default FooterNavBar
