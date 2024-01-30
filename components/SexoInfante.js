import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SexoInfante = ({ onClose }) => {
  return (
    <View style={[styles.sexoInfante, styles.frameChildLayout]}>
      <View style={styles.varnParent}>
        <Text style={[styles.varn, styles.varnTypo]}>Varón</Text>
        <Image
          style={[styles.frameChild, styles.mujerFlexBox]}
          contentFit="cover"
          source={require("../assets/line-781.png")}
        />
        <Text style={[styles.mujer, styles.mujerFlexBox]}>Mujer</Text>
        <Image
          style={[styles.frameChild, styles.mujerFlexBox]}
          contentFit="cover"
          source={require("../assets/line-77.png")}
        />
        <Text style={[styles.mujer, styles.mujerFlexBox]}>No binario</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  varnTypo: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  mujerFlexBox: {
    marginTop: 20,
    flex: 1,
    alignSelf: "stretch",
  },
  varn: {
    flex: 1,
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  frameChild: {
    overflow: "hidden",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  mujer: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  varnParent: {
    height: 137,
    alignSelf: "stretch",
  },
  sexoInfante: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_237xl,
  },
});

export default SexoInfante;
