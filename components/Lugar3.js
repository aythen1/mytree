import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Lugar3 = ({ onClose }) => {
  return (
    <View style={styles.lugar}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.searchBar, styles.searchBarFlexBox]}>
          <Image
            style={styles.iconlylightOutlinesearch}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesearch3.png")}
          />
          <View style={[styles.placeholderInput, styles.searchBarFlexBox]}>
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
        style={[styles.rectangleIcon, styles.buttonPosition]}
        contentFit="cover"
        source={require("../assets/rectangle5.png")}
      />
      <View style={[styles.fieldWithTitle, styles.headerPosition]}>
        <View style={styles.titleBase}>
          <Text style={[styles.momento, styles.signInTypo]}>Momento</Text>
        </View>
        <View style={styles.field}>
          <Text style={[styles.culEsEste, styles.signInTypo]}>
            ¿Cuál es este momento?
          </Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.button, styles.buttonPosition]}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Text style={[styles.signIn, styles.signInTypo]}>Guardar</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: "50%",
    position: "absolute",
  },
  searchBarFlexBox: {
    flex: 1,
    flexDirection: "row",
  },
  buttonPosition: {
    position: "absolute",
    width: 388,
    left: 20,
  },
  signInTypo: {
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
  },
  iconlylightOutlinesearch: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: FontFamily.nunito,
    color: Color.textPlaceholder,
    textAlign: "left",
    letterSpacing: 0,
  },
  placeholderInput: {
    marginLeft: 6,
  },
  searchBar: {
    backgroundColor: Color.backgroundFieldBackground,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
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
    marginLeft: -212,
    top: 20,
    width: 424,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  rectangleIcon: {
    top: 89,
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 182,
    width: 388,
    left: 20,
  },
  momento: {
    top: -2,
    left: 0,
    color: Color.textTextPrimary,
    fontWeight: "500",
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  titleBase: {
    width: 69,
    height: 19,
  },
  culEsEste: {
    marginTop: -9.5,
    top: "50%",
    color: Color.gris,
    fontWeight: "500",
    lineHeight: 19,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
    left: 20,
  },
  field: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    height: 49,
    width: 388,
  },
  fieldWithTitle: {
    marginLeft: -194,
    top: 291,
    width: 388,
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  button: {
    top: 379,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    width: 388,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
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

export default Lugar3;
