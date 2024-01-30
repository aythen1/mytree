import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Parentezco = ({ onClose }) => {
  return (
    <View style={[styles.parentezco, styles.parentezcoLayout]}>
      <View style={styles.familiarFlexBox}>
        <Text style={[styles.familiar, styles.amigoTypo]}>{`Familiar `}</Text>
        <Image
          style={[styles.frameChild, styles.amigoFlexBox]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.amigo, styles.amigoFlexBox]}>Amigo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentezcoLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  amigoTypo: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  amigoFlexBox: {
    marginTop: 20,
    flex: 1,
    alignSelf: "stretch",
  },
  familiar: {
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    overflow: "hidden",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  amigo: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  familiarFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  parentezco: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    height: 413,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: 315,
  },
});

export default Parentezco;
