import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ENTRADACREADA8 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.entradaCreada, styles.entradaCreadaLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
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
        <Text style={[styles.tarjetaEnviada, styles.signInTypo]}>
          ¡Tarjeta enviada!
        </Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("CALENDARIO")}
          >
            <Text style={[styles.signIn, styles.signInTypo]}>Aceptar</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entradaCreadaLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    position: "absolute",
    height: "28.28%",
    width: "34.48%",
    top: "36.21%",
    right: "32.76%",
    bottom: "35.52%",
    left: "32.76%",
    overflow: "hidden",
    zIndex: 1,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  tarjetaEnviada: {
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
  pressable: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_11xl,
  },
  button: {
    width: 388,
    marginTop: 20,
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  entradaCreada: {
    backgroundColor: Color.white,
    height: 274,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_11xl,
  },
});

export default ENTRADACREADA8;
