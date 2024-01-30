import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const CambiarFotoDePerfil = () => {
  return (
    <View style={styles.cambiarFotoDePerfil}>
      <View>
        <View style={styles.seleccionarParent}>
          <Text style={styles.seleccionar}>Seleccionar</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-1547754839.png")}
          />
        </View>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/frame-1547754842.png")}
        />
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Text style={styles.signIn}>Guardar</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  seleccionar: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameChild: {
    width: 24,
    height: 24,
    marginLeft: 263,
  },
  seleccionarParent: {
    flexDirection: "row",
  },
  frameItem: {
    height: 246,
    marginTop: 21,
    width: 388,
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 30,
    width: 388,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  cambiarFotoDePerfil: {
    backgroundColor: Color.white,
    width: "100%",
    padding: Padding.p_xl,
    flex: 1,
    borderRadius: Border.br_11xl,
  },
});

export default CambiarFotoDePerfil;
