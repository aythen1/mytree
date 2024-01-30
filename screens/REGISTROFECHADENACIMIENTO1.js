import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Keyboard2 from "../components/Keyboard2";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const REGISTROFECHADENACIMIENTO1 = () => {
  const navigation = useNavigation();
  const [frameContainer11Visible, setFrameContainer11Visible] = useState(false);

  const openFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(true);
  }, []);

  const closeFrameContainer11 = useCallback(() => {
    setFrameContainer11Visible(false);
  }, []);

  return (
    <>
      <View style={styles.registroFechaDeNacimiento}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector71.png")}
        />
        <View style={[styles.frameParent, styles.framePosition]}>
          <View style={styles.frameChildLayout}>
            <LinearGradient
              style={[styles.frameChild, styles.frameChildLayout]}
              locations={[0, 1]}
              colors={["#7ec18c", "#dee274"]}
            />
            <View style={styles.rectangleGroup}>
              <Pressable
                style={styles.frameItem}
                onPress={() => navigation.navigate("REGISTRONOMBRE")}
              />
              <Image
                style={[styles.backButtonIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/back-button1.png")}
              />
            </View>
            <View style={styles.registrateParent}>
              <Text style={[styles.registrate, styles.registrateTypo]}>
                ¡REGISTRATE!
              </Text>
              <Text style={[styles.laVerdaderaRiqueza, styles.registrateTypo]}>
                La verdadera riqueza de la vida no se mide en posesiones, sino
                en la calidad de las relaciones familiares que construimos y
                mantenemos a lo largo del tiempo.
              </Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={styles.lineParent}>
                <Image
                  style={styles.frameInner}
                  contentFit="cover"
                  source={require("../assets/line-711.png")}
                />
                <View style={styles.lineView} />
                <View
                  style={[styles.ellipseParent, styles.ellipseParentShadowBox]}
                >
                  <Image
                    style={styles.ellipseIcon}
                    contentFit="cover"
                    source={require("../assets/ellipse-71581.png")}
                  />
                  <Image
                    style={[styles.groupIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/group-11712750031.png")}
                  />
                </View>
                <View
                  style={[styles.ellipseGroup, styles.ellipseParentShadowBox]}
                >
                  <Image
                    style={styles.ellipseIcon}
                    contentFit="cover"
                    source={require("../assets/ellipse-71581.png")}
                  />
                  <Image
                    style={[styles.vectorIcon1, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/vector77.png")}
                  />
                </View>
                <View
                  style={[
                    styles.ellipseContainer,
                    styles.ellipseParentShadowBox,
                  ]}
                >
                  <Image
                    style={styles.ellipseIcon}
                    contentFit="cover"
                    source={require("../assets/ellipse-71581.png")}
                  />
                  <Image
                    style={[styles.vectorIcon2, styles.iconPosition]}
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
                    style={[styles.vectorIcon3, styles.vectorIcon3Layout]}
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
                    source={require("../assets/ellipse-7158.png")}
                  />
                  <Image
                    style={[styles.vectorIcon4, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/vector78.png")}
                  />
                </View>
              </View>
              <View style={styles.labelledParent}>
                <Text style={[styles.labelled, styles.labelledTypo]}>
                  Fecha de Nacimiento
                </Text>
                <Pressable
                  style={styles.baseBackgroundParent}
                  onPress={openFrameContainer11}
                >
                  <View
                    style={[
                      styles.baseBackground,
                      styles.ellipseParentShadowBox,
                    ]}
                  />
                  <View style={[styles.frameParent1, styles.iconPosition]}>
                    <View style={styles.vectorParent}>
                      <Image
                        style={styles.vectorIcon5}
                        contentFit="cover"
                        source={require("../assets/vector79.png")}
                      />
                      <Text style={[styles.placeholder, styles.labelledTypo]}>
                        20/12/1988
                      </Text>
                    </View>
                    <Image
                      style={[
                        styles.iconsErrorCircle,
                        styles.vectorIcon3Layout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/icons--error-circle.png")}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
            <Text
              style={[styles.labelled1, styles.labelledTypo]}
            >{`Continuar >`}</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer11Visible}>
        <View style={styles.frameContainer11Overlay}>
          <Pressable
            style={styles.frameContainer11Bg}
            onPress={closeFrameContainer11}
          />
          <Keyboard2 onClose={closeFrameContainer11} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 243,
    width: 428,
  },
  iconPosition: {
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
  vectorIcon3Layout: {
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
    backgroundColor: Color.linearBoton,
    left: 0,
    top: 0,
    position: "absolute",
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
    position: "absolute",
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
  laVerdaderaRiqueza: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    width: 377,
    marginTop: 10,
  },
  registrateParent: {
    top: 109,
    left: 26,
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
  lineView: {
    top: 19,
    left: 37,
    borderTopWidth: 3,
    width: 57,
    height: 3,
    borderColor: Color.primario1,
    borderStyle: "solid",
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
    height: 22,
    width: 22,
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
    lineHeight: 41,
    textAlign: "left",
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  frameContainer11Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer11Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  baseBackground: {
    borderRadius: Border.br_5xs,
    shadowRadius: 14,
    elevation: 14,
    borderWidth: 1,
    width: 325,
    height: 51,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    borderColor: Color.primario1,
    borderStyle: "solid",
    zIndex: 0,
    backgroundColor: Color.white,
  },
  vectorIcon5: {
    height: 23,
    width: 22,
  },
  placeholder: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.grisGeneral,
    display: "flex",
    width: 211,
    marginLeft: 16,
    height: 24,
    alignItems: "center",
  },
  vectorParent: {
    width: 251,
    flexDirection: "row",
  },
  iconsErrorCircle: {
    height: 24,
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
    marginTop: 20,
  },
  labelledParent: {
    marginTop: 104,
    alignItems: "center",
  },
  frameContainer: {
    alignItems: "center",
  },
  labelled1: {
    color: Color.primario1,
    marginTop: 337,
    lineHeight: 41,
    textAlign: "left",
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
    left: 0,
    height: 926,
    top: 0,
  },
  registroFechaDeNacimiento: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.white,
    height: 926,
  },
});

export default REGISTROFECHADENACIMIENTO1;
