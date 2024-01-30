import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Tiempo = () => {
  return (
    <View style={styles.tiempo}>
      <Text style={styles.aomesTypo}>AÑO/MES/DÍA</Text>
      <Image
        style={styles.tiempoChild}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.aomes, styles.aomesTypo]}>AÑO/MES</Text>
      <Image
        style={styles.tiempoChild}
        contentFit="cover"
        source={require("../assets/line-81.png")}
      />
      <Text style={[styles.aomes, styles.aomesTypo]}>AÑO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aomesTypo: {
    textAlign: "left",
    color: Color.primario1,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  tiempoChild: {
    maxHeight: "100%",
    width: 388,
    marginTop: 10,
  },
  aomes: {
    marginTop: 10,
  },
  tiempo: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: Padding.p_xl,
  },
});

export default Tiempo;
