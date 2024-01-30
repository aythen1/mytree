import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const OpcionesTituloDelEvento = ({ onClose }) => {
  return (
    <View style={styles.opcionesTituloDelEvento}>
      <View style={styles.opcin1Parent}>
        <Text style={[styles.opcin1, styles.opcinTypo]}>Opción 1</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.opcin2, styles.opcinTypo]}>Opción 2</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.opcin2, styles.opcinTypo]}>Opción 3</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.aadir, styles.opcinTypo]}>+ Añadir</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opcinTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  opcin1: {
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    marginTop: 20,
    width: 388,
    maxHeight: "100%",
  },
  opcin2: {
    marginTop: 20,
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  aadir: {
    color: Color.primario2,
    marginTop: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  opcin1Parent: {
    width: 388,
  },
  opcionesTituloDelEvento: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_178xl,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default OpcionesTituloDelEvento;
