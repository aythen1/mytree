import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const LOGIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <LinearGradient
        style={[styles.loginInner, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#7ec18c", "#dee274"]}
      >
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <Pressable
            style={styles.backButtonWrapper}
            onPress={() => navigation.navigate("Splash")}
          >
            <Image
              style={[styles.backButtonIcon, styles.frameParentPosition]}
              contentFit="cover"
              source={require("../assets/back-button.png")}
            />
          </Pressable>
          <View style={styles.frameGroup}>
            <View style={styles.estsDeVueltaParent}>
              <Text style={[styles.estsDeVuelta, styles.signInClr]}>
                ¡ESTÁS DE VUELTA!
              </Text>
              <Text style={[styles.teRecibimosCon, styles.signInClr]}>
                Te recibimos con gusto. Tu compromiso impulsa la creación de
                legados. Sigamos adelante, unidos en esta hermosa tarea.
              </Text>
            </View>
            <Text style={[styles.ingresar, styles.signInClr]}>INGRESAR</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={[styles.frameContainer, styles.checkChildBg]}>
        <View>
          <Text style={[styles.labelled, styles.signInLayout]}>
            Correo Electrónico
          </Text>
          <View style={styles.baseBackgroundParent}>
            <View style={[styles.baseBackground, styles.baseLayout]} />
            <View
              style={[
                styles.iconsEnvelopeSimpleParent,
                styles.frameChildPosition,
              ]}
            >
              <Image
                style={styles.frameChildLayout}
                contentFit="cover"
                source={require("../assets/icons--envelope-simple.png")}
              />
              <Image
                style={styles.placeholderIcon}
                contentFit="cover"
                source={require("../assets/placeholder.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.labelledGroup}>
          <Text style={[styles.labelled, styles.signInLayout]}>Contraseña</Text>
          <View style={styles.baseBackgroundParent}>
            <View style={styles.baseLayout} />
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/frame-1.png")}
            />
          </View>
        </View>
        <View style={styles.frameView}>
          <View style={styles.checkParent}>
            <View style={styles.check}>
              <View style={[styles.checkChild, styles.checkChildBg]} />
            </View>
            <Text style={[styles.labelled2, styles.labelled2Typo]}>
              Recordarme
            </Text>
          </View>
          <Text style={[styles.olvidasteTuContrasea, styles.labelled2Typo]}>
            ¿Olvidaste tu contraseña?
          </Text>
        </View>
        <LinearGradient
          style={[styles.button, styles.buttonFlexBox]}
          locations={[0, 1]}
          colors={["#dee274", "#7ec18c"]}
        >
          <Text style={[styles.signIn, styles.signInLayout]}>Ingresar</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    backgroundColor: Color.linearBoton,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParentPosition: {
    zIndex: 0,
    position: "absolute",
  },
  signInClr: {
    color: Color.white,
    textAlign: "center",
  },
  checkChildBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  signInLayout: {
    lineHeight: 24,
    fontFamily: FontFamily.lato,
  },
  baseLayout: {
    height: 50,
    backgroundColor: Color.fAFAFA,
    borderRadius: Border.br_3xs,
    width: 388,
    zIndex: 0,
  },
  frameChildPosition: {
    zIndex: 1,
    position: "absolute",
  },
  frameChildLayout: {
    height: 24,
    width: 24,
  },
  labelled2Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.lato,
  },
  backButtonIcon: {
    top: 33,
    left: 26,
    width: 18,
    height: 0,
  },
  backButtonWrapper: {
    padding: Padding.p_xl,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  estsDeVuelta: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    color: Color.white,
    fontWeight: "900",
    lineHeight: 24,
  },
  teRecibimosCon: {
    lineHeight: 20,
    fontWeight: "700",
    display: "flex",
    width: 286,
    marginTop: 30,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  estsDeVueltaParent: {
    alignItems: "center",
  },
  ingresar: {
    fontSize: FontSize.size_lg,
    textTransform: "uppercase",
    marginTop: 98,
    textAlign: "center",
    fontFamily: FontFamily.lato,
    color: Color.white,
    fontWeight: "900",
    lineHeight: 24,
  },
  frameGroup: {
    paddingLeft: 47,
    paddingRight: 55,
    marginTop: 97,
    alignItems: "center",
    width: 428,
  },
  frameParent: {
    marginLeft: -214,
    left: "50%",
    height: 434,
    width: 428,
    top: 0,
  },
  loginInner: {
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.linearBoton,
  },
  labelled: {
    color: Color.negro,
    width: 388,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "900",
  },
  baseBackground: {
    shadowColor: "rgba(244, 105, 76, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
  },
  placeholderIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 22,
    marginLeft: 16,
  },
  iconsEnvelopeSimpleParent: {
    top: 15,
    left: 16,
    flexDirection: "row",
  },
  baseBackgroundParent: {
    marginTop: 11,
  },
  frameChild: {
    top: 14,
    left: 15,
    zIndex: 1,
    position: "absolute",
  },
  labelledGroup: {
    marginTop: 33,
  },
  checkChild: {
    height: "105%",
    width: "105%",
    top: "-2.5%",
    right: "-2.5%",
    bottom: "-2.5%",
    left: "-2.5%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  check: {
    width: 20,
    height: 20,
  },
  labelled2: {
    lineHeight: 20,
    color: Color.neutralGray1,
    marginLeft: 20,
    textAlign: "left",
  },
  checkParent: {
    flexDirection: "row",
  },
  olvidasteTuContrasea: {
    lineHeight: 18,
    fontWeight: "500",
    color: Color.primario1,
    marginLeft: 148,
    textAlign: "center",
  },
  frameView: {
    marginTop: 33,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    textAlign: "center",
    color: Color.white,
    flex: 1,
  },
  button: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    marginTop: 33,
    width: 388,
  },
  frameContainer: {
    top: 434,
    height: 492,
    padding: Padding.p_xl,
    alignItems: "center",
    width: 428,
    left: 0,
  },
  login: {
    borderRadius: Border.br_21xl,
    width: "100%",
    height: 926,
    flex: 1,
  },
});

export default LOGIN;
