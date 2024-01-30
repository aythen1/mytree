import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ENTRADACREADA = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.entradaCreada}>
      <View style={[styles.frameParent, styles.aceptarPosition]}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
          <Image
            style={styles.checkedSymbolIcon}
            contentFit="cover"
            source={require("../assets/checkedsymbol.png")}
          />
        </View>
        <Text style={[styles.cambiosGuardados, styles.aceptarTypo]}>
          Cambios guardados
        </Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("PERFILAJUSTES")}
          >
            <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aceptarPosition: {
    left: "50%",
    position: "absolute",
  },
  aceptarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  ellipseIcon: {
    width: 116,
    height: 116,
    opacity: 0.4,
    zIndex: 0,
  },
  checkedSymbolIcon: {
    height: "28.28%",
    width: "34.48%",
    top: "36.21%",
    right: "32.76%",
    bottom: "35.52%",
    left: "32.76%",
    overflow: "hidden",
    zIndex: 1,
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  ellipseParent: {
    flexDirection: "row",
  },
  cambiosGuardados: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.primary,
    marginTop: 20,
  },
  aceptar: {
    marginTop: -11,
    marginLeft: -24,
    top: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  pressable: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.linearBoton,
    borderRadius: Border.br_11xl,
  },
  button: {
    width: 388,
    height: 52,
    marginTop: 20,
  },
  frameParent: {
    marginLeft: -193.5,
    top: 20,
    alignItems: "center",
  },
  entradaCreada: {
    backgroundColor: Color.white,
    width: 428,
    height: 279,
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default ENTRADACREADA;
