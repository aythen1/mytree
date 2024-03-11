import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const REGISTRONOMBRE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroNombre}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector71.png")}
      />
      <View style={styles.frameParent}>
        <View>
          <LinearGradient
            style={styles.frameChild}
            locations={[0, 1]}
            colors={["#7ec18c", "#dee274"]}
          />
          <View style={[styles.rectangleGroup, styles.groupIconPosition]}>
            <Pressable
              style={styles.frameItem}
              onPress={() => navigation.navigate("REGISTRONOMBRE1")}
            />
            <Image
              style={[styles.backButtonIcon, styles.groupIconPosition]}
              contentFit="cover"
              source={require("../assets/back-button1.png")}
            />
          </View>
          <View style={styles.registrateParent}>
            <Text style={[styles.registrate, styles.registrateTypo]}>
              ¡REGISTRATE!
            </Text>
            <Text style={[styles.laFamiliaEs, styles.registrateTypo]}>
              La familia es el cimiento de la sociedad, donde el amor y el apoyo
              mutuo crean un hogar lleno de calor y seguridad.
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.lineParent}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/line-711.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseParentShadowBox]}>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-71581.png")}
              />
              <Image
                style={[styles.groupIcon, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group-11712750031.png")}
              />
            </View>
            <View style={[styles.ellipseGroup, styles.ellipseParentShadowBox]}>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-71581.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/vector77.png")}
              />
            </View>
            <View
              style={[styles.ellipseContainer, styles.ellipseParentShadowBox]}
            >
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-71581.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/vector76.png")}
              />
            </View>
            <View style={[styles.frameView, styles.ellipseParentShadowBox]}>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-7158.png")}
              />
              <Image
                style={[styles.vectorIcon3, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector74.png")}
              />
            </View>
            <View
              style={[styles.ellipseParent1, styles.ellipseParentShadowBox]}
            >
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-71581.png")}
              />
              <Image
                style={[styles.vectorIcon4, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/vector80.png")}
              />
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.labelledParent}>
              <Text style={[styles.labelled, styles.labelledTypo]}>
                Nombre Completo
              </Text>
              <View style={styles.baseBackgroundParent}>
                <View
                  style={[styles.baseBackground, styles.ellipseParentShadowBox]}
                />
                <View style={[styles.frameParent1, styles.groupIconPosition]}>
                  <View style={styles.vectorParent}>
                    <Image
                      style={[styles.vectorIcon5, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector81.png")}
                    />
                    <Text style={[styles.placeholder, styles.labelledTypo]}>
                      Bruno Pham
                    </Text>
                  </View>
                  <Image
                    style={[styles.vectorIcon5, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/icons--error-circle.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable
              style={styles.labelled1}
              onPress={() => navigation.navigate("REGISTROFECHADENACIMIENTO1")}
            >
              <Text
                style={[styles.continuar, styles.labelledTypo]}
              >{`Continuar >`}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  registrateTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.lato,
  },
  ellipseParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
  },
  vectorIconLayout: {
    width: 24,
    height: 24,
  },
  labelledTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  vectorIcon: {
    height: "37.33%",
    width: "77.1%",
    top: "-5.98%",
    right: "0%",
    bottom: "68.65%",
    left: "22.9%",
    opacity: 0.2,
    position: "absolute",
  },
  frameChild: {
    width: 428,
    height: 243,
    backgroundColor: Color.linearBoton,
    zIndex: 0,
  },
  frameItem: {
    width: 29,
    height: 28,
    zIndex: 0,
  },
  backButtonIcon: {
    top: 14,
    left: 5,
    width: 18,
    height: 0,
  },
  rectangleGroup: {
    top: 26,
    left: 15,
  },
  registrate: {
    lineHeight: 24,
    transform: [
      {
        rotate: "-0.55deg",
      },
    ],
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.lato,
  },
  laFamiliaEs: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    width: 323,
    marginTop: 16,
  },
  registrateParent: {
    top: 109,
    left: 52,
    zIndex: 2,
    alignItems: "center",
    position: "absolute",
  },
  frameInner: {
    top: 20,
    left: 30,
    width: 328,
    height: 1,
    position: "absolute",
  },
  ellipseIcon: {
    width: 40,
    height: 40,
    zIndex: 0,
  },
  groupIcon: {
    height: "60%",
    width: "40%",
    top: "20%",
    right: "30%",
    bottom: "20%",
    left: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseParent: {
    left: 178,
    flexDirection: "row",
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "42.5%",
    width: "60%",
    top: "30%",
    right: "20%",
    bottom: "27.5%",
    left: "20%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseGroup: {
    left: 267,
    flexDirection: "row",
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    top: 0,
    position: "absolute",
  },
  vectorIcon2: {
    height: "50%",
    width: "45%",
    top: "25%",
    right: "27.5%",
    bottom: "25%",
    left: "27.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseContainer: {
    left: 356,
    flexDirection: "row",
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    top: 0,
    position: "absolute",
  },
  vectorIcon3: {
    top: 8,
    left: 8,
    height: 24,
    zIndex: 1,
    position: "absolute",
  },
  frameView: {
    flexDirection: "row",
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    top: 0,
    position: "absolute",
    left: 0,
  },
  vectorIcon4: {
    top: 9,
    left: 9,
    width: 22,
    height: 22,
  },
  ellipseParent1: {
    left: 89,
    flexDirection: "row",
    elevation: 25,
    shadowRadius: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    top: 0,
    position: "absolute",
  },
  lineParent: {
    width: 396,
    height: 40,
  },
  labelled: {
    color: Color.negro,
    textAlign: "left",
    lineHeight: 41,
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  baseBackground: {
    borderRadius: Border.br_5xs,
    shadowRadius: 14,
    elevation: 14,
    borderStyle: "solid",
    borderColor: Color.primario1,
    borderWidth: 1,
    width: 325,
    height: 51,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    zIndex: 0,
    backgroundColor: Color.white,
  },
  vectorIcon5: {
    height: 24,
  },
  placeholder: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    display: "flex",
    width: 211,
    marginLeft: 16,
    color: Color.negro,
    textAlign: "left",
    height: 24,
    alignItems: "center",
  },
  vectorParent: {
    width: 251,
    flexDirection: "row",
  },
  frameParent1: {
    top: 13,
    left: 16,
    width: 286,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  baseBackgroundParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    marginTop: 20,
  },
  labelledParent: {
    alignItems: "center",
  },
  continuar: {
    color: Color.primario1,
    lineHeight: 41,
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  labelled1: {
    marginTop: 337,
  },
  frameContainer: {
    marginTop: 104,
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    height: 926,
  },
  registroNombre: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.white,
  },
});

export default REGISTRONOMBRE;
