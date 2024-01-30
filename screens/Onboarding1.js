import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding2}>
      <Image
        style={styles.onboarding1Icon}
        contentFit="cover"
        source={require("../assets/onboarding-1.png")}
      />
      <LinearGradient
        style={[styles.comparteParent, styles.comparteParentFlexBox]}
        locations={[0, 1]}
        colors={["#b7e4c0", "#2c372e"]}
      >
        <Text style={[styles.comparte, styles.comparteTypo]}>Comparte</Text>
        <View style={styles.unTesoroDeRecuerdosParaCoParent}>
          <Text style={[styles.unTesoroDe, styles.comparteTypo]}>
            Un tesoro de recuerdos para compartir con futuras generaciones
          </Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
          </View>
          <View style={styles.progressButton}>
            <View
              style={[styles.buttonfullcircle, styles.comparteParentFlexBox]}
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
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  comparteParentFlexBox: {
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
  },
  comparteTypo: {
    fontFamily: FontFamily.lato,
    lineHeight: 24,
  },
  frameLayout: {
    marginLeft: 7,
    height: 6,
    borderRadius: Border.br_3xs,
  },
  progressPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    height: 926,
  },
  comparte: {
    fontSize: FontSize.size_13xl,
    letterSpacing: 1.3,
    fontWeight: "700",
    color: Color.primario1,
    textAlign: "left",
  },
  unTesoroDe: {
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
    backgroundColor: Color.white,
    width: 34,
  },
  frameInner: {
    width: 8,
    backgroundColor: Color.colorGray_400,
    marginLeft: 7,
  },
  rectangleParent: {
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
    right: "17.02%",
    bottom: "17.02%",
    left: "17.02%",
    borderRadius: Border.br_65xl,
    backgroundColor: Color.negro,
    paddingHorizontal: Padding.p_122xl,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
  },
  progressButtonChild: {
    height: "100%",
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
  unTesoroDeRecuerdosParaCoParent: {
    marginTop: 580,
    alignItems: "center",
  },
  comparteParent: {
    marginLeft: -194,
    top: 20,
    width: 388,
    height: 886,
    backgroundColor: Color.linearBoton,
    zIndex: 1,
    left: "50%",
    borderRadius: Border.br_31xl,
  },
  onboarding2: {
    flex: 1,
    flexDirection: "row",
    height: 926,
    width: "100%",
  },
});

export default Onboarding1;
