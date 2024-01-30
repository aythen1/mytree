import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splash}>
      <View style={styles.splashChild} />
      <Image
        style={styles.splashItem}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.splashInner, styles.splashLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.splashLayout]}
        contentFit="cover"
        source={require("../assets/vector-8.png")}
      />
      <Image
        style={[styles.splashChild1, styles.splashLayout]}
        contentFit="cover"
        source={require("../assets/vector-9.png")}
      />
      <Image
        style={[styles.splashChild2, styles.splashChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={[styles.splashChild3, styles.splashChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.splashChild4, styles.splashChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={styles.splashChild5}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      {/* <Text style={styles.mytree}>MyTree</Text> */}
      <View style={styles.image6Parent}>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-61.png")}
        />
        <View style={styles.interactaConTusGeneracioneParent}>
          <Text style={styles.interactaConTus}>{`Interactúa con tus
generaciones`}</Text>
          <Text
            style={[styles.tuHistoriaComienza, styles.oTypo]}
          >{`Tu historia comienza aquí, dejando una huella en el corazón de tu familia
`}</Text>
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.rectangleParent, styles.frameChildLayout]}>
            <View style={[styles.frameChild, styles.buttonBorder]} />
            <Image
              style={[
                styles.fontistofacebookIcon,
                styles.devicongooglePosition,
              ]}
              contentFit="cover"
              source={require("../assets/fontistofacebook.png")}
            />
          </View>
          <View style={[styles.rectangleParent, styles.frameChildLayout]}>
            <View style={[styles.frameChild, styles.buttonBorder]} />
            <Image
              style={[styles.devicongoogle, styles.devicongooglePosition]}
              contentFit="cover"
              source={require("../assets/devicongoogle.png")}
            />
          </View>
        </View>
        <View style={styles.interactaConTusGeneracioneParent}>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Text style={styles.signTypo}>INICIAR SESIÓN</Text>
          </View>
          <Text style={[styles.o, styles.oTypo]}>O</Text>
          <LinearGradient
            style={[styles.button1, styles.buttonLayout]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Pressable
              style={[styles.pressable, styles.buttonSpaceBlock]}
              onPress={() => navigation.navigate("REGISTRONOMBRE1")}
            >
              <Text style={[styles.signIn1, styles.signTypo]}>REGISTRARSE</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashLayout: {
    height: 824,
    width: 869,
    left: -9,
    position: "absolute",
  },
  splashChildLayout: {
    height: 347,
    width: 231,
    position: "absolute",
  },
  oTypo: {
    fontSize: FontSize.size_sm,
    marginTop: 20,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 20,
  },
  frameChildLayout: {
    height: 40,
    width: 40,
  },
  buttonBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  devicongooglePosition: {
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_11xl,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLayout: {
    height: 52,
    width: 222,
  },
  signTypo: {
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  splashChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xl,
    width: 428,
    position: "absolute",
    height: 926,
    backgroundColor: Color.white,
  },
  splashItem: {
    top: 529,
    left: -94,
    width: 387,
    height: 225,
    position: "absolute",
  },
  splashInner: {
    top: 605,
  },
  vectorIcon: {
    top: 635,
  },
  splashChild1: {
    top: 657,
  },
  splashChild2: {
    left: -65,
    top: -195,
    height: 347,
    width: 231,
  },
  splashChild3: {
    left: -46,
    top: -195,
    height: 347,
    width: 231,
  },
  splashChild4: {
    top: -207,
    left: -84,
  },
  splashChild5: {
    top: -124,
    left: 64,
    width: 620,
    height: 626,
    position: "absolute",
  },
  mytree: {
    marginLeft: -52,
    top: 152,
    left: "50%",
    fontSize: FontSize.size_13xl,
    color: Color.primary,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  image6Icon: {
    width: 195,
    height: 123,
  },
  interactaConTus: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    textAlign: "center",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
  },
  tuHistoriaComienza: {
    width: 315,
    marginTop: 20,
  },
  interactaConTusGeneracioneParent: {
    marginTop: 25,
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_31xl,
    borderColor: Color.primario2,
    zIndex: 0,
    height: 40,
    width: 40,
  },
  fontistofacebookIcon: {
    top: 12,
    left: 16,
    width: 8,
    height: 17,
  },
  rectangleParent: {
    justifyContent: "space-between",
  },
  devicongoogle: {
    top: 11,
    left: 11,
    width: 18,
    height: 18,
  },
  frameParent: {
    width: 85,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25,
  },
  button: {
    borderColor: Color.primario1,
    height: 52,
    width: 222,
    borderWidth: 1,
    borderStyle: "solid",
  },
  o: {
    marginTop: 20,
  },
  signIn1: {
    color: Color.white,
  },
  pressable: {
    height: "100%",
    backgroundColor: Color.linearBoton,
    width: "100%",
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_11xl,
  },
  button1: {
    marginTop: 20,
  },
  image6Parent: {
    top: 128,
    left: 57,
    alignItems: "center",
    position: "absolute",
  },
  splash: {
    borderRadius: Border.br_21xl,
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Splash;
