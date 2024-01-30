import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ENTRADACREADA12 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.entradaCreada}>
      <View style={[styles.frameParent, styles.aceptarPosition]}>
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
        <Text style={[styles.entradaCreada1, styles.aceptarTypo]}>
          ¡Entrada creada!
        </Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("MIDIARIOPANTALLAPERSONAL")}
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
  entradaCreada1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.primary,
    marginTop: 20,
  },
  aceptar: {
    marginTop: -10.5,
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
    height: 47,
    marginTop: 20,
    width: 388,
  },
  frameParent: {
    marginLeft: -194,
    top: 20,
    height: 239,
    alignItems: "center",
    width: 388,
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

export default ENTRADACREADA12;
