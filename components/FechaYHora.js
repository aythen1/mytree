import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FechaYHora = ({ onClose }) => {
  return (
    <View style={[styles.fechaYHora, styles.fechaYHoraLayout]}>
      <View>
        <View>
          <View>
            <Text style={[styles.inicio, styles.finTypo]}>
              <Text style={styles.inicio1}>{`Inicio `}</Text>
              <Text style={styles.text}>*</Text>
            </Text>
            <View style={styles.field}>
              <Text style={[styles.aadir, styles.aadirTypo]}>Añadir</Text>
              <Image
                style={[styles.iconlytwoTonecalendar, styles.fechaYHoraLayout]}
                contentFit="cover"
                source={require("../assets/iconlytwotonecalendar.png")}
              />
            </View>
          </View>
          <View style={styles.finParent}>
            <Text style={[styles.fin, styles.finTypo]}>Fin</Text>
            <View style={styles.field}>
              <Text style={[styles.aadir, styles.aadirTypo]}>Añadir</Text>
              <Image
                style={[styles.iconlytwoTonecalendar, styles.fechaYHoraLayout]}
                contentFit="cover"
                source={require("../assets/iconlytwotonecalendar.png")}
              />
            </View>
          </View>
        </View>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Text style={[styles.signIn, styles.aadirTypo]}>Guardar</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fechaYHoraLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  finTypo: {
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
  },
  aadirTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
  },
  inicio1: {
    color: Color.textTextPrimary,
  },
  text: {
    color: "#ff0000",
  },
  inicio: {
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
  },
  aadir: {
    marginTop: -9.5,
    top: "50%",
    left: 20,
    lineHeight: 19,
    color: Color.gris,
    position: "absolute",
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  iconlytwoTonecalendar: {
    height: "48.98%",
    width: "6.19%",
    top: "24.49%",
    right: "5.15%",
    bottom: "26.53%",
    left: "88.66%",
    overflow: "hidden",
    position: "absolute",
  },
  field: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    height: 49,
    width: 388,
  },
  fin: {
    color: Color.textTextPrimary,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
  },
  finParent: {
    marginTop: 20,
  },
  signIn: {
    flex: 1,
    letterSpacing: 1,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 155,
    width: 388,
    borderRadius: Border.br_11xl,
  },
  fechaYHora: {
    backgroundColor: Color.white,
    padding: Padding.p_xl,
    borderRadius: Border.br_11xl,
  },
});

export default FechaYHora;
