import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const ENTRADACREADA5 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.entradaCreada, styles.pressableLayout]}>
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
      <Text style={[styles.guardado, styles.signInTypo]}>¡Guardado!</Text>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("MENSAJERA")}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Aceptar</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableLayout: {
    width: "100%",
    borderRadius: Border.br_11xl,
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
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    top: 20,
    left: 156,
    flexDirection: "row",
    position: "absolute",
  },
  guardado: {
    top: 156,
    left: 157,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 36,
    color: Color.primary,
    position: "absolute",
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    flex: 1,
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    flexDirection: "row",
  },
  button: {
    left: 20,
    top: 212,
    width: 388,
    position: "absolute",
  },
  entradaCreada: {
    backgroundColor: Color.white,
    height: 279,
    flex: 1,
  },
});

export default ENTRADACREADA5;
