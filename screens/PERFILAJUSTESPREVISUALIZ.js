import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const PERFILAJUSTESPREVISUALIZ = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilAjustesPrevisualiz, styles.iconLayout]}>
      <View
        style={[
          styles.perfilAjustesPrevisualizChild,
          styles.navigationIconLayout,
        ]}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameGroupShadowBox]}>
          <View style={styles.image6Parent}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View
              style={[
                styles.iconlylightOutlinecalendarParent,
                styles.frameViewFlexBox,
              ]}
            >
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
          <View style={[styles.backParent, styles.buttonFlexBox]}>
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
            <Text style={styles.visualizacinDeMytree}>
              Visualización de MyTree
            </Text>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.personalizacinDelMuroParent}>
            <Text style={styles.personalizacinTypo}>
              Personalización del muro
            </Text>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <View style={styles.colorParent}>
                <Text style={[styles.color, styles.personalizacinTypo]}>
                  Color
                </Text>
                <Text style={[styles.rojo, styles.personalizacinTypo]}>
                  Rojo
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <View style={styles.colorParent}>
                <Text style={[styles.color, styles.personalizacinTypo]}>
                  Mostrar videos de
                </Text>
                <Text style={[styles.rojo, styles.personalizacinTypo]}>
                  Todos
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-78.png")}
            />
            <Text
              style={[
                styles.personalizacinDelCalendario,
                styles.personalizacinTypo,
              ]}
            >
              Personalización del calendario
            </Text>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <View style={styles.colorParent}>
                <Text style={[styles.color, styles.personalizacinTypo]}>
                  Calendario
                </Text>
                <Text style={[styles.rojo, styles.personalizacinTypo]}>
                  Gregoriano
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <View style={styles.colorParent}>
                <Text style={[styles.color, styles.personalizacinTypo]}>
                  Tema
                </Text>
                <Text style={[styles.rojo, styles.personalizacinTypo]}>
                  Otoño
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/line-78.png")}
            />
            <Text
              style={[
                styles.personalizacinDelCalendario,
                styles.personalizacinTypo,
              ]}
            >
              Personalización del diario
            </Text>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <View style={styles.colorParent}>
                <Text style={[styles.color, styles.personalizacinTypo]}>
                  Color definido
                </Text>
                <Text style={[styles.rojo, styles.personalizacinTypo]}>
                  Alegre
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <View style={styles.colorParent}>
                <Text style={[styles.color, styles.personalizacinTypo]}>
                  Mostrar mis notas a
                </Text>
                <Text style={[styles.rojo, styles.personalizacinTypo]}>
                  Solo yo
                </Text>
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector47.png")}
              />
            </View>
          </View>
          <LinearGradient
            style={[styles.button, styles.buttonFlexBox]}
            locations={[0, 1]}
            colors={["#dee274", "#7ec18c"]}
          >
            <Text style={styles.signIn}>Guardar</Text>
          </LinearGradient>
          <View style={styles.frameInner} />
        </View>
      </View>
      <Image
        style={[styles.navigationIcon, styles.navigationIconLayout]}
        contentFit="cover"
        source={require("../assets/navigation28.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navigationIconLayout: {
    width: 428,
    position: "absolute",
  },
  frameParentPosition: {
    top: 0,
    left: 0,
  },
  frameGroupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: Color.white,
  },
  frameViewFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  personalizacinTypo: {
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  perfilAjustesPrevisualizChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 25,
    elevation: 25,
    height: 113,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: Color.white,
    left: 0,
    top: 0,
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
  },
  image6Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  visualizacinDeMytree: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    color: Color.negro,
  },
  backParent: {
    marginTop: 6,
  },
  frameGroup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    paddingBottom: Padding.p_xl,
    paddingHorizontal: Padding.p_xl,
  },
  color: {
    color: Color.negro,
    lineHeight: 19,
    letterSpacing: 0,
  },
  rojo: {
    color: Color.grisGeneral,
    marginTop: 10,
  },
  colorParent: {
    width: 347,
  },
  vectorIcon: {
    width: 21,
    height: 21,
    marginLeft: 20,
  },
  frameView: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    maxHeight: "100%",
    width: 388,
    marginTop: 20,
  },
  personalizacinDelCalendario: {
    marginTop: 20,
  },
  personalizacinDelMuroParent: {
    height: 1344,
    zIndex: 0,
  },
  signIn: {
    letterSpacing: 1,
    lineHeight: 24,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    flex: 1,
  },
  button: {
    top: 1364,
    borderRadius: Border.br_11xl,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.linearBoton,
    zIndex: 1,
    width: 388,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    top: 1438,
    height: 102,
    zIndex: 2,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameContainer: {
    paddingVertical: 0,
    marginTop: 23,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
  },
  frameParent: {
    left: 0,
    position: "absolute",
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    left: "50%",
    height: 105,
  },
  perfilAjustesPrevisualiz: {
    borderRadius: Border.br_31xl,
    height: 926,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PERFILAJUSTESPREVISUALIZ;
