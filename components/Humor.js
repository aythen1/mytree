import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Humor = ({ onClose }) => {
  return (
    <View style={styles.humor}>
      <Text style={styles.cmoEstTu}>¿Cómo está tu día?</Text>
      <View style={styles.parent}>
        <Text style={styles.text}>{`😳 `}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`😊 `}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`😄 `}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`🥰 `}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`😉 `}</Text>
        <Text style={[styles.text5, styles.textTypo]}>{`😞 `}</Text>
        <Text style={[styles.text5, styles.textTypo]}>{`😢 `}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`😠 `}</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`😮‍💨 `}</Text>
        <Text style={[styles.text5, styles.textTypo]}>{`🫤 `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    marginLeft: 20,
    textAlign: "left",
    lineHeight: 59,
    fontSize: FontSize.size_30xl,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  cmoEstTu: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    textAlign: "center",
    width: 164,
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  text: {
    textAlign: "left",
    lineHeight: 59,
    fontSize: FontSize.size_30xl,
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    letterSpacing: 0,
  },
  text1: {
    color: Color.negro,
  },
  text5: {
    color: Color.white,
  },
  parent: {
    width: 388,
    height: 166,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  humor: {
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

export default Humor;
