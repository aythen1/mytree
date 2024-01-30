import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ENTRADACREADA9 = () => {
  return (
    <View style={styles.entradaCreada}>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse1.png")}
          />
          <Image
            style={styles.checkedSymbolIcon}
            contentFit="cover"
            source={require("../assets/checkedsymbol1.png")}
          />
        </View>
        <Text style={[styles.creadoConXito, styles.signInTypo]}>
          ¡Creado con éxito!
        </Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Aceptar</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  ellipseIcon: {
    width: 116,
    height: 116,
    opacity: 0.4,
    zIndex: 0,
  },
  checkedSymbolIcon: {
    position: "absolute",
    height: "28.28%",
    width: "34.48%",
    top: "36.21%",
    right: "32.76%",
    bottom: "35.52%",
    left: "32.76%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  creadoConXito: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 36,
    color: Color.primary,
    marginTop: 20,
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    flex: 1,
  },
  button: {
    width: 388,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_11xl,
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  entradaCreada: {
    backgroundColor: Color.white,
    width: "100%",
    height: 274,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    flex: 1,
    borderRadius: Border.br_11xl,
  },
});

export default ENTRADACREADA9;
