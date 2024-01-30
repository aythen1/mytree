import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const SubeTusRecuerdos = () => {
  return (
    <View style={[styles.subeTusRecuerdos, styles.buttonFlexBox]}>
      <View>
        <View style={styles.seleccionarParent}>
          <Text style={styles.seleccionar}>Seleccionar</Text>
          <View style={styles.imageParent}>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
            <Image
              style={[styles.videoIcon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/video.png")}
            />
            <Image
              style={[styles.documentIcon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/document.png")}
            />
            <Image
              style={[styles.voiceIcon, styles.iconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/voice.png")}
            />
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-15477548421.png")}
        />
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Text style={styles.signIn}>Guardar</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_11xl,
    alignItems: "center",
  },
  iconSpaceBlock: {
    marginLeft: 23,
    overflow: "hidden",
  },
  seleccionar: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  imageIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  videoIcon: {
    width: 26,
    height: 20,
  },
  documentIcon: {
    width: 23,
    height: 23,
  },
  voiceIcon: {
    width: 20,
    height: 25,
  },
  imageParent: {
    marginLeft: 125,
    flexDirection: "row",
    alignItems: "center",
  },
  seleccionarParent: {
    flexDirection: "row",
  },
  frameChild: {
    height: 246,
    marginTop: 20,
    width: 388,
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    flex: 1,
  },
  button: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 30,
    width: 388,
    flexDirection: "row",
  },
  subeTusRecuerdos: {
    backgroundColor: Color.white,
    width: "100%",
    height: 414,
    padding: Padding.p_xl,
    flex: 1,
  },
});

export default SubeTusRecuerdos;
