import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Keyboard1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.keyboard}
      onPress={() => navigation.navigate("REGISTROTELFONO")}
    >
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={styles.keys}>
        <Image
          style={styles.deleteIcon}
          contentFit="cover"
          source={require("../assets/delete.png")}
        />
        <View style={[styles.view, styles.viewPosition5]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background.png")}
          />
          <Text style={[styles.number, styles.numberTypo]}>0</Text>
        </View>
        <View style={[styles.view1, styles.viewPosition3]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>WXYZ</Text>
          <Text style={[styles.number1, styles.numberTypo]}>9</Text>
        </View>
        <View style={[styles.view2, styles.viewPosition4]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background2.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>TUV</Text>
          <Text style={[styles.number1, styles.numberTypo]}>8</Text>
        </View>
        <View style={[styles.view3, styles.viewPosition2]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background3.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>PQRS</Text>
          <Text style={[styles.number1, styles.numberTypo]}>7</Text>
        </View>
        <View style={[styles.view4, styles.viewPosition1]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background4.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>MNO</Text>
          <Text style={[styles.number1, styles.numberTypo]}>6</Text>
        </View>
        <View style={[styles.view5, styles.viewPosition1]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background5.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>JKL</Text>
          <Text style={[styles.number1, styles.numberTypo]}>5</Text>
        </View>
        <View style={[styles.view6, styles.viewPosition1]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background6.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>GHI</Text>
          <Text style={[styles.number1, styles.numberTypo]}>4</Text>
        </View>
        <View style={[styles.view7, styles.viewPosition]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background7.png")}
          />
          <Text style={[styles.label6, styles.labelTypo]}>DEF</Text>
          <Text style={[styles.number7, styles.numberTypo]}>3</Text>
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background8.png")}
          />
          <Text style={[styles.label6, styles.labelTypo]}>ABC</Text>
          <Text style={[styles.number7, styles.numberTypo]}>2</Text>
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <Image
            style={styles.keyBackgroundIcon}
            contentFit="cover"
            source={require("../assets/key-background9.png")}
          />
          <Text style={[styles.label6, styles.labelTypo]}>{` `}</Text>
          <Text style={[styles.number7, styles.numberTypo]}>1</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  numberTypo: {
    width: 133,
    textAlign: "center",
    color: Color.primary,
    fontFamily: FontFamily.nunito,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    left: 0,
    position: "absolute",
  },
  viewPosition3: {
    left: "67.77%",
    right: "0%",
  },
  labelTypo: {
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    width: 133,
    textAlign: "center",
    color: Color.primary,
    fontFamily: FontFamily.nunito,
    left: 0,
    position: "absolute",
  },
  viewPosition4: {
    bottom: "25.61%",
    top: "51.68%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition2: {
    right: "67.77%",
    left: "0%",
  },
  viewPosition1: {
    bottom: "51.68%",
    top: "25.61%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "77.76%",
    top: "0%",
    width: "32.23%",
    height: "22.24%",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    right: -1,
    bottom: 0,
    left: 1,
    height: 34,
    position: "absolute",
  },
  deleteIcon: {
    width: 27,
    height: 20,
  },
  keyBackgroundIcon: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  number: {
    top: "15.13%",
  },
  view: {
    top: "77.8%",
    bottom: "-0.04%",
    width: "32.23%",
    height: "22.24%",
    left: "33.88%",
    right: "33.88%",
    position: "absolute",
  },
  label: {
    top: "63.04%",
  },
  number1: {
    top: "2.25%",
  },
  view1: {
    bottom: "25.61%",
    top: "51.68%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view2: {
    left: "33.88%",
    right: "33.88%",
  },
  view3: {
    bottom: "25.61%",
    top: "51.68%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view4: {
    left: "67.77%",
    right: "0%",
  },
  view5: {
    left: "33.88%",
    right: "33.88%",
  },
  view6: {
    right: "67.77%",
    left: "0%",
  },
  label6: {
    top: "63.03%",
  },
  number7: {
    top: "2.11%",
  },
  view7: {
    left: "67.77%",
    right: "0%",
  },
  view8: {
    left: "33.88%",
    right: "33.88%",
  },
  view9: {
    right: "67.77%",
    left: "0%",
  },
  keys: {
    height: "71.12%",
    width: "96.8%",
    top: "2.06%",
    right: "1.6%",
    bottom: "26.82%",
    left: "1.6%",
    position: "absolute",
  },
  keyboard: {
    backgroundColor: Color.colorLightgray,
    width: 425,
    height: 330,
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export default Keyboard1;
