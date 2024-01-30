import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CONFIRMARPARENTESCO = ({ onClose }) => {
  return (
    <View style={styles.confirmarParentesco}>
      <View style={styles.hasSidoInvitadoAFormarParParent}>
        <Text style={styles.hasSidoInvitado}>
          Has sido invitado a formar parte de MyTree
        </Text>
        <View style={styles.frameParent}>
          <View style={styles.maskGroupWrapper}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group15.png")}
            />
          </View>
          <View style={styles.umbertoDeMartiniParent}>
            <Text style={[styles.umbertoDeMartini, styles.hermanoTypo]}>
              Umberto de Martini
            </Text>
            <Text style={[styles.hermano, styles.hermanoTypo]}>Hermano</Text>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.signTypo}>Confirmar Parentezco</Text>
      </View>
      <LinearGradient
        style={[styles.button1, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Text style={[styles.signIn1, styles.signTypo]}>Aceptar</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  hermanoTypo: {
    textAlign: "left",
    left: 1,
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_5xl,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 388,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  signTypo: {
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    lineHeight: 24,
  },
  hasSidoInvitado: {
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontStyle: "italic",
    width: 388,
  },
  maskGroupIcon: {
    width: 50,
    height: 50,
  },
  maskGroupWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  umbertoDeMartini: {
    top: 2,
    fontWeight: "500",
  },
  hermano: {
    top: 26,
    fontWeight: "300",
    fontStyle: "italic",
    left: 1,
  },
  umbertoDeMartiniParent: {
    width: 175,
    height: 53,
    marginLeft: 10,
  },
  frameParent: {
    marginTop: 20,
    flexDirection: "row",
  },
  hasSidoInvitadoAFormarParParent: {
    marginLeft: -194,
    top: 20,
    left: "50%",
    justifyContent: "center",
    width: 388,
    position: "absolute",
  },
  button: {
    top: 269,
    borderStyle: "solid",
    borderColor: Color.colorKhaki_100,
    borderWidth: 1.5,
    backgroundColor: Color.white,
  },
  signIn1: {
    color: Color.mytreeClarito,
  },
  button1: {
    top: 341,
    backgroundColor: Color.linearBoton,
  },
  confirmarParentesco: {
    width: 428,
    height: 413,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
  },
});

export default CONFIRMARPARENTESCO;
