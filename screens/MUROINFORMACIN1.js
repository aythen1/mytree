import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const MUROINFORMACIN1 = () => {
  return (
    <View style={styles.muroInformacin}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.childLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
      </View>
      <LinearGradient
        style={[styles.muroInformacinChild, styles.childLayout]}
        locations={[0.77, 1]}
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
      />
      <View style={styles.instanceParent}>
        <View style={[styles.popularWrapper, styles.tabsFlexBox]}>
          <Text style={[styles.popular, styles.popularTypo]}>Familia</Text>
        </View>
        <View style={[styles.tabs, styles.tabsFlexBox]}>
          <Text style={[styles.trending, styles.popularTypo]}>Retos</Text>
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupChild, styles.vectorIconLayout]} />
        <View style={[styles.groupItem, styles.itemLayout]} />
        <View style={[styles.groupItem, styles.itemLayout]}>
          <View style={[styles.frameItem, styles.itemLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector15.png")}
          />
        </View>
      </View>
      <View style={[styles.messageParent, styles.buttonPosition]}>
        <Image
          style={[styles.messageIcon, styles.messageIconLayout]}
          contentFit="cover"
          source={require("../assets/message1.png")}
        />
        <Image
          style={[styles.iconlylightOutlineplus, styles.messageIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightoutlineplus2.png")}
        />
        <Image
          style={[styles.iconlylightOutlineplus, styles.messageIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinesetting5.png")}
        />
      </View>
      <Text
        style={[styles.yendoALa, styles.textTypo]}
      >{`Yendo a la casa de la tía Elisa! Los esperamos allá,
familia!`}</Text>
      <Text style={[styles.camila, styles.textTypo]}>Camila</Text>
      <View style={styles.iconlyboldchatParent}>
        <Image
          style={styles.iconlyboldchatLayout}
          contentFit="cover"
          source={require("../assets/iconlyboldchat1.png")}
        />
        <Image
          style={[styles.iconlyboldsend, styles.iconlyboldchatLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldsend1.png")}
        />
      </View>
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require("../assets/navigation26.png")}
      />
      <View style={[styles.button, styles.buttonPosition]}>
        <Text style={[styles.text, styles.textTypo]}>50%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_xl,
    height: 732,
    width: 388,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 63,
    position: "absolute",
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 194,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  popularTypo: {
    width: 110,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  itemLayout: {
    height: 53,
    width: 53,
    borderRadius: Border.br_4xl,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "50%",
    top: "50%",
  },
  buttonPosition: {
    top: 36,
    position: "absolute",
  },
  messageIconLayout: {
    width: 24,
    height: 24,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    position: "absolute",
  },
  iconlyboldchatLayout: {
    height: 40,
    width: 40,
  },
  frameChild: {
    backgroundColor: Color.mytreeClarito,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    marginTop: -29,
    marginLeft: -40,
    width: 78,
    left: "50%",
    top: "50%",
  },
  rectangleParent: {
    height: 732,
    width: 388,
    left: 20,
    top: 139,
    position: "absolute",
  },
  muroInformacinChild: {
    backgroundColor: Color.linearBoton,
    left: 20,
    top: 139,
    borderRadius: Border.br_xl,
  },
  popular: {
    fontWeight: "700",
  },
  popularWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.backgroundPrimaryBackground,
    overflow: "hidden",
  },
  trending: {
    fontWeight: "300",
    color: Color.textPlaceholder,
  },
  tabs: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
  },
  instanceParent: {
    top: 80,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: -2,
    borderRadius: Border.br_6xl,
    borderStyle: "solid",
    borderColor: "#7f77fe",
    borderWidth: 2,
    width: 63,
  },
  groupItem: {
    top: 3,
    left: 3,
  },
  frameItem: {
    backgroundColor: "#dedcee",
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    marginTop: -7.5,
    marginLeft: -10.5,
    width: 20,
    height: 15,
    position: "absolute",
  },
  rectangleGroup: {
    top: 159,
    width: 59,
    height: 59,
    left: 40,
    position: "absolute",
  },
  messageIcon: {
    height: 24,
  },
  iconlylightOutlineplus: {
    marginLeft: 30,
    height: 24,
  },
  messageParent: {
    left: 276,
    justifyContent: "center",
    alignItems: "center",
    top: 36,
    flexDirection: "row",
  },
  yendoALa: {
    top: 813,
    color: Color.white,
    textAlign: "left",
    left: 40,
    fontSize: FontSize.size_base,
  },
  camila: {
    top: 764,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "left",
    left: 40,
    fontWeight: "700",
  },
  iconlyboldsend: {
    marginTop: 39,
  },
  iconlyboldchatParent: {
    top: 595,
    left: 348,
    position: "absolute",
  },
  navigationIcon: {
    top: 857,
    width: 428,
    height: 105,
    left: 0,
    position: "absolute",
  },
  text: {
    marginTop: -8,
    marginLeft: -14,
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    left: "50%",
    top: "50%",
  },
  button: {
    borderRadius: Border.br_7xs,
    width: 62,
    height: 24,
    backgroundColor: Color.mytreeClarito,
    left: 20,
  },
  muroInformacin: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 964,
    overflow: "hidden",
  },
});

export default MUROINFORMACIN1;
