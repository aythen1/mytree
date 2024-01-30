import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ETIQUETADO = ({ onClose }) => {
  return (
    <View style={styles.etiquetado}>
      <View style={styles.urielTeHaEtiquetadoEnUnRParent}>
        <Text style={styles.urielTeHa}>{`Uriel te ha etiquetado 
en un recuerdo `}</Text>
        <View style={styles.buttonBar}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={styles.signTypo}>Rechazar</Text>
          </View>
          <LinearGradient
            style={[styles.button1, styles.buttonFlexBox]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Text style={[styles.signIn1, styles.signTypo]}>Aceptar</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 52,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  signTypo: {
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  urielTeHa: {
    top: 40,
    left: 40,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    color: Color.negro,
    width: 348,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  button: {
    borderStyle: "solid",
    borderColor: Color.colorKhaki_100,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  signIn1: {
    color: Color.white,
  },
  button1: {
    backgroundColor: Color.linearBoton,
    marginLeft: 20,
  },
  buttonBar: {
    top: 146,
    left: 1,
    width: 427,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    position: "absolute",
  },
  urielTeHaEtiquetadoEnUnRParent: {
    top: 0,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
    position: "absolute",
    height: 413,
    width: 428,
  },
  etiquetado: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 413,
    width: 428,
  },
});

export default ETIQUETADO;
