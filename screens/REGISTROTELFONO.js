import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const REGISTROTELFONO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registroTelfono}>
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
              onPress={() => navigation.navigate("REGISTROTELFONO1")}
            />
            <Image
              style={styles.backButtonIcon}
              contentFit="cover"
              source={require("../assets/back-button1.png")}
            />
          </View>
          <View style={styles.registrateParent}>
            <Text style={[styles.registrate, styles.registrateTypo]}>
              ¡REGISTRATEeeeee!
            </Text>
            <Text style={[styles.elLazoFamiliar, styles.registrateTypo]}>
              El lazo familiar es una conexión inquebrantable que nos une en los
              momentos más difíciles y nos celebra en los momentos más felices
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.lineParent}>
              <Image
                style={[styles.frameInner, styles.lineIconPosition]}
                contentFit="cover"
                source={require("../assets/line-711.png")}
              />
              <Image
                style={[styles.lineIcon, styles.lineIconPosition]}
                contentFit="cover"
                source={require("../assets/line-73.png")}
              />
              <View
                style={[styles.ellipseParent, styles.ellipseParentShadowBox]}
              >
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-7158.png")}
                />
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/group-1171275003.png")}
                />
              </View>
              <View
                style={[styles.ellipseGroup, styles.ellipseParentShadowBox]}
              >
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-7158.png")}
                />
                <Image
                  style={[styles.vectorIcon1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector72.png")}
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
                  style={[styles.vectorIcon2, styles.iconLayout]}
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
                  style={styles.vectorIcon3}
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
                  style={styles.vectorIcon4}
                  contentFit="cover"
                  source={require("../assets/vector75.png")}
                />
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View style={styles.frameContainer}>
                <Text style={[styles.labelled, styles.labelledTypo]}>
                  Código de Verificación
                </Text>
              </View>
              <View style={styles.baseBackgroundParent}>
                <View style={styles.baseBackground} />
                <View style={[styles.baseBackground1, styles.baseShadowBox]} />
                <View style={[styles.baseBackground2, styles.baseShadowBox]} />
                <View style={[styles.baseBackground3, styles.baseShadowBox]} />
                <View style={[styles.baseBackground4, styles.baseShadowBox]} />
                <View style={[styles.baseBackground5, styles.baseShadowBox]} />
                <Text style={[styles.text, styles.textTypo]}>6</Text>
                <Text style={[styles.text1, styles.textTypo]}>2</Text>
                <Text style={[styles.text2, styles.textTypo]}>1</Text>
                <Text style={[styles.text3, styles.textTypo]}>1</Text>
                <Text style={[styles.text4, styles.textTypo]}>5</Text>
                <Text style={[styles.text5, styles.textTypo]}>0</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.labelled1}
            onPress={() => navigation.navigate("REGISTROPRIVACIDAD")}
          >
            <Text
              style={[styles.continuar, styles.labelledTypo]}
            >{`Continuar >`}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
  registrateTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.lato,
  },
  lineIconPosition: {
    height: 1,
    top: 20,
    position: "absolute",
  },
  ellipseParentShadowBox: {
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  labelledTypo: {
    textAlign: "left",
    lineHeight: 41,
    fontFamily: FontFamily.lato,
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
  },
  baseShadowBox: {
    marginLeft: 10,
    height: 51,
    width: 46,
    borderWidth: 1,
    borderColor: Color.primario1,
    borderStyle: "solid",
    elevation: 14,
    shadowRadius: 14,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    backgroundColor: Color.white,
  },
  textTypo: {
    color: Color.primary,
    top: 4,
    textAlign: "left",
    lineHeight: 41,
    fontFamily: FontFamily.lato,
    fontWeight: "900",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  vectorIcon: {
    height: "37.33%",
    width: "77.1%",
    top: "-5.98%",
    right: "0%",
    bottom: "68.65%",
    left: "22.9%",
    opacity: 0.2,
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
    zIndex: 1,
    position: "absolute",
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
  elLazoFamiliar: {
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
    left: 30,
    width: 328,
  },
  lineIcon: {
    left: 36,
    width: 235,
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
    zIndex: 1,
  },
  ellipseParent: {
    left: 178,
    flexDirection: "row",
  },
  vectorIcon1: {
    height: "42.5%",
    width: "60%",
    top: "30%",
    right: "20%",
    bottom: "27.5%",
    left: "20%",
    zIndex: 1,
  },
  ellipseGroup: {
    left: 267,
    flexDirection: "row",
  },
  vectorIcon2: {
    height: "50%",
    width: "45%",
    top: "25%",
    right: "27.5%",
    bottom: "25%",
    left: "27.5%",
    zIndex: 1,
  },
  ellipseContainer: {
    left: 356,
    flexDirection: "row",
  },
  vectorIcon3: {
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    zIndex: 1,
    position: "absolute",
  },
  frameView: {
    flexDirection: "row",
    left: 0,
  },
  vectorIcon4: {
    top: 9,
    left: 9,
    width: 22,
    height: 22,
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent1: {
    left: 89,
    flexDirection: "row",
  },
  lineParent: {
    width: 396,
    height: 40,
  },
  labelled: {
    color: Color.negro,
  },
  frameContainer: {
    alignItems: "center",
  },
  baseBackground: {
    height: 51,
    width: 46,
    borderWidth: 1,
    borderColor: Color.primario1,
    borderStyle: "solid",
    elevation: 14,
    shadowRadius: 14,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(244, 105, 76, 0.15)",
    zIndex: 0,
    backgroundColor: Color.white,
  },
  baseBackground1: {
    zIndex: 1,
  },
  baseBackground2: {
    zIndex: 2,
  },
  baseBackground3: {
    zIndex: 3,
  },
  baseBackground4: {
    zIndex: 4,
  },
  baseBackground5: {
    zIndex: 5,
  },
  text: {
    left: 16,
    zIndex: 6,
  },
  text1: {
    left: 71,
    zIndex: 7,
  },
  text2: {
    left: 126,
    zIndex: 8,
  },
  text3: {
    left: 181,
    zIndex: 9,
  },
  text4: {
    left: 236,
    zIndex: 10,
  },
  text5: {
    left: 291,
    zIndex: 11,
  },
  baseBackgroundParent: {
    flexDirection: "row",
    marginTop: 20,
  },
  frameParent1: {
    marginTop: 104,
    alignItems: "center",
  },
  continuar: {
    color: Color.primario1,
  },
  labelled1: {
    marginTop: 337,
  },
  frameGroup: {
    marginTop: 20,
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
    left: 0,
  },
  registroTelfono: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default REGISTROTELFONO;
