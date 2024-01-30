import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const OpcionesAmigo = ({ onClose }) => {
  return (
    <View style={[styles.opcionesAmigo, styles.frameChildLayout]}>
      <View style={styles.amigosFlexBox}>
        <Text style={[styles.amigosNtimos, styles.aadirTypo]}>
          Amigos íntimos
        </Text>
        <Image
          style={[styles.frameChild, styles.aadirFlexBox]}
          contentFit="cover"
          source={require("../assets/line-784.png")}
        />
        <Text style={[styles.colegio, styles.aadirFlexBox]}>Colegio</Text>
        <Image
          style={[styles.frameChild, styles.aadirFlexBox]}
          contentFit="cover"
          source={require("../assets/line-771.png")}
        />
        <Text style={[styles.colegio, styles.aadirFlexBox]}>Trabajo</Text>
        <Image
          style={[styles.frameChild, styles.aadirFlexBox]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.colegio, styles.aadirFlexBox]}>Universidad</Text>
        <Image
          style={[styles.frameChild, styles.aadirFlexBox]}
          contentFit="cover"
          source={require("../assets/line-803.png")}
        />
        <Text style={[styles.colegio, styles.aadirFlexBox]}>Afición</Text>
        <Image
          style={[styles.frameChild, styles.aadirFlexBox]}
          contentFit="cover"
          source={require("../assets/line-811.png")}
        />
        <Text style={[styles.aadir, styles.aadirFlexBox]}>+ Añadir</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  aadirTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  aadirFlexBox: {
    marginTop: 20,
    flex: 1,
    alignSelf: "stretch",
  },
  amigosNtimos: {
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    overflow: "hidden",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  colegio: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.gris,
  },
  aadir: {
    color: Color.primario2,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    marginTop: 20,
  },
  amigosFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  opcionesAmigo: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    height: 413,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 79,
  },
});

export default OpcionesAmigo;
