import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const OpcionesZonaHoraria = ({ onClose }) => {
  return (
    <View style={[styles.opcionesZonaHoraria, styles.frameChildLayout]}>
      <View style={styles.gmt6Parent}>
        <Text style={[styles.gmt6, styles.gmtTypo]}>GMT -6</Text>
        <Image
          style={[styles.frameChild, styles.gmt5SpaceBlock]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.gmt5, styles.gmt5SpaceBlock]}>GMT -5</Text>
        <Image
          style={[styles.frameChild, styles.gmt5SpaceBlock]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.gmt5, styles.gmt5SpaceBlock]}>GMT -4</Text>
        <Image
          style={[styles.frameChild, styles.gmt5SpaceBlock]}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.gmt5, styles.gmt5SpaceBlock]}>GMT -3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  gmtTypo: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  gmt5SpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  gmt6: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    overflow: "hidden",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  gmt5: {
    textAlign: "left",
    color: Color.gris,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  gmt6Parent: {
    flex: 1,
    alignSelf: "stretch",
  },
  opcionesZonaHoraria: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    height: 413,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_178xl,
  },
});

export default OpcionesZonaHoraria;
