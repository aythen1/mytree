import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Lugar1 = ({ onClose }) => {
  return (
    <View style={styles.lugar}>
      <View style={[styles.frameParent, styles.headerLayout]}>
        <View style={styles.headerParent}>
          <View style={[styles.header, styles.headerLayout]}>
            <View style={styles.searchBar}>
              <Image
                style={styles.iconlylightOutlinesearch}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesearch2.png")}
              />
              <View style={styles.placeholderInput}>
                <Text style={styles.search}>{`Search `}</Text>
              </View>
            </View>
            <View style={styles.iconlylightsendCopyWrapper}>
              <Image
                style={styles.iconlylightsendCopy}
                contentFit="cover"
                source={require("../assets/iconlylightsend-copy1.png")}
              />
            </View>
          </View>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle4.png")}
          />
        </View>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Text style={styles.signIn}>Guardar</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 424,
    alignItems: "center",
  },
  iconlylightOutlinesearch: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 21,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: FontFamily.nunito,
    color: Color.textPlaceholder,
    textAlign: "left",
  },
  placeholderInput: {
    marginLeft: 6,
    flex: 1,
    flexDirection: "row",
  },
  searchBar: {
    backgroundColor: Color.backgroundFieldBackground,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_11xl,
  },
  iconlylightsendCopy: {
    width: 24,
    height: 24,
  },
  iconlylightsendCopyWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundGreyBackground,
    padding: Padding.p_7xs,
    marginLeft: 16,
    flexDirection: "row",
  },
  header: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  rectangleIcon: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 270,
    marginTop: 8,
    width: 388,
  },
  headerParent: {
    alignItems: "center",
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.lato,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    marginTop: 20,
    width: 388,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_11xl,
  },
  frameParent: {
    position: "absolute",
    top: 20,
    left: 2,
    alignItems: "center",
  },
  lugar: {
    width: 428,
    height: 451,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_11xl,
  },
});

export default Lugar1;
