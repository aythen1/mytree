import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SuscritoConExito = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.suscritoConExito, styles.pressableLayout]}>
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
      <Text style={[styles.suscritoConXito, styles.aceptarTypo]}>
        Suscrito con éxito!
      </Text>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("PERFILAJUSTESSUSCRIPCION")}
        >
          <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
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
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    flexDirection: "row",
  },
  suscritoConXito: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.primary,
    marginTop: 20,
  },
  aceptar: {
    marginTop: -11,
    marginLeft: -24,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.white,
    position: "absolute",
  },
  pressable: {
    height: "100%",
    backgroundColor: Color.linearBoton,
  },
  button: {
    width: 388,
    height: 52,
    marginTop: 20,
  },
  suscritoConExito: {
    backgroundColor: Color.white,
    flex: 1,
    alignItems: "center",
    padding: Padding.p_xl,
  },
});

export default SuscritoConExito;
