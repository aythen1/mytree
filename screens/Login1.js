import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <LinearGradient
        style={styles.loginChild}
        locations={[0, 1]}
        colors={["#7ec18c", "#dee274"]}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector70.png")}
      />
      <View style={[styles.emailForm, styles.formLayout]}>
        <Text style={[styles.labelled, styles.labelledTypo]}>
          Correo Electrónico
        </Text>
        <View style={[styles.formDefaultIcon, styles.buttonLayout]}>
          <View style={[styles.baseBackground, styles.baseLayout]} />
          <View style={styles.iconsEnvelopeSimpleParent}>
            <Image
              style={styles.iconsEnvelopeSimple}
              contentFit="cover"
              source={require("../assets/icons--envelope-simple.png")}
            />
            <Text style={[styles.brunobrunocom, styles.labelledTypo]}>
              bruno@bruno.com
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.passwordForm, styles.formLayout]}>
        <Text style={[styles.labelled, styles.labelledTypo]}>Contraseña</Text>
        <View style={[styles.formDefaultIcon, styles.buttonLayout]}>
          <View style={styles.baseLayout} />
          <View style={[styles.iconsLockParent, styles.pressableFlexBox]}>
            <Image
              style={styles.iconsEnvelopeSimple}
              contentFit="cover"
              source={require("../assets/frame-1.png")}
            />
            <View style={styles.placeholder}>
              <Text style={[styles.placeholder1, styles.placeholder1Layout]}>
                *******************
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.welcomeBack, styles.welcomeBackLayout]}>
        <Text style={[styles.estsDeVuelta, styles.signInTypo]}>
          ¡ESTÁS DE VUELTA!
        </Text>
        <Text style={[styles.teRecibimosCon, styles.signInTypo]}>
          Te recibimos con gusto. Tu compromiso impulsa la creación de legados.
          Sigamos adelante, unidos en esta hermosa tarea.
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <Pressable
          style={styles.frameChild}
          onPress={() => navigation.navigate("Splash")}
        />
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
      </View>
      <Text style={[styles.ingresar, styles.signInTypo]}>INGRESAR</Text>
      <LinearGradient
        style={[styles.button, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["#dee274", "#7ec18c"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableFlexBox]}
          onPress={() => navigation.navigate("MUROINFORMACIN")}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Ingresar</Text>
        </Pressable>
      </LinearGradient>
      <View style={styles.frameParent}>
        <View style={styles.checkParent}>
          <View style={styles.check}>
            <View style={styles.checkChild} />
          </View>
          <View style={styles.checkboxLabel}>
            <Text style={styles.labelled2}>Recordarme</Text>
          </View>
        </View>
        <Text style={[styles.olvidasteTuContrasea, styles.signInTypo]}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formLayout: {
    height: 95,
    width: 388,
    left: 20,
    position: "absolute",
  },
  labelledTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  buttonLayout: {
    width: 388,
    position: "absolute",
  },
  baseLayout: {
    height: 50,
    backgroundColor: Color.fAFAFA,
    borderRadius: Border.br_3xs,
    width: 388,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder1Layout: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  welcomeBackLayout: {
    width: 286,
    position: "absolute",
  },
  signInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  parentPosition: {
    left: 15,
    position: "absolute",
  },
  loginChild: {
    width: 428,
    height: 434,
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "31.77%",
    width: "44.93%",
    top: "11.43%",
    right: "8.01%",
    bottom: "56.8%",
    left: "47.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.2,
    position: "absolute",
    overflow: "hidden",
  },
  labelled: {
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    fontWeight: "900",
    width: 388,
    left: 0,
    top: 0,
    position: "absolute",
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
  iconsEnvelopeSimple: {
    width: 24,
    height: 24,
  },
  brunobrunocom: {
    fontWeight: "300",
    marginLeft: 16,
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  iconsEnvelopeSimpleParent: {
    top: 15,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  formDefaultIcon: {
    top: 35,
    height: 60,
    left: 0,
  },
  emailForm: {
    top: 454,
  },
  placeholder1: {
    color: Color.neutralGray3,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    lineHeight: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placeholder: {
    width: 97,
    height: 18,
    marginLeft: 16,
  },
  iconsLockParent: {
    left: 15,
    position: "absolute",
    top: 14,
    flexDirection: "row",
  },
  passwordForm: {
    top: 569,
  },
  estsDeVuelta: {
    left: 31,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "900",
    position: "absolute",
    top: 0,
  },
  teRecibimosCon: {
    top: 54,
    lineHeight: 20,
    fontWeight: "700",
    display: "flex",
    color: Color.white,
    textAlign: "center",
    width: 286,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  welcomeBack: {
    top: 150,
    left: 71,
    height: 114,
  },
  frameChild: {
    width: 29,
    height: 28,
    zIndex: 0,
  },
  backButtonIcon: {
    left: 5,
    width: 18,
    height: 0,
    zIndex: 1,
    top: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: 26,
  },
  ingresar: {
    marginLeft: -44,
    top: 362,
    left: "50%",
    fontSize: FontSize.size_lg,
    textTransform: "uppercase",
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "900",
    position: "absolute",
  },
  signIn: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    flex: 1,
  },
  pressable: {
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    backgroundColor: Color.linearBoton,
    width: "100%",
  },
  button: {
    top: 744,
    left: 20,
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
    position: "absolute",
    backgroundColor: Color.white,
  },
  check: {
    width: 20,
    height: 20,
  },
  labelled2: {
    lineHeight: 20,
    color: Color.neutralGray1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    left: 0,
    top: 0,
    position: "absolute",
  },
  checkboxLabel: {
    width: 64,
    marginLeft: 20,
    height: 20,
  },
  checkParent: {
    flexDirection: "row",
  },
  olvidasteTuContrasea: {
    fontWeight: "500",
    color: Color.primario1,
    marginLeft: 148,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  frameParent: {
    top: 684,
    alignItems: "flex-end",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_21xl,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Login1;
