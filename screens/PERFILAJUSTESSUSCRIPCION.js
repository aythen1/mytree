import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PERFILAJUSTESSUSCRIPCION = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilAjustesSuscripcion, styles.iconLayout]}>
      <Image
        style={styles.hugeIcon}
        contentFit="cover"
        source={require("../assets/hugeicon.png")}
      />
      <Image
        style={[styles.navigationIcon, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/navigation28.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.image6Parent}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View style={styles.iconlylightOutlinecalendarParent}>
              <Image
                style={styles.iconlylightOutlinecalendar}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinecalendar4.png")}
              />
              <Image
                style={[styles.documentIcon, styles.documentIconLayout]}
                contentFit="cover"
                source={require("../assets/document6.png")}
              />
              <Image
                style={styles.documentIconLayout}
                contentFit="cover"
                source={require("../assets/iconlylightoutlinesetting6.png")}
              />
            </View>
          </View>
          <View style={styles.backParent}>
            <Pressable
              style={styles.iconlylightOutlinecalendar}
              onPress={() => navigation.navigate("PERFILAJUSTES")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={styles.suscripciones}>Suscripciones</Text>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.rectangleParent, styles.rectangleParentFlexBox]}>
            <LinearGradient
              style={styles.frameChild}
              locations={[0, 1]}
              colors={["#dee274", "#7ec18c"]}
            />
            <Pressable
              style={[
                styles.estsPagandoLaSuscripcinPWrapper,
                styles.rectangleParentFlexBox,
              ]}
              onPress={() => navigation.navigate("Suscripciones")}
            >
              <Text style={styles.estsPagandoLaContainer}>
                <Text style={styles.estsPagandoLaSuscripcinP}>
                  <Text
                    style={styles.estsPagandoLa}
                  >{`Estás pagando la suscripción `}</Text>
                  <Text style={styles.premium}>
                    <Text style={styles.premium1}>{`PREMIUM
`}</Text>
                    <Text style={styles.blankLine}> </Text>
                  </Text>
                </Text>
                <Text style={styles.verMs}>Ver más</Text>
              </Text>
            </Pressable>
          </View>
          <View style={styles.frameFlexBox}>
            <Pressable
              style={styles.historialDePagosWrapper}
              onPress={() => navigation.navigate("Suscripciones")}
            >
              <Text
                style={[styles.historialDePagos, styles.historialDePagosTypo]}
              >
                Historial de pagos
              </Text>
            </Pressable>
            <Image
              style={styles.arrowDown2Icon}
              contentFit="cover"
              source={require("../assets/arrowdown28.png")}
            />
          </View>
          <View style={[styles.frameParent1, styles.frameFlexBox]}>
            <View style={styles.cancelarMiSuscripcinWrapper}>
              <Text
                style={[
                  styles.cancelarMiSuscripcin,
                  styles.historialDePagosTypo,
                ]}
              >
                Cancelar mi suscripción
              </Text>
            </View>
            <Image
              style={styles.arrowDown2Icon}
              contentFit="cover"
              source={require("../assets/arrowdown28.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  rectangleParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  historialDePagosTypo: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameFlexBox: {
    width: 388,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  hugeIcon: {
    height: "2.59%",
    width: "5.61%",
    top: "65.55%",
    right: "65.42%",
    bottom: "31.86%",
    left: "28.97%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  navigationIcon: {
    top: 821,
    width: 428,
    height: 105,
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  iconlylightOutlinecalendar: {
    height: 24,
    width: 24,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    width: 189,
    marginLeft: 112,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  image6Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  suscripciones: {
    marginLeft: 20,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  backParent: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: Color.white,
  },
  frameChild: {
    borderRadius: Border.br_11xl,
    height: 151,
    backgroundColor: Color.linearBoton,
    zIndex: 0,
    width: 387,
  },
  estsPagandoLa: {
    color: Color.white,
    fontWeight: "500",
    fontFamily: FontFamily.lato,
  },
  premium1: {
    color: Color.primario2,
  },
  blankLine: {
    color: Color.primario1,
  },
  premium: {
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  estsPagandoLaSuscripcinP: {
    fontSize: FontSize.size_5xl,
  },
  verMs: {
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
    color: Color.white,
    fontWeight: "700",
  },
  estsPagandoLaContainer: {
    textAlign: "center",
    width: 358,
    letterSpacing: 0,
  },
  estsPagandoLaSuscripcinPWrapper: {
    top: 20,
    left: 20,
    width: 347,
    height: 111,
    zIndex: 1,
    position: "absolute",
  },
  rectangleParent: {
    width: 387,
  },
  historialDePagos: {
    fontWeight: "500",
    lineHeight: 19,
    color: Color.negro,
  },
  historialDePagosWrapper: {
    width: 358,
  },
  arrowDown2Icon: {
    width: 9,
    height: 16,
    marginLeft: 20,
  },
  cancelarMiSuscripcin: {
    lineHeight: 19,
    fontWeight: "700",
  },
  cancelarMiSuscripcinWrapper: {
    width: 359,
  },
  frameParent1: {
    justifyContent: "flex-end",
  },
  frameContainer: {
    padding: Padding.p_xl,
    marginTop: 3,
  },
  frameParent: {
    top: 0,
    height: 926,
  },
  perfilAjustesSuscripcion: {
    borderRadius: Border.br_31xl,
    flex: 1,
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.white,
  },
});

export default PERFILAJUSTESSUSCRIPCION;
