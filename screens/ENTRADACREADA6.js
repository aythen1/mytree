import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const ENTRADACREADA6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.entradaCreada, styles.pressableLayout]}>
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
        <Text style={[styles.guardado, styles.signInTypo]}>¡Guardado!</Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Pressable
            style={[styles.pressable, styles.pressableLayout]}
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
  guardado: {
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
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    flexDirection: "row",
    alignItems: "center",
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
    flex: 1,
  },
});

export default ENTRADACREADA6;
