import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ValorarEvento = ({ onClose }) => {
  return (
    <View style={styles.valorarEvento}>
      <View>
        <View style={styles.fieldFlexBox}>
          <Text style={[styles.quTePareci, styles.quTePareciFlexBox]}>
            ¿Qué te pareció el evento?
          </Text>
          <View style={[styles.starsParent, styles.starsParentSpaceBlock]}>
            <Image
              style={styles.starsIconLayout}
              contentFit="cover"
              source={require("../assets/stars3.png")}
            />
            <Image
              style={[styles.starsIcon1, styles.starsIconLayout]}
              contentFit="cover"
              source={require("../assets/stars3.png")}
            />
            <Image
              style={[styles.starsIcon1, styles.starsIconLayout]}
              contentFit="cover"
              source={require("../assets/stars3.png")}
            />
            <Image
              style={[styles.starsIcon1, styles.starsIconLayout]}
              contentFit="cover"
              source={require("../assets/stars4.png")}
            />
            <Image
              style={[styles.starsIcon1, styles.starsIconLayout]}
              contentFit="cover"
              source={require("../assets/stars5.png")}
            />
          </View>
          <View style={[styles.fieldWithTitle, styles.starsParentSpaceBlock]}>
            <Text style={[styles.comentariosSobreEl, styles.signInTypo]}>
              Comentarios sobre el evento
            </Text>
            <View style={[styles.field, styles.fieldFlexBox]} />
          </View>
        </View>
        <LinearGradient
          style={[styles.button, styles.fieldFlexBox]}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Enviar</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quTePareciFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  starsParentSpaceBlock: {
    marginTop: 20,
    width: 388,
  },
  starsIconLayout: {
    overflow: "hidden",
    height: 31,
    width: 33,
  },
  signInTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  fieldFlexBox: {
    alignItems: "center",
    width: 388,
  },
  quTePareci: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 0,
  },
  starsIcon1: {
    marginLeft: 20,
  },
  starsParent: {
    flexDirection: "row",
  },
  comentariosSobreEl: {
    top: 0,
    left: 0,
    lineHeight: 19,
    fontWeight: "500",
    color: Color.gris,
    position: "absolute",
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  field: {
    marginLeft: -194,
    top: 24,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    height: 107,
    position: "absolute",
  },
  fieldWithTitle: {
    height: 131,
  },
  signIn: {
    flex: 1,
    letterSpacing: 1,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 95,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  valorarEvento: {
    backgroundColor: Color.white,
    padding: Padding.p_xl,
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default ValorarEvento;
