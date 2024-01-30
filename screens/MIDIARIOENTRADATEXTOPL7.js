import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const MIDIARIOENTRADATEXTOPL7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.miDiarioEntradaTextoPl}>
      <LinearGradient
        style={[
          styles.miDiarioEntradaTextoPlChild,
          styles.navigationIconLayout,
        ]}
        locations={[0, 1]}
        colors={["rgba(221, 219, 246, 0.37)", "rgba(245, 245, 247, 0)"]}
      />
      <Pressable
        style={[styles.frameParent, styles.image6IconPosition]}
        onPress={() => navigation.navigate("MIDIARIOENTRADATEXTOPL1")}
      >
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>07</Text>
          <Text style={[styles.jul2023, styles.textTypo]}>jul. 2023</Text>
          <Image
            style={styles.iconlycurvedarrowDown2}
            contentFit="cover"
            source={require("../assets/iconlycurvedarrowdown2.png")}
          />
        </View>
        <Text style={[styles.descubriendoElMundo, styles.hoyLoHeFlexBox]}>
          Descubriendo el mundo
        </Text>
        <Text
          style={[styles.hoyLoHe, styles.hoyLoHeFlexBox]}
        >{`👫 Hoy lo he compartido con... 
😊 Hoy me siento/nos sentimos...

🌍 Lugar Explorado
🌟 El momento más emocionante fue...
😮 Lo que más nos impactó fue...
🌞 El mejor momento del día fue...`}</Text>
      </Pressable>
      <Image
        style={[styles.image6Icon, styles.image6IconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View
        style={[styles.iconlylightOutlinesearchParent, styles.parentFlexBox]}
      >
        <Image
          style={styles.iconlylightOutlinesearch}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinesearch5.png")}
        />
        <Image
          style={[styles.documentIcon, styles.documentIconLayout]}
          contentFit="cover"
          source={require("../assets/document3.png")}
        />
        <Image
          style={styles.documentIconLayout}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinesetting1.png")}
        />
      </View>
      <Image
        style={[styles.navigationIcon, styles.navigationIconLayout]}
        contentFit="cover"
        source={require("../assets/navigation25.png")}
      />
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={[styles.vectorWrapper, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector55.png")}
          />
        </View>
        <View>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector61.png")}
          />
        </View>
        <View>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector57.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameLayout} />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector58.png")}
          />
        </View>
        <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector68.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameLayout} />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector63.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationIconLayout: {
    width: 428,
    position: "absolute",
  },
  image6IconPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  hoyLoHeFlexBox: {
    marginTop: 20,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  vectorFlexBox: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm,
    width: 40,
    justifyContent: "space-between",
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameLayout: {
    zIndex: 0,
    height: 36,
    width: 40,
    backgroundColor: Color.secundario,
    borderRadius: Border.br_8xs,
  },
  vectorIconPosition1: {
    zIndex: 1,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 7,
    zIndex: 1,
    width: 26,
    position: "absolute",
  },
  miDiarioEntradaTextoPlChild: {
    height: 390,
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 64,
    width: 428,
  },
  text: {
    fontWeight: "700",
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  jul2023: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    marginLeft: 10,
  },
  iconlycurvedarrowDown2: {
    width: 14,
    height: 7,
    marginLeft: 10,
  },
  parent: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  descubriendoElMundo: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
  },
  hoyLoHe: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  frameParent: {
    top: 133,
    width: 388,
    height: 301,
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
  },
  iconlylightOutlinesearch: {
    height: 24,
    width: 24,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinesearchParent: {
    top: 20,
    left: 276,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    left: "50%",
    height: 105,
  },
  vectorIcon: {
    height: 28,
    width: 26,
  },
  vectorWrapper: {
    height: 36,
    backgroundColor: Color.secundario,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_sm,
  },
  frameChild: {
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorIcon1: {
    left: 8,
    top: 4,
    height: 28,
    width: 24,
  },
  vectorIcon2: {
    top: 4,
    height: 28,
  },
  vectorIcon3: {
    top: 6,
    height: 24,
  },
  rectangleParent: {
    height: 36,
    width: 40,
  },
  vectorIcon4: {
    height: 18,
    width: 26,
  },
  vectorContainer: {
    backgroundColor: Color.colorOldlace,
  },
  vectorIcon5: {
    height: "48.33%",
    width: "43.25%",
    top: "26.11%",
    right: "29%",
    bottom: "25.56%",
    left: "27.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frameGroup: {
    backgroundColor: Color.colorHoneydew_100,
    height: 49,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_xl,
    borderRadius: Border.br_8xs,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 428,
    left: 0,
    top: 64,
    position: "absolute",
  },
  miDiarioEntradaTextoPl: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default MIDIARIOENTRADATEXTOPL7;
