import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Padres = ({ onClose }) => {
  return (
    <View style={styles.padres}>
      <View style={styles.quienesSonLosPadresParent}>
        <Text style={styles.quienesSonLos}>¿Quienes son los padres?</Text>
        <View style={styles.frameParent}>
          <View style={[styles.parent, styles.groupFlexBox]}>
            <Text style={styles.text}>👫</Text>
            <Text style={[styles.text1, styles.textTypo]}>👭🏻</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`👬 `}</Text>
          </View>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Text style={styles.text}>{`🫄  `}</Text>
            <Text style={[styles.text4, styles.textTypo]}>{`🫃  `}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🤰  `}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 50,
    textAlign: "left",
    lineHeight: 48,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  quienesSonLos: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  text: {
    textAlign: "left",
    lineHeight: 48,
    fontSize: FontSize.size_21xl,
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  text1: {
    color: Color.negro,
  },
  parent: {
    width: 232,
  },
  text4: {
    color: Color.white,
  },
  group: {
    width: 231,
    marginTop: 10,
  },
  frameParent: {
    width: 348,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  quienesSonLosPadresParent: {
    alignItems: "center",
  },
  padres: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    height: 413,
    padding: Padding.p_xl,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default Padres;
