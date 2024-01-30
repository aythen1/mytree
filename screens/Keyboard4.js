import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keyboard4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keyboard}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={styles.keys}>
        <Image
          style={styles.dictationIcon}
          contentFit="cover"
          source={require("../assets/dictation1.png")}
        />
        <Image
          style={styles.emojiIcon}
          contentFit="cover"
          source={require("../assets/emoji2.png")}
        />
        <Pressable
          style={[styles.return, styles.viewPosition]}
          onPress={() => navigation.navigate("Login1")}
        >
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle10.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Go</Text>
        </Pressable>
        <View style={[styles.space, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle7.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>space</Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle11.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>123</Text>
        </View>
        <View style={[styles.delete, styles.shiftPosition]}>
          <View style={styles.keyLight}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle9.png")}
            />
            <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
          </View>
          <Image
            style={styles.deleteButtonIcon}
            contentFit="cover"
            source={require("../assets/delete-button1.png")}
          />
        </View>
        <View style={[styles.shift, styles.shiftPosition]}>
          <View style={styles.keyLight}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
          </View>
          <Image
            style={[styles.shiftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/shift1.png")}
          />
        </View>
        <View style={[styles.m, styles.mPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
        </View>
        <View style={[styles.n, styles.nPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
        </View>
        <View style={[styles.b, styles.bPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>B</Text>
        </View>
        <View style={[styles.v, styles.vPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
        </View>
        <View style={[styles.c, styles.cPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
        </View>
        <View style={[styles.x, styles.xPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol6, styles.symbolTypo]}>X</Text>
        </View>
        <View style={[styles.z, styles.zPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>Z</Text>
        </View>
        <View style={[styles.l, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
        </View>
        <View style={[styles.k, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol6, styles.symbolTypo]}>K</Text>
        </View>
        <View style={[styles.j, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol10, styles.symbolTypo]}>J</Text>
        </View>
        <View style={[styles.h, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol11, styles.symbolTypo]}>H</Text>
        </View>
        <View style={[styles.g, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
        </View>
        <View style={[styles.f, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
        </View>
        <View style={[styles.d, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
        </View>
        <View style={[styles.s, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>S</Text>
        </View>
        <View style={[styles.a, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
        </View>
        <View style={[styles.p, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol6, styles.symbolTypo]}>P</Text>
        </View>
        <View style={[styles.o, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol11, styles.symbolTypo]}>O</Text>
        </View>
        <View style={[styles.i, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
        </View>
        <View style={[styles.u, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
        </View>
        <View style={[styles.y, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>Y</Text>
        </View>
        <View style={[styles.t, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>T</Text>
        </View>
        <View style={[styles.r, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>R</Text>
        </View>
        <View style={[styles.e, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>E</Text>
        </View>
        <View style={[styles.w, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
        </View>
        <View style={[styles.q, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol11, styles.symbolTypo]}>Q</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    bottom: "21.23%",
    top: "62.54%",
    height: "16.23%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.primary,
    fontFamily: FontFamily.nunito,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "26.11%",
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.07%",
    top: "41.7%",
    width: "11.37%",
    height: "16.23%",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -12.55,
    textAlign: "center",
    color: Color.primary,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.21%",
  },
  bPosition: {
    left: "55.82%",
    right: "35.52%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.54%",
  },
  cPosition: {
    left: "35.49%",
    right: "55.84%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.86%",
  },
  zPosition: {
    left: "15.17%",
    right: "76.16%",
  },
  lPosition: {
    bottom: "62.92%",
    top: "20.85%",
    width: "8.67%",
    height: "16.23%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.77%",
    width: "8.67%",
    top: "0%",
    height: "16.23%",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    right: -1,
    left: 1,
    height: 34,
    bottom: 0,
    position: "absolute",
  },
  dictationIcon: {
    width: 17,
    height: 28,
  },
  emojiIcon: {
    width: 31,
    height: 30,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs_6,
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
    bottom: 0,
  },
  label: {
    width: 100,
  },
  return: {
    width: "23.84%",
    left: "76.14%",
    right: "0.02%",
  },
  label1: {
    width: 208,
  },
  space: {
    width: "49.31%",
    right: "25.5%",
    left: "25.19%",
  },
  label2: {
    width: 99,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 48,
  },
  keyLight: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  deleteButtonIcon: {
    width: 26,
    height: 19,
  },
  delete: {
    left: "88.6%",
    right: "0.02%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_8xs_6,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.02%",
  },
  shiftIcon: {
    height: "39.07%",
    width: "44.89%",
    top: "29.09%",
    right: "27.35%",
    bottom: "31.85%",
    left: "27.77%",
  },
  shift: {
    right: "88.63%",
    left: "0%",
  },
  symbol1: {
    left: "21.37%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "27.67%",
  },
  n: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  b: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  symbol6: {
    left: "30.96%",
  },
  x: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  symbol7: {
    left: "28.22%",
  },
  z: {
    width: "8.67%",
    bottom: "42.07%",
    top: "41.7%",
    height: "16.23%",
    position: "absolute",
  },
  symbol8: {
    left: "33.97%",
  },
  l: {
    right: "4.89%",
    left: "86.44%",
  },
  k: {
    right: "15.19%",
    left: "76.14%",
  },
  symbol10: {
    left: "37.53%",
  },
  j: {
    left: "66.12%",
    right: "25.21%",
  },
  symbol11: {
    left: "24.66%",
  },
  h: {
    left: "55.82%",
    right: "35.52%",
  },
  g: {
    left: "45.8%",
    right: "45.54%",
  },
  f: {
    left: "35.49%",
    right: "55.84%",
  },
  d: {
    left: "25.47%",
    right: "65.86%",
  },
  s: {
    left: "15.17%",
    right: "76.16%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.31%",
    right: "0.02%",
  },
  o: {
    right: "10.04%",
    left: "81.29%",
  },
  symbol19: {
    left: "40.55%",
  },
  i: {
    right: "20.35%",
    left: "70.99%",
  },
  u: {
    right: "30.37%",
    left: "60.97%",
  },
  y: {
    right: "40.67%",
    left: "50.66%",
  },
  t: {
    right: "50.69%",
    left: "40.65%",
  },
  r: {
    right: "60.99%",
    left: "30.34%",
  },
  e: {
    right: "71.01%",
    left: "20.32%",
  },
  symbol25: {
    left: "18.08%",
  },
  w: {
    right: "81.32%",
    left: "10.02%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89.02%",
    width: "98.41%",
    top: "2.76%",
    right: "0.79%",
    bottom: "8.22%",
    left: "0.79%",
    position: "absolute",
  },
  keyboard: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    height: 326,
    width: "100%",
  },
});

export default Keyboard4;
