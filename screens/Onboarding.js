import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const Onboarding = () => {
  return (
    <View style={styles.onboarding3}>
      <Image
        style={styles.onboarding1Icon}
        contentFit="cover"
        source={require("../assets/onboarding-1.png")}
      />
      <LinearGradient
        style={[styles.huellaParent, styles.huellaParentFlexBox]}
        locations={[0, 1]}
        colors={["#b7e4c0", "#2c372e"]}
      >
        <View style={styles.dejaTuHuellaEnElMundoMieParent}>
          <Text style={[styles.huella, styles.huellaTypo]}>Huella</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={[styles.dejaTuHuella, styles.huellaTypo]}>
              Deja tu huella en el mundo mientras construyes tu legado
            </Text>
            <View style={styles.frameWrapper}>
              <View style={styles.rectangleParent}>
                <View style={styles.frameChild} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameInner, styles.frameLayout]} />
              </View>
            </View>
            <View style={styles.progressButton}>
              <View
                style={[styles.buttonfullcircle, styles.huellaParentFlexBox]}
              >
                <Image
                  style={styles.arrowRight}
                  contentFit="cover"
                  source={require("../assets/arrow--right.png")}
                />
              </View>
              <Image
                style={[styles.progressButtonChild, styles.progressPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-190.png")}
              />
              <Image
                style={[styles.progressButtonItem, styles.progressPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-192.png")}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  huellaParentFlexBox: {
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
  },
  huellaTypo: {
    fontFamily: FontFamily.lato,
    lineHeight: 35,
  },
  frameLayout: {
    marginLeft: 7,
    height: 6,
    borderRadius: Border.br_3xs,
  },
  progressPosition: {
    // maxHeight: "100%",
    // maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  onboarding1Icon: {
    width: 428,
    zIndex: 0,
    overflow: "hidden",
    borderRadius: Border.br_31xl,
    // height: 926,
  },
  huella: {
    fontSize: FontSize.size_13xl,
    letterSpacing: 1.3,
    fontWeight: "700",
    color: Color.primario1,
    textAlign: "left",
    top: 0,
  },
  dejaTuHuella: {
    fontSize: FontSize.size_7xl,
    fontWeight: "500",
    color: Color.white,
    textAlign: "center",
    width: 311,
  },
  frameChild: {
    height: 6,
    borderRadius: Border.br_3xs,
    width: 8,
    backgroundColor: Color.colorGray_400,
  },
  frameItem: {
    width: 8,
    backgroundColor: Color.colorGray_400,
    marginLeft: 7,
  },
  frameInner: {
    backgroundColor: Color.white,
    width: 34,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: 30,
    flexDirection: "row",
  },
  arrowRight: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttonfullcircle: {
    height: "65.96%",
    width: "65.96%",
    top: "17.02%",
    // right: "17.02%",
    // bottom: "17.02%",
    left: "17.02%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.negro,
    // paddingHorizontal: Padding.p_122xl,
    // paddingVertical: Padding.p_xl,
    flexDirection: "row",
    zIndex: 10,
  },
  progressButtonChild: {
    // height: "100%",
    bottom: "0%",
    left: "0%",
    opacity: 0.38,
    width: "100%",
  },
  progressButtonItem: {
    height: "50%",
    width: "50%",
    bottom: "50%",
    left: "50%",
  },
  progressButton: {
    width: 94,
    height: 94,
    marginTop: 30,
  },
  dejaTuHuellaEnElMundoMieParent: {
    // marginTop: 580,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  huellaParent: {
    marginLeft: -194,
    paddingVertical: 50,
    top: 20,
    bottom: 50,
    width: 388,
    // height: "92%",

    backgroundColor: Color.linearBoton,
    zIndex: 1,
    left: "50%",
    borderRadius: Border.br_31xl,
  },
  onboarding3: {
    flex: 1,
    flexDirection: "row",
    // height: 926,
    width: "100%",
    top: 30,
  },
});

export default Onboarding;
