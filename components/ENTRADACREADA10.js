import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ENTRADACREADA10 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.entradaCreada, styles.entradaCreadaLayout]}>
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse1.png")}
        />
        <Image
          style={[styles.checkedSymbolIcon, styles.entradaCreadaLayout]}
          contentFit="cover"
          source={require("../assets/checkedsymbol1.png")}
        />
      </View>
      <Text style={[styles.alertaEnviada, styles.signInTypo]}>
        ¡Alerta enviada!
      </Text>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("MENSAJERA")}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Aceptar</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  entradaCreadaLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  ellipseParentPosition: {
    left: "50%",
    position: "absolute",
  },
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
    height: "28.28%",
    width: "34.48%",
    top: "36.21%",
    right: "32.76%",
    bottom: "35.52%",
    left: "32.76%",
    overflow: "hidden",
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    marginLeft: -58,
    top: 20,
    flexDirection: "row",
  },
  alertaEnviada: {
    marginLeft: -81,
    top: 156,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 36,
    color: Color.primary,
    left: "50%",
    position: "absolute",
  },
  signIn: {
    flex: 1,
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
  },
  pressable: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  button: {
    left: 20,
    top: 212,
    width: 388,
    position: "absolute",
  },
  entradaCreada: {
    backgroundColor: Color.white,
    width: 428,
    height: 279,
    borderRadius: Border.br_11xl,
  },
});

export default ENTRADACREADA10;
