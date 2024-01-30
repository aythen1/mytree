import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FormaDeEnvo = ({ onClose }) => {
  return (
    <View style={[styles.formaDeEnvo, styles.frameChildLayout]}>
      <View style={styles.mensajeraMytreeParent}>
        <Text style={[styles.mensajeraMytree, styles.correoPostalTypo]}>
          Mensajería MyTree
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildSpaceBlock]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.correoPostal, styles.frameChildSpaceBlock]}>
          Correo postal
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildSpaceBlock]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.correoPostal, styles.frameChildSpaceBlock]}>
          QR 3
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildSpaceBlock]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  correoPostalTypo: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  frameChildSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  mensajeraMytree: {
    alignSelf: "stretch",
  },
  frameChild: {
    overflow: "hidden",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  correoPostal: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  mensajeraMytreeParent: {
    height: 157,
    alignSelf: "stretch",
  },
  formaDeEnvo: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 236,
  },
});

export default FormaDeEnvo;
