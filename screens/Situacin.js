import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Situacin = () => {
  return (
    <View style={styles.situacin}>
      <View style={styles.buenaParent}>
        <Text style={styles.malaTypo}>Buena</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-783.png")}
        />
        <Text style={[styles.mala, styles.malaTypo]}>Mala</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  malaTypo: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    maxHeight: "100%",
    marginTop: 20,
    width: 348,
  },
  mala: {
    marginTop: 20,
  },
  buenaParent: {
    position: "absolute",
    top: 20,
    left: 20,
    height: 78,
    width: 348,
  },
  situacin: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 249,
  },
});

export default Situacin;
