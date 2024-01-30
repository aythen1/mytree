import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Bsqueda = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bsqueda}>
      <Image
        style={[styles.navigationIcon, styles.headerLayout]}
        contentFit="cover"
        source={require("../assets/navigation16.png")}
      />
      <View style={[styles.bsquedaChild, styles.headerLayout]} />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.backParent, styles.headerFlexBox]}>
        <Image
          style={[styles.backIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back5.png")}
        />
        <Text style={styles.nuevoMensaje}>Nuevo Mensaje</Text>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <View style={[styles.searchBar, styles.headerFlexBox]}>
          <Image
            style={styles.iconlylightOutlinesearch}
            contentFit="cover"
            source={require("../assets/iconlylightoutlinesearch3.png")}
          />
          <View style={styles.placeholderInput}>
            <Text style={styles.search}>Bruno Ph</Text>
          </View>
        </View>
        <View style={styles.iconlylightsendCopyWrapper}>
          <Image
            style={styles.backIconLayout}
            contentFit="cover"
            source={require("../assets/iconlylightsend-copy1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.parentPosition]}
        onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.frameChild} />
        <View style={[styles.frameParent, styles.textPosition]}>
          <View style={styles.frameGroup}>
            <View style={styles.unsplashilip77sbmoeParent}>
              <Image
                style={styles.unsplashilip77sbmoeIcon}
                contentFit="cover"
                source={require("../assets/unsplashilip77sbmoe.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.textPosition]}
                contentFit="cover"
                source={require("../assets/vector15.png")}
              />
            </View>
            <View style={styles.brunoPhamParent}>
              <Text style={styles.brunoPham}>Bruno Pham</Text>
              <Text style={styles.vendrnLuegoA}>
                ¿Vendrán luego a la casa del tío?
              </Text>
            </View>
          </View>
          <View style={styles.hace2MinutosParent}>
            <Text style={[styles.hace2Minutos, styles.textTypo]}>
              hace 2 minutos
            </Text>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-7159.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>2</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 428,
    position: "absolute",
  },
  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  backIconLayout: {
    height: 24,
    width: 24,
  },
  parentPosition: {
    position: "absolute",
    left: 20,
  },
  textPosition: {
    zIndex: 1,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    textAlign: "justify",
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
  },
  navigationIcon: {
    top: 821,
    height: 105,
    left: 0,
    width: 428,
  },
  bsquedaChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 188,
    left: 0,
    width: 428,
    backgroundColor: Color.white,
  },
  image6Icon: {
    width: 87,
    height: 55,
    left: 20,
    top: 3,
    position: "absolute",
  },
  backIcon: {
    overflow: "hidden",
  },
  nuevoMensaje: {
    fontSize: FontSize.size_5xl,
    marginLeft: 20,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  backParent: {
    top: 78,
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  iconlylightOutlinesearch: {
    height: 20,
    width: 20,
  },
  search: {
    fontWeight: "600",
    fontFamily: FontFamily.nunito,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.negro,
  },
  placeholderInput: {
    marginLeft: 6,
    flexDirection: "row",
    flex: 1,
  },
  searchBar: {
    backgroundColor: Color.fAFAFA,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  iconlylightsendCopyWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundGreyBackground,
    padding: Padding.p_7xs,
    marginLeft: 16,
    flexDirection: "row",
  },
  header: {
    marginLeft: -214,
    top: 119,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    left: "50%",
    width: 428,
    position: "absolute",
    backgroundColor: Color.white,
  },
  frameChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 388,
    height: 85,
    zIndex: 0,
    borderRadius: Border.br_3xs,
  },
  unsplashilip77sbmoeIcon: {
    width: 44,
    height: 44,
    zIndex: 0,
  },
  vectorIcon: {
    marginTop: -8,
    marginLeft: -10,
    top: "50%",
    height: 15,
    width: 20,
    left: "50%",
  },
  unsplashilip77sbmoeParent: {
    flexDirection: "row",
  },
  brunoPham: {
    fontSize: FontSize.size_base,
    lineHeight: 19,
    color: Color.primario1,
    textAlign: "justify",
    alignSelf: "stretch",
    letterSpacing: 0,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  vendrnLuegoA: {
    color: Color.textTextSecondary,
    marginTop: 4,
    alignSelf: "stretch",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  brunoPhamParent: {
    width: 210,
    marginLeft: 16,
  },
  frameGroup: {
    height: 45,
    flexDirection: "row",
  },
  hace2Minutos: {
    fontWeight: "300",
    color: Color.textPlaceholder,
  },
  frameItem: {
    width: 23,
    height: 23,
    zIndex: 0,
  },
  text: {
    left: 8,
    color: Color.grisHome,
    display: "flex",
    width: 7,
    height: 17,
    zIndex: 1,
    position: "absolute",
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    top: 3,
  },
  ellipseParent: {
    marginTop: 4,
    flexDirection: "row",
  },
  hace2MinutosParent: {
    alignItems: "flex-end",
    height: 44,
  },
  frameParent: {
    top: 20,
    flexDirection: "row",
    left: 20,
  },
  rectangleParent: {
    top: 208,
    left: 20,
  },
  bsqueda: {
    borderRadius: Border.br_31xl,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Bsqueda;
